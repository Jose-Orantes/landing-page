import { Button } from "@/components/ui/button";
import { BGPattern } from "@/components/ui/bg-pattern";
import { CheckCircle, Calendar, Mail, FileSearch, MessageSquare } from "lucide-react";
import logo from "@/assets/genesis-logo.png";
import genesisLogo from "@/assets/genesis-logo.png";

const Welcome = () => {
  return (
    <div className="min-h-screen">
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 relative overflow-hidden">
        <BGPattern variant="dots" mask="fade-edges" size={40} fill="rgba(0, 0, 0, 0.25)" className="absolute inset-0 z-0" />
        
        <div className="max-w-4xl w-full mx-auto text-center relative z-10">
        
        {/* Static Logo */}
        <div className="mb-8 animate-fade-in" style={{ animationDuration: '0.8s', animationFillMode: 'both' }}>
          <img
            src={genesisLogo}
            alt="Genesis Credit Repair"
            fetchPriority="high"
            loading="eager"
            decoding="async"
            className="h-28 sm:h-24 md:h-32 lg:h-40 w-auto mx-auto"
          />
        </div>

        {/* Success Icon */}
        <div className="mb-6 animate-fade-in" style={{ animationDelay: '0.1s', animationDuration: '0.8s', animationFillMode: 'both' }}>
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-green-500/10 border-2 border-green-500/20">
            <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-500" />
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="headline text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6 px-2 leading-tight animate-fade-in" style={{ animationDelay: '0.3s', animationDuration: '0.8s', animationFillMode: 'both' }}>
          Welcome to your Fresh Start
        </h1>

        {/* Thank You Message */}
        <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-muted-foreground px-2 animate-fade-in" style={{ animationDelay: '0.5s', animationDuration: '0.8s', animationFillMode: 'both' }}>
          Thank you for your purchase! We're excited to help you achieve your credit goals.
        </p>

        {/* Purchase Confirmation Card */}
        <div className="max-w-2xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.7s', animationDuration: '0.8s', animationFillMode: 'both' }}>
          <div className="bg-card border border-border rounded-lg p-6 sm:p-8 shadow-lg">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Purchase Confirmed</h2>
            <p className="text-muted-foreground mb-6">
              Your payment has been successfully processed. A confirmation email has been sent to your inbox.
            </p>
          </div>
        </div>

        {/* Next Steps */}
        <div className="max-w-2xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.9s', animationDuration: '0.8s', animationFillMode: 'both' }}>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-8">What Happens Next?</h2>
          
          <div className="grid gap-6 text-left">
            <div className="flex gap-4 p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Check Your Email</h3>
                <p className="text-muted-foreground">
                  You will receive 2 emails that you must complete. These will give you access to our client tracking portal app - this is where you'll provide required documentation (e.g. ID, credit monitoring credentials, and proof of address) and set up a secure client account to track your progress.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <FileSearch className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Credit Analysis</h3>
                <p className="text-muted-foreground">
                  Our expert team will conduct a thorough analysis of your credit report, identifying all inaccuracies, late payments, collections, or other negative items, and develop a tailored strategy to address each issue effectively.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">We Start Working</h3>
                <p className="text-muted-foreground">
                  Give our team 2 days to prepare and submit detailed dispute letters to the credit reporting agencies on your behalf to challenge inaccurate informations. (Bureaus typically take 30-45 days to respond to each dispute)
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Stay Connected</h3>
                <p className="text-muted-foreground">
                  All further communication will be done over the client portal app, where you can message our team, track your progress, and receive updates in real-time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="animate-fade-in" style={{ animationDelay: '1.1s', animationDuration: '0.8s', animationFillMode: 'both' }}>
          <Button 
            size="lg" 
            className="text-white hover:opacity-90 px-8 py-5"
            style={{ backgroundColor: '#0079fe' }}
            onClick={() => window.location.href = '/'}
          >
            Return to Home
          </Button>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Welcome;
