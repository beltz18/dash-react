import "../../Styles/Chart.scss"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const data = [
  {
    name: 'April',
    total: 5000,
  },
  {
    name: 'May',
    total: 7000,
  },
  {
    name: 'June',
    total: 3000,
  },
  {
    name: 'July',
    total: 4000,
  },
  {
    name: 'August',
    total: 2500,
  },
  {
    name: 'September',
    total: 1800,
  },
]

const Chart = () => {
  return (
    <div className="chart">
      <div className="title">
        <span>Last 6 months</span>
      </div>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0
          }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%"  stopColor="#8884d8" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area type="monotone" dataKey="total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart