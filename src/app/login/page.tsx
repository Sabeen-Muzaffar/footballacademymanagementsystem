import { LoginForm } from '@/components/login-form';
import { Goal, X } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function LoginPage() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-background p-4">
       <Link href="/" passHref>
        <Button variant="ghost" size="icon" className="absolute top-4 right-4 z-10">
          <X className="h-6 w-6" />
          <span className="sr-only">Close</span>
        </Button>
      </Link>
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="bg-primary p-3 rounded-full mb-4">
            <Goal className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold text-foreground">FootyPro Hub</h1>
          <p className="text-muted-foreground">Your all-in-one football management suite</p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
