import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"

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
          <p>Injury tracking interface will be here.</p>
        </CardContent>
      </Card>
    </div>
  )
}
