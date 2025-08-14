import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function RecruitmentPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Recruitment Insights</h1>
        <p className="text-muted-foreground">
          AI-based recommendations for scouting new talent.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Coming Soon</CardTitle>
          <CardDescription>
            AI-powered recruitment insights will be available here.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>This section is under construction.</p>
        </CardContent>
      </Card>
    </div>
  )
}
