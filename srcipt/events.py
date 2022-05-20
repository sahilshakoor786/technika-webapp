from ntpath import join
import string
import os
from pymongo import MongoClient
import copy
import re

import csv
client = MongoClient(
    'mongodb+srv://read-user:8LGcpcGhEbO6bN26@cluster0.fvsvy.mongodb.net/userDb?retryWrites=true&w=majority')
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
            "leader_phone_number":i["leader"]["phone"],
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


result = client["userDb"]["eventregistrationdetails"].aggregate([
    {
        '$group': {
            '_id': '$eventId',
            'count': {
                '$sum': 1
            }
        }
    }, {
        '$lookup': {
            'from': 'events',
            'localField': '_id',
            'foreignField': 'eventId',
            'as': 'event'
        }
    }, {
        '$unwind': {
            'path': '$event'
        }
    }
])

print(":: Generated CSV for all events")

with open(f'event_count.csv', 'w', newline='') as csvfile:
    fieldnames = ['event_name', 'event_id', 'registrations']
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)

    writer.writeheader()

    for i in result:

        writer.writerow({
            'event_name': i['event']['eventName'],
            'event_id': i['event']['eventId'],
            'registrations': i['count']
        })


result = client["userDb"]["users"].find({"email": {"$regex": "hbtu.ac.in"}})


print(":: Generated CSV for all hbtu students")


with open(f'hbtu_students.csv', 'w', newline='') as csvfile:
    fieldnames = ['tscId', 'name', 'email',
                  "college", "branch", "batch"]
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)

    writer.writeheader()

    for i in result:

        writer.writerow({
            'tscId': i['tscId'],
            'name': i['name'],
            'email': i['email'],
            "college": i['college'],
            "branch": i['branch'],
            "batch": i['batch']
        })


result = client["userDb"]["users"].find({
    '$and': [
        {
            'college': {
                '$nin': [
                    'Harcourt Butler University , Kanpur', 'Harcourt Butler Technical University, Kanpur', 'HBTU', '', 'hbtu', 'hbti', 'HBTI'
                ]
            }
        }, {
            'college': {
                '$not': {
                    '$regex': re.compile(r"harcourt"),

                }
            }
        }, {
            'college': {
                '$not': {
                    '$regex': re.compile(r"hbtu"),

                }
            }
        }, {
            'college': {
                '$not': {
                    '$regex': re.compile(r"butler"),

                }
            }
        }
    ]
})


print(":: Generated CSV for all non hbtu  students")

with open(f'non_students.csv', 'w', newline='') as csvfile:
    fieldnames = ['tscId', 'name', 'email',
                  "college", "branch", "batch"]
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)

    writer.writeheader()

    for i in result:

        writer.writerow({
            'tscId': i['tscId'],
            'name': i['name'],
            'email': i['email'],
            "college": i['college'],
            "branch": i['branch'],
            "batch": i['batch']
        })


result = client["userDb"]["registrationpayments"].aggregate(
    [
        {
            '$match': {
                'paymentStatus': 'success'
            }
        }, {
            '$lookup': {
                'let': {
                    'userObjId': {
                        '$toObjectId': '$userId'
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
                'as': 'user'
            }
        }, {
            '$unwind': {
                'path': '$user'
            }
        }
    ]
)

print(":: Generated CSV for all non hbtu  students payment")

with open(f'non_hbtu_payment.csv', 'w', newline='') as csvfile:
    fieldnames = ['tscId', 'name', 'email', 'phoneNumber', 'isAccommodation',
                  "college",  "branch", "batch"]
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)

    writer.writeheader()

    for i in result:

        writer.writerow({
            'tscId': i['user']['tscId'],
            'name': i['user']['name'],
            'email': i['user']['email'],
            "college": i['user']['college'],
            "phoneNumber": i['user']['phone'],
            "isAccommodation": i['isAccommodation'],

            "branch": i['user']['branch'],
            "batch": i['user']['batch'],

        })
