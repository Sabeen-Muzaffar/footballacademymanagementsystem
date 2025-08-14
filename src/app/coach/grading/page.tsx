import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function GradingPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Performance Grading</h1>
        <p className="text-muted-foreground">
          Rate players on their skills and performance.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Grade Players</CardTitle>
          <CardDescription>
            Select a player to grade their performance.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Player grading interface will be here.</p>
          <Button className="mt-4">Save Grades</Button>
        </CardContent>
      </Card>
    </div>
  )
}
