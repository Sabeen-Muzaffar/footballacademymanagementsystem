'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email.' }),
  password: z.string().min(1, { message: 'Password is required.' }),
  role: z.enum(['parent', 'coach', 'player', 'owner'], { required_error: 'Please select a role.' }),
});

const roleCredentials = {
  parent: { email: 'parent@gmail.com', password: '2769' },
  coach: { email: 'coach@gmail.com', password: '2769' },
  player: { email: 'player@gmail.com', password: '2769' },
  owner: { email: 'owner@gmail.com', password: '2769' },
};

export function LoginForm() {
  const router = useRouter();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      role: 'parent'
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const credentials = roleCredentials[values.role as keyof typeof roleCredentials];
    if (values.email === credentials.email && values.password === credentials.password) {
      if (values.role === 'coach') {
        router.push('/coach/dashboard');
      } else if (values.role === 'player') {
        router.push('/player/dashboard');
      } else if (values.role === 'owner') {
        router.push('/owner/dashboard');
      }
      else {
        router.push('/dashboard');
      }
    } else {
        toast({
            variant: "destructive",
            title: "Invalid Credentials",
            description: "Please check your email and password.",
        })
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome Back</CardTitle>
        <CardDescription>Sign in to access your dashboard.</CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select your role</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a role" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="parent">Parent</SelectItem>
                        <SelectItem value="coach">Coach</SelectItem>
                        <SelectItem value="player">Player</SelectItem>
                        <SelectItem value="owner">Owner</SelectItem>
                      </SelectContent>
                    </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="name@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <div className="flex justify-between items-baseline">
                    <FormLabel>Password</FormLabel>
                    <Button variant="link" asChild className="p-0 h-auto">
                      <Link href="#">Forgot password?</Link>
                    </Button>
                  </div>
                  <FormControl>
                    <Input type="password" placeholder="••••••••" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Sign In
            </Button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            <Button variant="outline" className="w-full">
              Sign in with Phone
            </Button>
          </CardContent>
        </form>
      </Form>
      <CardFooter className="flex justify-center text-sm">
        <p className="text-muted-foreground">
          Don&apos;t have an account?{' '}
          <Button variant="link" asChild className="p-0 h-auto">
            <Link href="#">Sign up</Link>
          </Button>
        </p>
      </CardFooter>
    </Card>
  );
}
