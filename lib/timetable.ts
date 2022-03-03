import timetableEvents from "./timetable_subj.json";

export interface Event {
  class_code: string;
  description: string;
  day: string;
  start: string;
  finish: string;
  duration: string;
  weeks: string;
  location: string | null;
  class_dates: string;
  start_date: string;
  subj_code: string;
  subj_name: string;
  day_no: number;
  subj: string;
}

export type Timetable = Event[];

export const timetable = timetableEvents as Timetable;

export function getTimetableData() {
  // sort by location then day_no then start
  timetable.sort((a, b) => a.start.localeCompare(b.start));
  timetable.sort((a, b) => a.day_no - b.day_no);
  timetable.sort((a, b) => a.location?.localeCompare(b.location));

  return timetable;
}
