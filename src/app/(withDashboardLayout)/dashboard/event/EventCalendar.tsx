'use client';
import React from 'react';
import { Calendar, Button } from 'antd';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Event {
  _id: string;
  eventName: string;
  eventDate: string;
}

interface EventCalendarProps {
  events: Event[];
}

const EventCalendar: React.FC<EventCalendarProps> = ({ events }) => {
  const [currentMonth, setCurrentMonth] = React.useState(dayjs());

  const onSelect = (date: Dayjs) => {
    setCurrentMonth(date);
  };

  const headerRender = ({ value, onChange }: any) => {
    const monthFormat = 'MMM YYYY';
    return (
      <div className="flex items-center justify-between mb-4">
        <Button
          type="text"
          onClick={() => {
            const newValue = value.clone().subtract(1, 'month');
            onChange(newValue);
            setCurrentMonth(newValue);
          }}
          icon={<ChevronLeft size={24} />}
        />
        <div className="text-xl font-semibold">{value.format(monthFormat)}</div>
        <Button
          type="text"
          onClick={() => {
            const newValue = value.clone().add(1, 'month');
            onChange(newValue);
            setCurrentMonth(newValue);
          }}
          icon={<ChevronRight size={24} />}
        />
      </div>
    );
  };

  const dateCellRender = (date: Dayjs) => {
    const formattedDate = date.format('YYYY-MM-DD');
    const event = events?.find((e) => dayjs(e.eventDate).format('YYYY-MM-DD') === formattedDate);

    return (
      <div
        className={`relative flex items-center justify-center p-2 rounded-md ${
          event ? 'bg-pink-500 text-white' : 'hover:bg-gray-200'
        }`}
      >
        {date.date()}
        {event && <div className="absolute top-0 right-0 size-2 bg-yellow-400 rounded-full" />}
      </div>
    );
  };

  const nextEvent = events
    ?.filter((e) => dayjs(e.eventDate).isAfter(dayjs()))
    ?.sort((a, b) => dayjs(a.eventDate).diff(dayjs(b.eventDate)))[0];

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg border border-[#dfdddd63]">
      <Calendar
        value={currentMonth}
        onSelect={onSelect}
        headerRender={headerRender}
        fullCellRender={dateCellRender}
        fullscreen={false}
        className="custom-calendar"
      />
      {nextEvent && (
        <Button type="primary" className="w-full mt-4 h-[50px] text-lg bg-pink-500">
          {nextEvent.eventName} on {dayjs(nextEvent.eventDate).format('DD MMM YYYY')}
        </Button>
      )}
    </div>
  );
};

export default EventCalendar;
