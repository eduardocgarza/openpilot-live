import React from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { VelocityTimeAdapter } from "../../Adapters"
import { COLOR_MAIN_BLUE } from "../../../../../constants/Colors"

interface LineGraphVelocityTimeProps {
  data: VelocityTimeAdapter
}

export default function LineGraphVelocityTime(props: LineGraphVelocityTimeProps) {
  const { data } = props
  return (
    <ResponsiveContainer height="100%" width="100%">
      <LineChart 
        height={200}
        width={400}
        data={data}
      >
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dot={false} dataKey="speed" stroke={COLOR_MAIN_BLUE}/>
      </LineChart>
    </ResponsiveContainer>
  )
}