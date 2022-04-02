import { Calendar, Views, dateFnsLocalizer, Event } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enAU from "date-fns/locale/en-AU";
import addHours from "date-fns/addHours";
import startOfHour from "date-fns/startOfHour";
import { Timetable, Event as TEvent } from "../lib/timetable";
import { useState } from "react";

const locales = {
  "en-AU": enAU,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const endOfHour = (date: Date): Date => addHours(startOfHour(date), 1);
const now = new Date();
const start = endOfHour(now);
const end = addHours(start, 2);

const CalendarComponent = ({ data }: { data: Timetable }) => {
  const [events, setEvents] = useState<Event[]>([
    {
      title: "Learn cool stuff",
      desc: "test",
      start,
      end,
    },
  ]);
  console.log(events);

  return (
    <>
      <Calendar
        localizer={localizer}
        defaultView={Views.WEEK}
        events={events}
        startAccessor="start"
        endAccessor="end"
        resourceIdAccessor="resourceId"
        resources={resourceMap}
        resourceTitleAccessor="resourceTitle"
        style={{ height: "70vh" }}
      />
    </>
  );
};

export default CalendarComponent;
