
'use client'
import * as React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { Check, ThumbsDown, Wand2, PlusCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const tournaments = [
    { name: "Summer Cup 2024", status: "Fixtures Generated", teams: 16, format: "Knockout" },
    { name: "Youth League U14", status: "In Progress", teams: 10, format: "League" },
    { name: "Pre-Season Invitational", status: "Completed", teams: 8, format: "Round Robin" },
    { name: "Winter Shield", status: "Planning", teams: 12, format: "TBD" },
];

const generatedFixtures = [
    { round: "Quarter-Final", match: "U14 Lions vs. City Rovers", date: "Aug 10, 14:00" },
    { round: "Quarter-Final", match: "Valley United vs. FC Phoenix", date: "Aug 10, 16:00" },
    { round: "Quarter-Final", match: "Warriors FC vs. North Park", date: "Aug 11, 14:00" },
    { round: "Quarter-Final", match: "Westside FC vs. Titans", date: "Aug 11, 16:00" },
]

export default function TournamentsPage() {
  const { toast } = useToast()
  const [fixtures, setFixtures] = React.useState(generatedFixtures)

  const handleApprove = () => {
    toast({
        title: "Fixtures Approved",
        description: "The generated fixtures have been approved and are now live."
    })
    setFixtures([])
  }

  const handleReject = () => {
    toast({
        variant: "destructive",
        title: "Fixtures Rejected",
        description: "The fixtures have been discarded. You can generate a new set."
    })
    setFixtures([])
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between space-y-2">
        <div>
            <h1 className="text-3xl font-bold">Tournament Management</h1>
            <p className="text-muted-foreground">
            Add tournament details and approve AI-generated fixtures.
            </p>
        </div>
        <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Tournament
        </Button>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Card>
            <CardHeader>
            <CardTitle>Existing Tournaments</CardTitle>
            <CardDescription>Manage and view all tournaments.</CardDescription>
            </CardHeader>
            <CardContent>
                 <Table>
                    <TableHeader>
                        <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {tournaments.map((t) => (
                        <TableRow key={t.name}>
                            <TableCell className="font-medium">{t.name}</TableCell>
                            <TableCell><Badge variant={t.status === 'In Progress' ? 'default' : 'secondary'}>{t.status}</Badge></TableCell>
                            <TableCell className="text-right"><Button variant="outline" size="sm">Manage</Button></TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
            <CardTitle className="flex items-center gap-2"><Wand2 className="text-primary"/>AI-Generated Fixtures</CardTitle>
            <CardDescription>Review and approve the fixtures for "Summer Cup 2024".</CardDescription>
            </CardHeader>
            <CardContent>
            {fixtures.length > 0 ? (
                <>
                 <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Round</TableHead>
                            <TableHead>Match</TableHead>
                            <TableHead>Date</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {fixtures.map((f, i) => (
                        <TableRow key={i}>
                            <TableCell>{f.round}</TableCell>
                            <TableCell className="font-medium">{f.match}</TableCell>
                            <TableCell>{f.date}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div className="flex justify-end gap-2 mt-4">
                    <Button variant="outline" onClick={handleReject}><ThumbsDown className="mr-2 h-4 w-4" /> Reject</Button>
                    <Button onClick={handleApprove}><Check className="mr-2 h-4 w-4" /> Approve Fixtures</Button>
                </div>
                </>
            ) : (
                <div className="text-center text-muted-foreground py-8">
                    <p>No pending fixtures to review.</p>
                    <Button variant="secondary" className="mt-4">
                        <Wand2 className="mr-2 h-4 w-4" />
                        Generate for Summer Cup
                    </Button>
                </div>
            )}
            </CardContent>
        </Card>
      </div>

    </div>
  )
}
