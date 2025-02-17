'use client';

import { Button } from 'antd';
import React, { useState } from 'react';
import EventCalendar from './EventCalendar';
import Modal from '@/components/Reusable/Modal';
import AddEvent from './AddEvent';
import { useGetEventsQuery } from '@/redux/apiSlices/eventSlice';
import moment from 'moment';

const events = [
  {
    date: '3',
    month: 'Jan',
    year: '2025',
    title: "Emma's Birthday",
    daysLeft: '2 Days',
  },
  {
    date: '3',
    month: 'Jan',
    year: '2025',
    title: "EmGma's Birthday",
    daysLeft: '2 Days',
  },
  {
    date: '3',
    month: 'Jan',
    year: '2025',
    title: "EmGma's Birthday",
    daysLeft: '2 Days',
  },
  {
    date: '3',
    month: 'Jan',
    year: '2025',
    title: "EmGma's Birthday",
    daysLeft: '2 Days',
  },
  {
    date: '3',
    month: 'Jan',
    year: '2025',
    title: "EmGma's Birthday",
    daysLeft: '2 Days',
  },
];

const EventPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: eventsList, isLoading } = useGetEventsQuery(undefined);

  if (isLoading) return <div>Loading...</div>;

  const eventsData = eventsList?.data;
  console.log(eventsData);

  return (
    <div className="md:flex  gap-5  justify-between min-h-screen">
      <div className="rounded-lg shadow-lg border-[1px] border-[#dfdddd63] w-full p-6">
        {/* Next Event Section */}
        <div className="bg-white drop-shadow p-4 rounded-lg mb-6">
          <div className="flex items-center gap-3">
            <div className="bg-[#FFF1F8]  w-[90px] h-[90px] rounded-lg flex flex-col items-center justify-center">
              <div className="text-primary text-4xl font-bold">3</div>
              <div className="text-black text-2xl">Jan</div>
            </div>
            <div>
              <div className="text-sm text-[#9A9F9E]">Next Event</div>
              <div className="text-lg font-bold text-[#160E4B]">Emma's Birthday</div>
              <div className="text-sm text-[#9A9F9E]">In 2 Days</div>
            </div>
          </div>
        </div>

        {/* Upcoming Events Section */}
        <div>
          <h3 className="text-xl font-bold text-[#160E4B] mb-4">Upcoming Events</h3>
          <div className="space-y-4">
            {eventsData.map((event: any, index: number) => (
              <div key={index} className="bg-white p-4 rounded-lg drop-shadow flex items-center gap-3">
                <div className="bg-[#FFF1F8] w-[70px] h-[70px] rounded-lg flex flex-col items-center justify-center">
                  <div className="text-primary text-3xl font-bold">{moment(event.eventDate).format('D')}</div>
                  <div className="text-primary text-sm">{moment(event.eventDate).format('MMM')}</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-[#160E4B]">{event.eventName}</div>
                  <div className="text-sm text-[#9A9F9E]">
                    In {event.eventDate ? Math.ceil(moment(event.eventDate).diff(moment(), 'days', true)) : 0} Days
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full max-w-[378px] space-y-6">
        <Button onClick={() => setIsModalOpen(true)} style={{ width: '100%' }} type="primary">
          Add Event
        </Button>

        <div>
          <EventCalendar eventDates={eventsData?.map((event: any) => event.eventDate)} />
        </div>
      </div>

      <Modal width={700} setOpen={setIsModalOpen} open={isModalOpen} body={<AddEvent />} />
    </div>
  );
};

export default EventPage;
