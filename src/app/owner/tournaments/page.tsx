
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
import { Badge } from "@/components/ui/badge"
import { Trophy, Calendar, Users, Wand2 } from "lucide-react"

const tournaments = [
    { name: "Summer Cup 2024", status: "Fixtures Approved", teams: 16, startDate: "Aug 10, 2024" },
    { name: "Youth League U14", status: "In Progress", teams: 10, startDate: "Jun 1, 2024" },
    { name: "Pre-Season Invitational", status: "Completed", teams: 8, startDate: "May 15, 2024" },
];

const teamPerformance = [
    { team: "U14 Lions", tournament: "Youth League U14", wins: 5, losses: 1, draws: 2, nextMatch: "vs. FC Phoenix" },
    { team: "U12 Tigers", tournament: "Youth League U12", wins: 6, losses: 0, draws: 2, nextMatch: "vs. Westside FC" },
]


export default function TournamentsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Tournament Overview</h1>
        <p className="text-muted-foreground">
          View ongoing/upcoming tournaments and AI-generated fixtures.
        </p>
      </div>

       <div className="grid gap-4 md:grid-cols-3">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Tournaments</CardTitle>
                    <Trophy className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">2</div>
                    <p className="text-xs text-muted-foreground">Currently in progress</p>
                </CardContent>
            </Card>
             <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Upcoming Tournaments</CardTitle>
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">1</div>
                    <p className="text-xs text-muted-foreground">Starting next month</p>
                </CardContent>
            </Card>
             <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">AI Fixture Status</CardTitle>
                    <Wand2 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">Approved</div>
                    <p className="text-xs text-muted-foreground">For Summer Cup 2024</p>
                </CardContent>
            </Card>
       </div>


      <Card>
        <CardHeader>
          <CardTitle>All Tournaments</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tournament</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Teams</TableHead>
                <TableHead>Start Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tournaments.map((t) => (
                <TableRow key={t.name}>
                  <TableCell className="font-medium">{t.name}</TableCell>
                  <TableCell>
                    <Badge variant={t.status === 'In Progress' ? 'default' : 'secondary'}>{t.status}</Badge>
                  </TableCell>
                  <TableCell>{t.teams}</TableCell>
                  <TableCell>{t.startDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
       <Card>
        <CardHeader>
          <CardTitle>Team Performance in Tournaments</CardTitle>
           <CardDescription>
            A summary of how academy teams are performing in their respective leagues.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Team</TableHead>
                <TableHead>Tournament</TableHead>
                <TableHead>W-D-L</TableHead>
                <TableHead>Next Match</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {teamPerformance.map((t) => (
                <TableRow key={t.team}>
                  <TableCell className="font-medium">{t.team}</TableCell>
                   <TableCell>{t.tournament}</TableCell>
                  <TableCell>{t.wins}-{t.draws}-{t.losses}</TableCell>
                  <TableCell>{t.nextMatch}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
