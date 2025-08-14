'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Goal, Handshake, Crosshair, Zap, Activity } from "lucide-react"
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartConfig } from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

const chartData = [
  { month: "January", stamina: 75 },
  { month: "February", stamina: 78 },
  { month: "March", stamina: 82 },
  { month: "April", stamina: 80 },
  { month: "May", stamina: 85 },
  { month: "June", stamina: 88 },
]

const chartConfig = {
  stamina: {
    label: "Stamina",
    color: "hsl(var(--primary))",
    icon: Activity
  },
} satisfies ChartConfig

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Welcome, Parent!</h1>
        <p className="text-muted-foreground">Here's your child's performance overview.</p>
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Player Statistics</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Goals</CardTitle>
              <Goal className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">+2 from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Assists</CardTitle>
              <Handshake className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">+1 from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pass Accuracy</CardTitle>
              <Crosshair className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">89%</div>
              <p className="text-xs text-muted-foreground">+1.2% from last game</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Stamina</CardTitle>
              <Zap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">88%</div>
              <p className="text-xs text-muted-foreground">Peak performance</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>Stamina Over Time</CardTitle>
            <CardDescription>Last 6 months performance</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[250px] w-full">
              <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickMargin={10}
                  domain={[60, 100]}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dot" />}
                />
                <Bar dataKey="stamina" fill="var(--color-stamina)" radius={4} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Tournament Updates</h2>
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tournament</TableHead>
                <TableHead>Opponent</TableHead>
                <TableHead>Date & Time</TableHead>
                <TableHead>Location</TableHead>
                <TableHead className="text-right">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Youth League U14</TableCell>
                <TableCell>City Rovers</TableCell>
                <TableCell>June 28, 2024 - 14:00</TableCell>
                <TableCell>Community Stadium</TableCell>
                <TableCell className="text-right"><Badge variant="secondary">Upcoming</Badge></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Summer Cup</TableCell>
                <TableCell>Valley United</TableCell>
                <TableCell>July 5, 2024 - 16:00</TableCell>
                <TableCell>North Park Fields</TableCell>
                <TableCell className="text-right"><Badge variant="secondary">Upcoming</Badge></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Youth League U14</TableCell>
                <TableCell>FC Phoenix</TableCell>
                <TableCell>June 21, 2024 - 14:00</TableCell>
                <TableCell>Home Ground</TableCell>
                <TableCell className="text-right"><Badge variant="default">Win (3-1)</Badge></TableCell>
              </TableRow>
               <TableRow>
                <TableCell className="font-medium">Youth League U14</TableCell>
                <TableCell>Westside FC</TableCell>
                <TableCell>June 14, 2024 - 14:00</TableCell>
                <TableCell>Westside Arena</TableCell>
                <TableCell className="text-right"><Badge variant="destructive">Loss (1-2)</Badge></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </section>
    </div>
  )
}
