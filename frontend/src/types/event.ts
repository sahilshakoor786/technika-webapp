import { User } from "./user";

export type Event = {
  eventId: string;
  eventName: string;
  eventTime: string;
  eventVenue: string;
  isSoloEvent: boolean;
  minTeamSize: number;
  maxTeamSize: number;
};

export type Registration = {
  eventId: string;
  event: Event;
  leader: User;
  teamMembersDetails: User[];
}