import "../../Styles/Scheduler.css"
import React         from 'react'
import { Scheduler } from "@aldabil/react-scheduler"
import store         from "../../app/redux/store"

const colors = [
  { id: 1, text: "Red",    value: "#ff0000" },
  { id: 2, text: "Green",  value: "#00ff00" },
  { id: 3, text: "Blue",   value: "#0000ff" },
  { id: 5, text: "Orange", value: "#ffa500" },
  { id: 6, text: "Purple", value: "#800080" },
  { id: 7, text: "Pink",   value: "#ffc0cb" },
  { id: 8, text: "Brown",  value: "#a52a2a" },
  { id: 9, text: "Gray",   value: "#808080" },
]

function SchedulerCalendar() {
  const users = store.getState().users
  const rows  = users.map((user) => {
    return {
      id: user.id,
      text: `${user.name} - [${user.email}]`,
      value: user.email
    }
  })

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
            name: "add_participants",
            type: "select",
            options: rows,
            config: {
              label: "Add Participants"
            }
          },
          {
            name: "description", 
            type: "input",
            config: {
              label: "Description",
              required: true,
              multiline: true,
              rows: 4,
              min: 1,
              variant: "outlined"
            }
          },
          {
            name: "color",
            type: "select",
            options: colors,
            config: {
              label: "Color",
              required: false,
            }
          }
        ]}
      />
    </div>
  )
}

export default SchedulerCalendar