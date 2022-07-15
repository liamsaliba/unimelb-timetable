import timetableEvents from "./timetable_subj.json";

export interface FullEvent {
  c: string; // class_code
  d: string; // description
  td: string; // day
  ts: string; // start
  tf: string; // finish
  dd: string; // duration
  w: string; // weeks
  l: string | null; // location
  cd: string; // class_dates
  sd: string; // start_date
  sc: string; // subj_code
  sn: string; // subj_name
  dn: number; // day_no
  s: string; // subj
}

export const fullTimetable = timetableEvents as FullEvent[];

export interface Event {
  class_code: string;
  location: string;
  time: string;
  subj_name: string;
  subj_code: string;
}

export type Timetable = Event[];


export function getTimetableData() {
  const timetable = fullTimetable
  .sort((a, b) => a.ts.localeCompare(b.ts))
  .sort((a, b) => a.dn - b.dn)
  .sort((a, b) => a.l?.localeCompare(b.l))
  .map((event: FullEvent) => ({
    class_code: event.c,
    location: event.l || "Online",
    subj_name: event.sn,
    subj_code: event.sc,
    time: `${event.td} ${event.ts} - ${event.tf}`,
  }));

  return timetable as Timetable;
}
