import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export function HeroSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log("Email submitted:", email);
      setIsSubmitted(true);
      setEmail("");
      // Here you would typically send the email to your backend
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          Transform Your Ideas Into Reality
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
          Join thousands of satisfied customers who have taken their projects to the next level with our innovative solutions.
        </p>
        
        <Card className="w-full max-w-md bg-card/50 backdrop-blur-sm border-border/50">
          <CardContent className="pt-6">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-12"
                  />
                </div>
                <Button type="submit" className="w-full h-12">
                  Get Started
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  By signing up, you agree to our Terms of Service and Privacy Policy.
                </p>
              </form>
            ) : (
              <div className="py-4 text-center">
                <h3 className="text-xl font-medium mb-2">Thank you for signing up!</h3>
                <p className="text-muted-foreground">
                  We've sent a confirmation to your email.
                </p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => setIsSubmitted(false)}
                >
                  Sign up with another email
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
        
        <div className="mt-8 flex items-center justify-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span>No credit card required</span>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            <span>Secure & private</span>
          </div>
        </div>
      </div>
    </div>
  );
}