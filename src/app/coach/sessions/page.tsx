import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"

export default function SessionsPage() {
  return (
    <div className="space-y-8">
       <div className="flex items-center justify-between space-y-2">
        <div>
          <h1 className="text-3xl font-bold">Sessions</h1>
          <p className="text-muted-foreground">
            Plan and manage training sessions.
          </p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Create Session
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Sessions</CardTitle>
          <CardDescription>
            View and manage your scheduled sessions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Session management interface will be here.</p>
        </CardContent>
      </Card>
    </div>
  )
}
