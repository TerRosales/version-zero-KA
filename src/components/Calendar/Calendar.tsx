// Calendar.tsx
import React, { useState } from 'react';

interface CalendarEvent {
    id: string;
    date: string;
    title: string;
    desc: string;
    completed: boolean;
    deadline: string;
}

const dummyCalendarEvents: CalendarEvent[] = [
    {
        id: '1',
        date: '2023-12-29',
        title: 'Event Title 1',
        desc: 'Test Event 1',
        completed: false,
        deadline: '2023-12-29',
    },
    {
        id: '2',
        date: '2023-12-30',
        title: 'Event Title 2',
        desc: 'Test Event 2',
        completed: false,
        deadline: '2023-12-31',
    },
];

const Calendar: React.FC = () => {
    // Function to get the dates for each day in the grid
    const getDatesForGrid = (displayedDate: Date) => {
        const firstDayOfMonth = new Date(displayedDate.getFullYear(), displayedDate.getMonth(), 1);
        const lastDayOfMonth = new Date(displayedDate.getFullYear(), displayedDate.getMonth() + 1, 0); // Last day of the current month
        const startingDay = firstDayOfMonth.getDay(); // 0 is Sunday, 1 is Monday, etc.

        const dates = [];

        // Days before the 1st of the month
        for (let i = 0; i < startingDay; i++) {
            dates.push(null);
        }

        // Days of the month
        for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
            const currentDate = new Date(firstDayOfMonth);
            currentDate.setDate(firstDayOfMonth.getDate() + i - 1);
            dates.push(currentDate);
        }

        return dates;
    };

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const [displayedDate, setDisplayedDate] = useState<Date>(new Date()); // Default displayed date to the current date
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date()); // Default selected date to the current date

    const handleDateClick = (date: Date | null) => {
        setSelectedDate(date);
    };

    const handleNextMonth = () => {
        const nextMonthDate = new Date(displayedDate);
        nextMonthDate.setMonth(displayedDate.getMonth() + 1);
        setDisplayedDate(nextMonthDate);
        setSelectedDate(null); // Clear selected date when moving to the next month
    };

    const handlePrevMonth = () => {
        const prevMonthDate = new Date(displayedDate);
        prevMonthDate.setMonth(displayedDate.getMonth() - 1);
        setDisplayedDate(prevMonthDate);
        setSelectedDate(null); // Clear selected date when moving to the previous month
    };

    const dates = getDatesForGrid(displayedDate);

    const eventsForDates = dates.map((date) => {
        const formattedDate = date ? date.toISOString().split('T')[0] : null;
        const eventsForDate = dummyCalendarEvents.filter((event) => event.deadline === formattedDate);
        return { date, events: eventsForDate };
    });

    const selectedEvents = selectedDate
        ? dummyCalendarEvents.filter((event) => event.deadline === selectedDate.toISOString().split('T')[0])
        : [];

    return (
        <div className="p-4">
            <div className="grid grid-cols-7 gap-4">
                {daysOfWeek.map((day, index) => (
                    <div key={index} className="text-center font-semibold">
                        {day}
                    </div>
                ))}
            </div>

            <div className="flex justify-between items-center mb-4">
                <button
                    onClick={handlePrevMonth}
                    className="px-4 py-2 rounded bg-blue-500 text-white"
                >
                    Previous Month
                </button>
                <span>{displayedDate.toLocaleString('en-US', { month: 'long', year: 'numeric' })}</span>
                <button
                    onClick={handleNextMonth}
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Next Month
                </button>
            </div>

            <div className="grid grid-cols-7 gap-4">
                {eventsForDates.map(({ date, events }, index) => (
                    <div
                        key={index}
                        className={`border cursor-pointer p-4 text-lg flex flex-col items-center justify-center ${date
                            ? selectedDate && date.toDateString() === selectedDate.toDateString()
                                ? 'bg-red-500 text-white'
                                : date.toDateString() === new Date().toDateString()
                                    ? ''
                                    : date < new Date()
                                        ? 'text-gray-600 bg-gray-200'
                                        : ''
                            : 'bg-gray-100'
                            }`}
                        onClick={() => (date ? handleDateClick(date) : null)}
                    >
                        {date ? (
                            <>
                                <span>{date.getDate()}</span>
                                {events.map((event) => (
                                    <div key={event.id}>{event.title}</div>
                                ))}
                            </>
                        ) : (
                            ''
                        )}
                    </div>
                ))}
            </div>

            {selectedDate && (
                <div className="mt-4">
                    <h2 className="text-xl font-semibold">Events for {selectedDate.toLocaleDateString()}</h2>
                    {selectedEvents.map((event) => (
                        <div key={event.id} className="border p-4 mt-2">
                            <div className="font-semibold">{event.title}</div>
                            <div>Deadline: {event.deadline}</div>
                            <div>
                                Due in {Math.ceil((new Date(event.deadline).getTime() - new Date().getTime()) / (1000 * 3600 * 24))}{' '}
                                days
                            </div>

                            <div>Description: {event.desc}</div>
                            <div>Status: {event.completed ? 'Complete' : 'In Progress'}</div>
                            {!event.completed && (<button
                                className="mt-2 bg-green-500 text-white px-2 py-1 rounded"
                                onClick={() => {
                                    // Your logic to mark as complete
                                    console.log(`Marking event ${event.id} as complete`);
                                }}
                            >
                                Mark as Complete
                            </button>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Calendar;