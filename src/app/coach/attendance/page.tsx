import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function AttendancePage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Attendance</h1>
        <p className="text-muted-foreground">
          Mark and track player attendance.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Mark Attendance</CardTitle>
          <CardDescription>
            Select a session to mark attendance for.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Attendance marking interface will be here.</p>
          <Button className="mt-4">Submit</Button>
        </CardContent>
      </Card>
    </div>
  )
}
