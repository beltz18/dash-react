import "../../Styles/Scheduler.scss"
import { Scheduler } from "@aldabil/react-scheduler";

function SchedulerCalendar() {
  return (
    <div className="scheduler">
      <Scheduler
        view="month"
        deletable={false}
        month={{
          weekDays: [0, 1, 2, 3, 4, 5, 6],
          weekStartOn: 6,
          startHour: 6, 
          endHour: 21
        }}
        day={{
          startHour: 6,
          endHour: 21,
          step: 60
        }}
        events={[
          {
            event_id: 1,
            title: "Event 1",
            start: new Date("2022/11/11 09:30"),
            end: new Date("2022/11/11 10:30"),
          },
          {
            event_id: 2,
            title: "Event 2",
            start: new Date("2022/11/12 10:00"),
            end: new Date("2022/11/12 11:00"),
            
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