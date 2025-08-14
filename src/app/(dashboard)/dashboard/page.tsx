'use client';

import { useState } from 'react';
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Goal, Handshake, Crosshair, Zap, Activity } from "lucide-react"
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartConfig } from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

const playersData = {
  "alex": {
    name: "Alex",
    stats: {
      goals: 12,
      assists: 8,
      passAccuracy: 89,
      stamina: 88,
    },
    staminaChart: [
      { month: "January", stamina: 75 },
      { month: "February", stamina: 78 },
      { month: "March", stamina: 82 },
      { month: "April", stamina: 80 },
      { month: "May", stamina: 85 },
      { month: "June", stamina: 88 },
    ]
  },
  "jamie": {
    name: "Jamie",
    stats: {
      goals: 9,
      assists: 11,
      passAccuracy: 92,
      stamina: 84,
    },
    staminaChart: [
      { month: "January", stamina: 72 },
      { month: "February", stamina: 75 },
      { month: "March", stamina: 79 },
      { month: "April", stamina: 81 },
      { month: "May", stamina: 83 },
      { month: "June", stamina: 84 },
    ]
  }
};


const chartConfig = {
  stamina: {
    label: "Stamina",
    color: "hsl(var(--primary))",
    icon: Activity
  },
} satisfies ChartConfig

export default function DashboardPage() {
  const [selectedPlayer, setSelectedPlayer] = useState('alex');
  const playerData = playersData[selectedPlayer as keyof typeof playersData];

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Welcome, Parent!</h1>
          <p className="text-muted-foreground">Here's a performance overview of your children.</p>
        </div>
        <div className="w-full sm:w-auto">
          <Select value={selectedPlayer} onValueChange={setSelectedPlayer}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Select a player" />
            </SelectTrigger>
            <SelectContent>
              {Object.values(playersData).map(player => (
                <SelectItem key={player.name.toLowerCase()} value={player.name.toLowerCase()}>{player.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>


      <section>
        <h2 className="text-2xl font-semibold mb-4">Player Statistics: {playerData.name}</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Goals</CardTitle>
              <Goal className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{playerData.stats.goals}</div>
              <p className="text-xs text-muted-foreground">+2 from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Assists</CardTitle>
              <Handshake className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{playerData.stats.assists}</div>
              <p className="text-xs text-muted-foreground">+1 from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pass Accuracy</CardTitle>
              <Crosshair className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{playerData.stats.passAccuracy}%</div>
              <p className="text-xs text-muted-foreground">+1.2% from last game</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Stamina</CardTitle>
              <Zap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{playerData.stats.stamina}%</div>
              <p className="text-xs text-muted-foreground">Peak performance</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>Stamina Over Time</CardTitle>
            <CardDescription>Last 6 months performance for {playerData.name}</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[250px] w-full">
              <BarChart accessibilityLayer data={playerData.staminaChart}>
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
