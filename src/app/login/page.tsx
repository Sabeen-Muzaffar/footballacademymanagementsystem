import { LoginForm } from '@/components/login-form';
import { Goal } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-background p-4">
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
