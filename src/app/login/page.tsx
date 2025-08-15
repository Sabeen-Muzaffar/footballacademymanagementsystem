import { LoginForm } from '@/components/login-form';
import { X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function LoginPage() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center p-4">
      <Image 
        src="/Login.jpg" 
        alt="Login background" 
        fill={true}
        objectFit="cover" 
        className="opacity-20"
        data-ai-hint="soccer player"
      />
       <Link href="/" passHref>
        <Button variant="ghost" size="icon" className="absolute top-4 right-4 z-10">
          <X className="h-6 w-6" />
          <span className="sr-only">Close</span>
        </Button>
      </Link>
      <div className="w-full max-w-md relative z-10">
        <div className="flex flex-col items-center text-center mb-8">
          <Image src="/logo.jpeg" alt="Auraan Logo" width={48} height={48} className="rounded-full mb-4" />
          <h1 className="text-3xl font-bold text-foreground">Auraan</h1>
          <p className="text-muted-foreground">Your all-in-one football management suite</p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
