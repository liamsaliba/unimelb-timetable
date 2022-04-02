import timetableEvents from "./timetable_subj.json";

export interface FullEvent {
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
  .sort((a, b) => a.start.localeCompare(b.start))
  .sort((a, b) => a.day_no - b.day_no)
  .sort((a, b) => a.location?.localeCompare(b.location))
  .map((event: FullEvent) => ({
    class_code: event.class_code,
    location: event.location || "Online",
    subj_name: event.subj_name,
    subj_code: event.subj_code,
    time: `${event.day} ${event.start} - ${event.finish}`,
  }));

  return timetable as Timetable;
}

export function getEvents() {
  const eg = "01 Mar 2022 - 12 Apr 2022, 26 Apr 2022 - 24 May 2022 ";
  const events = eg.split(",").map((event) => {
    const [start, finish] = event.split("-").map((date) => date.trim());
    return {
      start,
      finish,
    };
  });
}
