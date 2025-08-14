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

export default function SchedulePage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Training Schedule</h1>
        <p className="text-muted-foreground">
          Your upcoming sessions and matches.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Events</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Event</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Location</TableHead>
                <TableHead className="text-right">Focus / Opponent</TableHead>
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
                <TableCell className="font-medium">Match vs. City Rovers</TableCell>
                <TableCell>June 28, 2024 - 14:00</TableCell>
                 <TableCell>14:00</TableCell>
                <TableCell>Community Stadium</TableCell>
                <TableCell className="text-right"><Badge>City Rovers</Badge></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
