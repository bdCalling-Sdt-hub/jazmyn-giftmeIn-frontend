'use client';

import { Button } from 'antd';
import React, { useState } from 'react';
import EventCalendar from './EventCalendar';
import Modal from '@/components/Reusable/Modal';
import AddEvent from './AddEvent';
import { useGetEventsQuery } from '@/redux/apiSlices/eventSlice';
import moment from 'moment';

const EventPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null); // For edit

  const { data: eventsList, isLoading } = useGetEventsQuery(undefined);

  if (isLoading) return <div>Loading...</div>;

  const eventsData = eventsList?.data;

  const upcomingEvents = eventsData
    ?.filter((event: any) => moment(event.eventDate).isAfter(moment()))
    .sort((a: any, b: any) => moment(a.eventDate).valueOf() - moment(b.eventDate).valueOf());

  const nextEvent = upcomingEvents?.[0];

  const openAddModal = () => {
    setSelectedEvent(null);
    setIsModalOpen(true);
  };

  const openEditModal = (event: any) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  return (
    <div className="md:flex gap-5 justify-between min-h-screen">
      <div className="rounded-lg shadow-lg border-[1px] border-[#dfdddd63] w-full p-6">
        {/* Next Event */}
        <div className="bg-white drop-shadow p-4 rounded-lg mb-6">
          {nextEvent ? (
            <div className="flex items-center gap-3">
              <div className="bg-[#FFF1F8] w-[90px] h-[90px] rounded-lg flex flex-col items-center justify-center">
                <div className="text-primary text-4xl font-bold">{moment(nextEvent.eventDate).format('D')}</div>
                <div className="text-black text-2xl">{moment(nextEvent.eventDate).format('MMM')}</div>
              </div>
              <div>
                <div className="text-sm text-[#9A9F9E]">Next Event</div>
                <div className="text-lg font-bold text-[#160E4B]">{nextEvent.eventName}</div>
                <div className="text-sm text-[#9A9F9E]">
                  In {Math.ceil(moment(nextEvent.eventDate).diff(moment(), 'days', true))} Days
                </div>
              </div>
            </div>
          ) : (
            <div className="text-gray-500 text-center">No upcoming events</div>
          )}
        </div>

        {/* Upcoming Events */}
        <div>
          <h3 className="text-xl font-bold text-[#160E4B] mb-4">Upcoming Events</h3>
          <div className="space-y-4">
            {eventsData
              ?.filter((event: any) => event.eventDate)
              .sort((a: any, b: any) => moment(a.eventDate).valueOf() - moment(b.eventDate).valueOf())
              .map((event: any, index: number) => (
                <div
                  key={index}
                  onClick={() => openEditModal(event)}
                  className="bg-white p-4 rounded-lg drop-shadow hover:shadow-lg hover:cursor-pointer flex items-center gap-3"
                >
                  <div className="bg-[#FFF1F8] w-[70px] h-[70px] rounded-lg flex flex-col items-center justify-center">
                    <div className="text-primary text-3xl font-bold">{moment(event.eventDate).format('D')}</div>
                    <div className="text-primary text-sm">{moment(event.eventDate).format('MMM')}</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-[#160E4B]">{event.eventName}</div>
                    <div className="text-sm text-[#9A9F9E]">
                      In {Math.ceil(moment(event.eventDate).diff(moment(), 'days', true))} Days
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full max-w-[378px] space-y-6">
        <Button onClick={openAddModal} style={{ width: '100%' }} type="primary">
          Add Event
        </Button>
        <div>
          <EventCalendar events={eventsData} />
        </div>
      </div>

      {/* Modal with dynamic content */}
      <Modal
        width={700}
        setOpen={setIsModalOpen}
        open={isModalOpen}
        body={<AddEvent event={selectedEvent} onClose={() => setIsModalOpen(false)} />}
      />
    </div>
  );
};

export default EventPage;
