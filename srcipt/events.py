from ntpath import join
import string
import os
from pymongo import MongoClient
import copy

import csv
client = MongoClient(
    'mongodb+srv://technika:EK8Tn2BIVn7xpxYM@cluster0.fvsvy.mongodb.net/userDb')
os.makedirs('events', exist_ok=True)
events = client['userDb']['events'].find()

for event in events:
    result = client['userDb']['eventregistrationdetails'].aggregate([
        {
            '$lookup': {
                'let': {
                    'userObjId': {
                        '$toObjectId': '$leaderId'
                    }
                },
                'from': 'users',
                'pipeline': [
                    {
                        '$match': {
                            '$expr': {
                                '$eq': [
                                    '$_id', '$$userObjId'
                                ]
                            }
                        }
                    }
                ],
                'as': 'leader'
            }
        }, {
            '$lookup': {
                'from': 'events',
                'localField': 'eventId',
                'foreignField': 'eventId',
                'as': 'event'
            }
        }, {
            '$lookup': {
                'from': 'users',
                'localField': 'teamMembers',
                'foreignField': '_id',
                'as': 'teamMembersDetails'
            }
        },
        {
            "$match": {
                "eventId": event['eventId'],
            },
        },  {
            '$unwind': {
                'path': '$event'
            }
        }, {
            '$unwind': {
                'path': '$leader'
            }
        }, {
            '$sort': {
                'eventId': 1
            }
        }
    ])

    data1 = []
    data2 = []

    for i in result:

        teamMembersTscIds = ""

        for member in i['teamMembersDetails']:
            teamMembersTscIds += member['tscId'] + "-"

        teamMembersTscIds = teamMembersTscIds[:-1]

        result1 = {
            'event_name': i['event']['eventName'],
            'event_id': i['event']['eventId'],
            'leader_tsc_id': i['leader']['tscId'],
            "leader_name": i['leader']['name'],
            "team-members-tsc-ids":  teamMembersTscIds,
            "college": i['leader']['college'],
            "branch": i['leader']['branch'],
            "batch": i['leader']['batch']
        }

        result2 = [{
            'tscId': i['leader']['tscId'],
            'name': i['leader']['name'],
            'email': i['leader']['email'],
            "phoneNumber": i['leader']['phone'],
            "college": i['leader']['college'],
            "branch": i['leader']['branch'],
            "batch": i['leader']['batch']
        }]

        for member in i['teamMembersDetails']:
            result2.append({
                'tscId': member['tscId'],
                'name': member['name'],
                'email': member['email'],
                "phoneNumber": member['phone'],
                "college": member['college'],
                "branch": member['branch'],
                "batch": member['batch']
            })

        data1.append(result1)
        data2.append(result2)

    print(":: Generated CSV for event: ", event['eventName'])
    with open(f'events/{event["eventName"].replace("?","_").replace(" ", "_")}.csv', 'w', newline='') as csvfile2:
        fieldnames = ['event_name', 'event_id', 'leader_tsc_id',
                      "leader_name", "team-members-tsc-ids", "college", "branch", "batch"]
        writer = csv.DictWriter(csvfile2, fieldnames=fieldnames)

        writer.writeheader()

        for i in data1:
            writer.writerow({
                'event_name': i['event_name'],
                'event_id': i['event_id'],
                'leader_tsc_id': i['leader_tsc_id'],
                "leader_name": i['leader_name'],
                "team-members-tsc-ids":  i['team-members-tsc-ids'],
                "college": i['college'],
                "branch": i['branch'],
                "batch": i['batch']

            })

    with open(f'events/{event["eventName"].replace("?","_").replace(" ", "_")}Members.csv', 'w', newline='') as csvfile1:
        fieldnames = ['tscId', 'name', 'email',
                      "phoneNumber", "college", "branch", "batch"]
        writer = csv.DictWriter(csvfile1, fieldnames=fieldnames)

        writer.writeheader()

        for data in data2:
            for i in data:

                writer.writerow({
                    'tscId': i['tscId'],
                    'name': i['name'],
                    'email': i['email'],
                    "phoneNumber": i['phoneNumber'],
                    "college": i['college'],
                    "branch": i['branch'],
                    "batch": i['batch']
                })
