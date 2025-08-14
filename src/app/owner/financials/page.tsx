
'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { TrendingUp, TrendingDown, DollarSign, Scale } from "lucide-react"
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartConfig } from "@/components/ui/chart"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, Bar, BarChart } from "recharts"

const revenueChartData = [
  { month: "Jan", revenue: 12000, expenses: 8000 },
  { month: "Feb", revenue: 14000, expenses: 9000 },
  { month: "Mar", revenue: 13500, expenses: 8500 },
  { month: "Apr", revenue: 15000, expenses: 10000 },
  { month: "May", revenue: 17000, expenses: 11000 },
  { month: "Jun", revenue: 18000, expenses: 12000 },
]

const revenueChartConfig = {
  revenue: { label: "Revenue", color: "hsl(var(--chart-2))" },
  expenses: { label: "Expenses", color: "hsl(var(--chart-5))" },
} satisfies ChartConfig

const expenseBreakdownData = [
  { name: "Salaries", value: 6000, fill: "var(--color-salaries)" },
  { name: "Facilities", value: 2500, fill: "var(--color-facilities)" },
  { name: "Equipment", value: 1500, fill: "var(--color-equipment)" },
  { name: "Travel", value: 1000, fill: "var(--color-travel)" },
  { name: "Other", value: 1000, fill: "var(--color-other)" },
]

const expenseChartConfig = {
  value: { label: "Amount" },
  salaries: { label: "Salaries", color: "hsl(var(--chart-1))" },
  facilities: { label: "Facilities", color: "hsl(var(--chart-2))" },
  equipment: { label: "Equipment", color: "hsl(var(--chart-3))" },
  travel: { label: "Travel", color: "hsl(var(--chart-4))" },
  other: { label: "Other", color: "hsl(var(--chart-5))" },
} satisfies ChartConfig


export default function FinancialsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Financial Reports</h1>
        <p className="text-muted-foreground">
          Track revenue, expenses, and profit margins.
        </p>
      </div>

       <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue (YTD)</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$89,500</div>
              <p className="text-xs text-muted-foreground">+12% from last year</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Expenses (YTD)</CardTitle>
              <TrendingDown className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$59,000</div>
              <p className="text-xs text-muted-foreground">+8% from last year</p>
            </CardContent>
          </Card>
           <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Net Profit (YTD)</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$30,500</div>
              <p className="text-xs text-muted-foreground">+20% from last year</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Profit Margin</CardTitle>
              <Scale className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">34.1%</div>
              <p className="text-xs text-muted-foreground">+2.5% from last year</p>
            </CardContent>
          </Card>
        </div>
      
      <Card>
        <CardHeader>
            <CardTitle>Revenue vs. Expenses</CardTitle>
            <CardDescription>Last 6 months financial performance.</CardDescription>
        </CardHeader>
        <CardContent>
            <ChartContainer config={revenueChartConfig} className="h-[250px] w-full">
              <AreaChart
                accessibilityLayer
                data={revenueChartData}
                margin={{ left: 12, right: 12 }}
              >
                <CartesianGrid vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
                 <YAxis
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value) => `$${Number(value) / 1000}k`}
                />
                <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
                <Area dataKey="revenue" type="natural" fill="var(--color-revenue)" fillOpacity={0.4} stroke="var(--color-revenue)" />
                <Area dataKey="expenses" type="natural" fill="var(--color-expenses)" fillOpacity={0.4} stroke="var(--color-expenses)" />
              </AreaChart>
            </ChartContainer>
        </CardContent>
      </Card>
      
       <Card>
        <CardHeader>
            <CardTitle>Expense Breakdown (June 2024)</CardTitle>
            <CardDescription>Categorical breakdown of expenses for the last month.</CardDescription>
        </CardHeader>
        <CardContent>
            <ChartContainer config={expenseChartConfig} className="h-[250px] w-full">
              <BarChart
                accessibilityLayer
                data={expenseBreakdownData}
                layout="vertical"
                margin={{ right: 16 }}
              >
                <CartesianGrid horizontal={false} />
                <YAxis dataKey="name" type="category" tickLine={false} tickMargin={10} axisLine={false} />
                <XAxis dataKey="value" type="number" hide />
                <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
                <Bar dataKey="value" radius={5} />
              </BarChart>
            </ChartContainer>
        </CardContent>
      </Card>

    </div>
  )
}
