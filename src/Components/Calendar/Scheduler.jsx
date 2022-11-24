import "../../Styles/Scheduler.scss"
import React         from 'react'
import { Scheduler } from "@aldabil/react-scheduler";

function SchedulerCalendar() {
  return (
    <div className="scheduler">
      <Scheduler
        hourFormat="24"
        view="month"
        deletable={false}
        month={{
          weekDays: [0, 1, 2, 3, 4, 5, 6],
          weekStartOn: 1,
          startHour: 6, 
          endHour: 21
        }}
        week={{
          weekDays: [0, 1, 2, 3, 4, 5, 6],
          weekStartOn: 1,
          startHour: 6, 
          endHour: 21,
          step: 60
        }}
        day={{
          startHour: 6,
          endHour: 21,
          step: 60
        }}
        events={[
          {
            event_id: 1,
            title: "Company session",
            start: new Date("2022/11/11 13:00"),
            end: new Date("2022/11/11 14:30"),
          },
          {
            event_id: 2,
            title: "Company session",
            start: new Date("2022/11/14 10:00"),
            end: new Date("2022/11/14 12:00"),
          },
        ]}
        fields={[
          {
            name: "description", 
            type: "input", 
            config: {
              label: "Description",
              required: true,
              min: 1,
              variant: "outlined"
            }
          },
          {
            name: "color",
            type: "input",
            config: {
              label: "Color",
              required: false,
              min: 1,
              variant: "outlined"
            }
          }
        ]}
      />
    </div>
  )
}

export default SchedulerCalendar