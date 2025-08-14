import Link from "next/link"
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
import { Button } from "@/components/ui/button"
import { Calendar, Users, ClipboardList, BarChart2 } from "lucide-react"

export default function CoachDashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Coach Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, Coach!</p>
        </div>
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          <Card className="hover:bg-muted/50 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Calendar className="w-5 h-5" />
                <span>Plan Session</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
                <Button className="w-full" asChild>
                    <Link href="/coach/sessions">Create New</Link>
                </Button>
            </CardContent>
          </Card>
           <Card className="hover:bg-muted/50 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <ClipboardList className="w-5 h-5" />
                <span>Mark Attendance</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
                <Button className="w-full" asChild>
                    <Link href="/coach/attendance">Take Roll</Link>
                </Button>
            </CardContent>
          </Card>
          <Card className="hover:bg-muted/50 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <BarChart2 className="w-5 h-5" />
                <span>Grade Performance</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
                <Button className="w-full" asChild>
                    <Link href="/coach/grading">Grade Players</Link>
                </Button>
            </CardContent>
          </Card>
          <Card className="hover:bg-muted/50 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
                <span>Tactical Board</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
                <Button className="w-full" asChild>
                    <Link href="/coach/tactics">Open Board</Link>
                </Button>
            </CardContent>
          </Card>
           <Card className="hover:bg-muted/50 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Users className="w-5 h-5" />
                <span>Manage Players</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
                <Button className="w-full" asChild>
                    <Link href="/coach/players">View Roster</Link>
                </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Upcoming Sessions</h2>
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Session</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Location</TableHead>
                <TableHead className="text-right">Focus</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">U14 Team Practice</TableCell>
                <TableCell>July 2, 2024</TableCell>
                <TableCell>17:00 - 18:30</TableCell>
                <TableCell>Main Field</TableCell>
                <TableCell className="text-right"><Badge variant="secondary">Dribbling</Badge></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Goalkeeper Training</TableCell>
                <TableCell>July 3, 2024</TableCell>
                <TableCell>16:00 - 17:00</TableCell>
                <TableCell>Training Ground</TableCell>
                <TableCell className="text-right"><Badge>Shot Stopping</Badge></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">U14 Team Practice</TableCell>
                <TableCell>July 4, 2024</TableCell>
                <TableCell>17:00 - 18:30</TableCell>
                <TableCell>Main Field</TableCell>
                <TableCell className="text-right"><Badge variant="secondary">Passing & Movement</Badge></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </section>
    </div>
  )
}
