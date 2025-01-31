'use client';
import React from 'react';
import { Calendar, Button } from 'antd';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface EventCalendarProps {
      selectedDate?: Dayjs;
      onSelect?: (date: Dayjs) => void;
      eventDates?: string[];
}

const events = [
      { date: '2025-01-03', title: "Emma's Birthday", daysLeft: '2 Days' },
      { date: '2025-01-30', title: "Emma's Birthday", daysLeft: '2 Days' },
];

const EventCalendar: React.FC<EventCalendarProps> = () => {
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
            const hasEvent = events.some((event) => event.date === date.format('YYYY-MM-DD'));

            return (
                  <div
                        className={`relative flex items-center justify-center p-2 rounded-md ${
                              hasEvent ? 'bg-pink-500 text-white' : 'hover:bg-gray-200'
                        }`}
                  >
                        {date.date()}
                        {hasEvent && <div className="absolute top-0 right-0 size-2 bg-yellow-400 rounded-full" />}
                  </div>
            );
      };

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
                  <Button type="primary" className="w-full mt-4 h-[50px] text-lg bg-pink-500">
                        Emma's Birthday
                  </Button>
            </div>
      );
};

export default EventCalendar;
