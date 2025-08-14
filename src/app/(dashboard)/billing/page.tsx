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
import { Button } from "@/components/ui/button"

const invoices = [
  {
    item: "Monthly Training Fee - June 2024",
    dueDate: "July 1, 2024",
    amount: "$150.00",
    status: "Due",
  },
  {
    item: "Summer Cup Entry Fee",
    dueDate: "June 25, 2024",
    amount: "$50.00",
    status: "Due",
  },
  {
    item: "Monthly Training Fee - May 2024",
    dueDate: "June 1, 2024",
    amount: "$150.00",
    status: "Paid",
  },
  {
    item: "New Kit Fee",
    dueDate: "May 15, 2024",
    amount: "$85.00",
    status: "Paid",
  },
];


export default function BillingPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Billing</h1>
        <p className="text-muted-foreground">
          View your invoices and manage your payments.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Invoices</CardTitle>
          <CardDescription>
            A list of your recent invoices.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Item</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.item}>
                  <TableCell className="font-medium">{invoice.item}</TableCell>
                  <TableCell>{invoice.dueDate}</TableCell>
                  <TableCell>{invoice.amount}</TableCell>
                  <TableCell>
                    {invoice.status === 'Paid' ? (
                        <Badge variant="default">Paid</Badge>
                    ) : (
                        <Badge variant="destructive">Due</Badge>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    {invoice.status === 'Due' && (
                        <Button size="sm">Pay Now</Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
