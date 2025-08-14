
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const injuryReports = [
    { 
        player: { name: 'Sam', avatar: 'https://placehold.co/40x40.png', initial: 'S' },
        injury: 'Sprained Ankle',
        date: 'June 15, 2024',
        status: 'Recovering',
        severity: 'Moderate',
    },
    { 
        player: { name: 'Alex', avatar: 'https://placehold.co/40x40.png', initial: 'A' },
        injury: 'Muscle Strain',
        date: 'May 28, 2024',
        status: 'Fit to Play',
        severity: 'Minor',
    },
]

export default function InjuriesPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between space-y-2">
        <div>
            <h1 className="text-3xl font-bold">Injury Tracker</h1>
            <p className="text-muted-foreground">
                Record and monitor player injuries.
            </p>
        </div>
        <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Injury Report
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Injury Reports</CardTitle>
          <CardDescription>
            A list of all recorded player injuries.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Player</TableHead>
                <TableHead>Injury</TableHead>
                <TableHead>Date Reported</TableHead>
                <TableHead>Severity</TableHead>
                <TableHead className="text-right">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {injuryReports.map((report) => (
                <TableRow key={report.player.name + report.injury}>
                  <TableCell className="font-medium flex items-center gap-3">
                     <Avatar className="h-8 w-8">
                        <AvatarImage src={report.player.avatar} alt={report.player.name} data-ai-hint="person" />
                        <AvatarFallback>{report.player.initial}</AvatarFallback>
                    </Avatar>
                    {report.player.name}
                  </TableCell>
                  <TableCell>{report.injury}</TableCell>
                  <TableCell>{report.date}</TableCell>
                   <TableCell>
                    <Badge variant={report.severity === 'Minor' ? 'secondary' : 'destructive'}>{report.severity}</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge variant={report.status === 'Fit to Play' ? 'default' : 'outline'}>{report.status}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
