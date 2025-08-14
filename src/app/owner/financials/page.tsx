import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function FinancialsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Financial Reports</h1>
        <p className="text-muted-foreground">
          Track revenue, expenses, and profit margins.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Coming Soon</CardTitle>
          <CardDescription>
            Detailed financial reports will be available here.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>This section is under construction.</p>
        </CardContent>
      </Card>
    </div>
  )
}
