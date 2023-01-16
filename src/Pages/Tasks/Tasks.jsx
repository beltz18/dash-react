import '../../Styles/tasks.css'
import React               from 'react'
import Sidebar             from "../../Components/Sidebar/Sidebar"
import Navbar              from "../../Components/Navbar/Navbar"
import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from '@syncfusion/ej2-react-kanban'

class Tasks extends React.Component {
  dataSource = [
    {
      "Id": 1,
      "Title": "Analyze the new requirements gathered from the customer.",
      "Status": "In Progress",
      "Summary": "Analyze the new requirements gathered from the customer.",
      "Type": "Story",
      "Priority": "High",
      "Estimate": 0,
      "Assignee": "Jose Lopez",
      "Tags": "Analyze, Customer, Requirements",
      "Color": "#bb35cd"
    },
    {
      "Id": 2,
      "Title": "Make sure that the design is responsive and works on all devices.",
      "Status": "Open",
      "Summary": "Make sure that the design is responsive and works on all devices.",
      "Type": "Story",
      "Priority": "Normal",
      "Estimate": 3.2,
      "Assignee": "Mauricio Petit",
      "Tags": "Design, Responsive, Devices",
      "Color": "#1aaa55"
    },
    {
      "Id": 4,
      "Title": "Make sure that the design is responsive and works on all devices.",
      "Status": "Open",
      "Summary": "Make sure that the design is responsive and works on all devices.",
      "Type": "Story",
      "Priority": "Normal",
      "Estimate": 3.2,
      "Assignee": "Andi Montilla",
      "Tags": "Design, Responsive, Devices",
      "Color": "#0000ff"
    },
    {
      "Id": 5,
      "Title": "Make sure that the design is responsive and works on all devices.",
      "Status": "Open",
      "Summary": "Make sure that the design is responsive and works on all devices.",
      "Type": "Story",
      "Priority": "Normal",
      "Estimate": 3.2,
      "Assignee": "Andi Montilla",
      "Tags": "Design, Responsive, Devices",
      "Color": "#0000ff"
    },
  ]

  cardTooltipTemplate = (data) => {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td><b>Assignee</b></td>
              <td>{data.Assignee}</td>
            </tr>
            <tr>
              <td><b>Estimate</b></td>
              <td>{data.Estimate}</td>
            </tr>
            <tr>
              <td><b>Summary</b></td>
              <td>{data.Summary}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }

  render() {
    return (
      <div className="tasks">
        <Sidebar />
        <div className="tasksContainer">
          <Navbar />
          <br />
          <KanbanComponent
            dataSource={this.dataSource}
            keyField="Status"
            cardSettings={{ contentField: "Summary", headerField: "Id", selectionType: "Multiple", tagsField: "Tags", grabberField: "Color" }}
            width="100%"
            height="100%"
            swimlaneSettings={{ keyField: "Assignee" }}
            enableTooltip={true}
            tooltipTemplate={this.cardTooltipTemplate}
          >
            <ColumnsDirective>
              <ColumnDirective headerText='To Do'       keyField="Open"        minCount={1} maxCount={7}></ColumnDirective>
              <ColumnDirective headerText='In Progress' keyField="In Progress" minCount={1} maxCount={7}></ColumnDirective>
              <ColumnDirective headerText='Review'      keyField="Review"      minCount={1} maxCount={7}></ColumnDirective>
              <ColumnDirective headerText='Done'        keyField="Done"        minCount={1} maxCount={7}></ColumnDirective>
            </ColumnsDirective>
          </KanbanComponent>
        </div>
      </div>
    )
  }
}

export default Tasks
