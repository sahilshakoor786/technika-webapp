import { User } from "./user";

export type Event = {
  _id: string;
  eventId: string;
  eventName: string;
  eventTime: string;
  eventVenue: string;
  isSoloEvent: boolean;
  minTeamSize: number;
  maxTeamSize: number;
  eventDescription: string;
};

export type Registration = {
  eventId: string;
  event: Event;
  leader: User;
  teamMembersDetails: User[];
  _id: string;
  teamMembers: string[];
  leaderId: string;
  isTeamRegistration: boolean;
  description: string;
};
