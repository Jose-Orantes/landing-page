import HeroSection from "@/components/HeroSection";
import CreditComparisonInfographic from "@/components/CreditComparisonInfographic";
import ServiceBreakdownSection from "@/components/ServiceBreakdownSection";
import WhatsIncludedSection from "@/components/WhatsIncludedSection";
import WhoThisIsForSection from "@/components/WhoThisIsForSection";
import FAQs from "@/components/ui/faqs-component";
import { Footer } from "@/components/ui/footer";
import { Timeline } from "@/components/ui/timeline";
import { PricingCard } from "@/components/ui/pricing-card";
import { MoneyBackGuarantee } from "@/components/MoneyBackGuarantee";
import { StickyHeader } from "@/components/StickyHeader";
import { ScrollReveal } from "@/components/ScrollReveal";
import footerLogo from "@/assets/genesis-footer-logo.png";
import { Instagram } from "lucide-react";
const Index = () => {
  const data = [
    {
      title: "Step 1: Initial Consultation",
      content: "We'll begin with a 1-on-1 personalized consultation where we review your current credit report in detail, discuss your financial goals, and answer any questions to ensure you feel confident about starting the process.",
    },
    {
      title: "Step 2: Onboarding Process",
      content: "After payment has been sent, you will receive two emails that you must complete. These will give you access to our client tracking portal app where you'll provide required documents (e.g. ID, credit monitoring credentials, and proof of address) and set up a secure client account to track your progress.",
    },
    {
      title: "Step 3: Credit Analysis",
      content: "Our expert team will conduct a thorough analysis of your credit report, identifying all inaccuracies, late payments, collections, or other negative items, and develop a tailored strategy to address each issue effectively.",
    },
    {
      title: "Step 4: Dispute Process",
      content: "We'll prepare and submit detailed dispute letters to the credit reporting agencies on your behalf to challenge inaccurate or unverifiable information (bureaus typically take 30–45 days to respond to each dispute), ensuring all claims are well documented and compliant with regulations.",
    },
    {
      title: "Step 5: Follow-Up Monitoring",
      content: "We'll actively monitor responses and follow up on any delays, providing you with regular updates via email or phone, keeping you informed every step of the way.",
    },
    {
      title: "Step 6: Resolution Support",
      content: "Our team will handle any items that negatively impact your scores with the creditor and ensure all updates are accurately reflected in your credit report.",
    },
    {
      title: "Step 7: Final Review",
      content: "If there are any remaining items, we'll continue to send rounds until all negative items have been successfully removed. Once the process is complete, we'll deliver a comprehensive final credit report review, highlight your improved score, and offer personalized tips and resources to help maintain and build your credit moving forward.",
    },
  ];

  const handleCheckout = () => {
    window.location.href = "https://whop.com/checkout/plan_Bm5fCIrPugVfO?d2c=true";
  };

  const handleNewsletterSubscribe = async (email: string): Promise<boolean> => {
    console.log(`Subscribing ${email}...`);
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    // TODO: Replace with actual email service integration
    return true; // Simulate success for now
  };

  return (
    <div className="min-h-screen animate-fade-in">
      <StickyHeader />
      <main id="main-content" className="pt-16 sm:pt-28 md:pt-32 lg:pt-40">
        <HeroSection />
      <ScrollReveal>
        <CreditComparisonInfographic />
      </ScrollReveal>
      <ScrollReveal>
        <WhatsIncludedSection />
      </ScrollReveal>
      <ScrollReveal>
        <WhoThisIsForSection />
      </ScrollReveal>
      <ScrollReveal>
        <ServiceBreakdownSection />
      </ScrollReveal>
      
      <ScrollReveal>
        <section className="rounded-t-[3rem] py-[50px] bg-[#E8F1FF] relative">
          <div className="max-w-4xl mx-auto px-4 md:px-8 text-center mb-12">
            <h2 className="headline text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-foreground">
              Your Journey to Better Credit
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg max-w-3xl mx-auto">
              From your first consultation to your final review, here's exactly what to expect as we work together to remove negative items and improve your credit score.
            </p>
          </div>
          <Timeline data={data} />
          
          {/* Gradient fade to white */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white pointer-events-none z-20" />
        </section>
      </ScrollReveal>
      
      <section id="pricing" className="py-[50px] bg-white">
        
        <PricingCard
          title="Fresh Start Credit Package"
          description="This program is for people with negative items, collections, or charge-offs on their credit report who want them deleted permanently."
          price={450}
          originalPrice={1000}
          features={[
            {
              title: "Included",
              items: [
                "6 Rounds of Done-For-You Disputes: We challenge every inaccurate, obsolete, or unverifiable item using legal strategies under the FCRA and FDCPA.",
                "3-Bureau Credit Audit & Score Blueprint: A full breakdown of your credit report with a roadmap to 700+.",
                "Lifetime Access with No Recurring Fees: Pay once, no monthly payment",
                "Personal Onboarding & Priority Support: You'll have a dedicated credit specialist guiding you each round.",
                "24/7 Client Portal Tracking: View dispute progress, removals, and score updates in real time.",
                "Identity Theft Protection: Fraud detection and prevention monitoring, identity theft recovery assistance, and dark web monitoring for your personal information.",
              ],
            },
            {
              title: "Bonus",
              items: [
                "Rebuild Plan: Card strategy, utilization optimization, and mix recommendations to rebuild faster.",
              ],
            },
          ]}
          buttonText="Fix My Credit"
          onButtonClick={handleCheckout}
        />
      </section>
      <MoneyBackGuarantee />
      <ScrollReveal>
        <FAQs />
      </ScrollReveal>
      <ScrollReveal>
        <Footer
        logoSrc={footerLogo}
        companyName="Genesis Credit Repair"
        description="Transform your credit score and unlock financial opportunities with our proven credit repair system."
        usefulLinks={[]}
        socialLinks={[
          { label: 'Instagram', href: 'https://instagram.com', icon: <Instagram className="h-5 w-5" /> }
        ]}
        onSubscribe={handleNewsletterSubscribe}
      />
      </ScrollReveal>
      </main>
    </div>
  );
};

export default Index;
