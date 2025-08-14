
'use client'
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartConfig } from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { Users, Star, ClipboardCheck } from "lucide-react"

const coaches = [
    { name: 'David Smith', team: 'U14', attendance: 95, parentSatisfaction: 4.8, avatar: 'https://placehold.co/40x40.png', initial: 'DS' },
    { name: 'Sarah Chen', team: 'U12', attendance: 98, parentSatisfaction: 4.9, avatar: 'https://placehold.co/40x40.png', initial: 'SC' },
    { name: 'Michael Lee', team: 'Goalkeepers', attendance: 92, parentSatisfaction: 4.6, avatar: 'https://placehold.co/40x40.png', initial: 'ML' }
];

const chartData = [
  { name: 'David S.', rating: 4.8 },
  { name: 'Sarah C.', rating: 4.9 },
  { name: 'Michael L.', rating: 4.6 },
  { name: 'Chris P.', rating: 4.5 },
  { name: 'Jenna R.', rating: 4.7 },
]

const chartConfig = {
  rating: {
    label: "Parent Satisfaction",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig


export default function CoachesPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Coach Performance</h1>
        <p className="text-muted-foreground">
          Evaluate coaching staff performance reports.
        </p>
      </div>

       <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Coaches</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">Active coaching staff</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg. Parent Satisfaction</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.7 / 5.0</div>
              <p className="text-xs text-muted-foreground">Across all teams</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg. Session Attendance</CardTitle>
              <ClipboardCheck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">94%</div>
              <p className="text-xs text-muted-foreground">All sessions this season</p>
            </CardContent>
          </Card>
        </div>


      <Card>
        <CardHeader>
          <CardTitle>Coach Roster</CardTitle>
          <CardDescription>
            Performance overview of each coach.
          </CardDescription>
        </CardHeader>
        <CardContent>
           <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Coach</TableHead>
                <TableHead>Team</TableHead>
                <TableHead>Session Attendance</TableHead>
                <TableHead className="text-right">Parent Satisfaction</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {coaches.map((coach) => (
                <TableRow key={coach.name}>
                  <TableCell className="font-medium flex items-center gap-3">
                     <Avatar className="h-8 w-8">
                        <AvatarImage src={coach.avatar} alt={coach.name} data-ai-hint="person" />
                        <AvatarFallback>{coach.initial}</AvatarFallback>
                    </Avatar>
                    {coach.name}
                  </TableCell>
                  <TableCell><Badge variant="secondary">{coach.team}</Badge></TableCell>
                  <TableCell>{coach.attendance}%</TableCell>
                  <TableCell className="text-right font-semibold flex items-center justify-end gap-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      {coach.parentSatisfaction}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
            <CardTitle>Parent Satisfaction Ratings</CardTitle>
            <CardDescription>Comparison of satisfaction ratings across all coaches.</CardDescription>
        </CardHeader>
        <CardContent>
            <ChartContainer config={chartConfig} className="h-[250px] w-full">
              <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="name" tickLine={false} tickMargin={10} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} tickMargin={10} domain={[4, 5]} />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dot" />}
                />
                <Bar dataKey="rating" fill="var(--color-rating)" radius={4} />
              </BarChart>
            </ChartContainer>
        </CardContent>
      </Card>

    </div>
  )
}
