import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Users, Database, Megaphone, Trophy, ShieldCheck } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-muted-foreground">
          Full control over the system.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-4">System Control</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg"><Users className="w-5 h-5" />User Management</CardTitle>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full"><Link href="/admin/users">Manage Users</Link></Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg"><Database className="w-5 h-5" />Data Backup</CardTitle>
            </CardHeader>
            <CardContent>
                <Button asChild className="w-full"><Link href="/admin/backup">Backup & Restore</Link></Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg"><Megaphone className="w-5 h-5" />Announcements</CardTitle>
            </CardHeader>
            <CardContent>
                <Button asChild className="w-full"><Link href="/admin/announcements">Send Message</Link></Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg"><Trophy className="w-5 h-5" />Tournaments</CardTitle>
            </CardHeader>
            <CardContent>
                <Button asChild className="w-full"><Link href="/admin/tournaments">Manage Tournaments</Link></Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg"><ShieldCheck className="w-5 h-5" />Access Logs</CardTitle>
            </CardHeader>
            <CardContent>
                <Button asChild className="w-full"><Link href="/admin/logs">View Logs</Link></Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
