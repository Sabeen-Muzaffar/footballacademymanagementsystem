
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
import { LogIn, LogOut, ShieldAlert } from "lucide-react"

const accessLogs = [
    { event: "Login Success", user: "owner@gmail.com", role: "Owner", ip: "192.168.1.10", timestamp: "2024-08-01 09:05:12", icon: LogIn },
    { event: "Failed Login", user: "hacker@evil.com", role: "Unknown", ip: "10.0.0.5", timestamp: "2024-08-01 09:02:30", icon: ShieldAlert },
    { event: "Logout", user: "coach@gmail.com", role: "Coach", ip: "172.16.0.25", timestamp: "2024-07-31 18:30:00", icon: LogOut },
    { event: "Login Success", user: "admin@gmail.com", role: "Admin", ip: "192.168.1.1", timestamp: "2024-07-31 15:45:21", icon: LogIn },
    { event: "Data Backup", user: "System", role: "System", ip: "N/A", timestamp: "2024-07-31 02:00:00", icon: LogIn },
];


export default function LogsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Access Logs & Security</h1>
        <p className="text-muted-foreground">
          Track login history and suspicious activity.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>System Access History</CardTitle>
          <CardDescription>
            A real-time log of important system events and user access.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px]">Event</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>IP Address</TableHead>
                <TableHead>Timestamp</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {accessLogs.map((log, index) => (
                <TableRow key={index} className={log.event === 'Failed Login' ? 'bg-destructive/10' : ''}>
                    <TableCell className="font-medium">
                         <div className="flex items-center gap-2">
                             <log.icon className={`w-4 h-4 ${log.event === 'Failed Login' ? 'text-destructive' : 'text-muted-foreground'}`} />
                             <span>{log.event}</span>
                        </div>
                    </TableCell>
                  <TableCell>{log.user}</TableCell>
                  <TableCell>
                      <Badge variant={log.role === 'System' ? 'secondary' : 'outline'}>{log.role}</Badge>
                  </TableCell>
                  <TableCell className="font-mono text-xs">{log.ip}</TableCell>
                  <TableCell>{log.timestamp}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
