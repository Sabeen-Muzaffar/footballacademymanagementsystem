import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function CoachesPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Coach Performance</h1>
        <p className="text-muted-foreground">
          Evaluate coaching staff performance reports.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Coming Soon</CardTitle>
          <CardDescription>
            Coach performance reports will be available here.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>This section is under construction.</p>
        </CardContent>
      </Card>
    </div>
  )
}
