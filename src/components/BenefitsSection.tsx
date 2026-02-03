import { BGPattern } from "@/components/ui/bg-pattern";
import { Button } from "@/components/ui/button";
const BenefitsSection = () => {
  return <section className="pt-12 pb-12 px-4 relative overflow-hidden bg-white">
      <BGPattern variant="dots" mask="fade-y" size={40} fill="rgba(0,0,0,0.05)" className="absolute inset-0 z-0" />
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="headline text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            We Delete the Negatives.
          </h2>
          
        </div>

        <div className="text-center mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground">
            What You Get
          </h3>
        </div>

        {/* Content Paragraphs */}
        <div className="max-w-3xl mx-auto space-y-6 text-base leading-relaxed text-foreground/90 text-left">
          <p>
            You've got <strong>2 options</strong> here.
          </p>
          
          <p>
            <strong>Option 1:</strong> Keep playing the waiting game and hope those collections fall off in <strong>7 years.</strong> Crossing your fingers every time you apply for anything. Keep explaining to the landlord why your credit looks like that.
          </p>
          
          <p>
            <strong>Option 2:</strong> Work with us and we go in and <strong>delete the negatives NOW.</strong>
          </p>
          
          <p>
            Here's it works:
          </p>
          
          <p>
            We run a <strong>6 round program</strong> that uses actual <strong>federal law (FCRA)</strong> to challenge every negative item on your report. We're not just sending off generic disputes online. We're <strong>building cases. Finding errors</strong> and holding bureaus and creditors to the <strong>legal standard</strong> they're supposed to follow.
          </p>
          
          <p>
            Here's the thing most people don't know: These companies <strong>mess up. A lot.</strong> Missing documentation. Wrong dates. Accounts that can't be verified. When we catch them making these mistakes, those items <strong>have to come off your report.</strong> This isn't a loophole, <strong>it's the law.</strong>
          </p>
          
          <p>
            Each round we're <strong>disputing items, following up,</strong> and pushing until they either <strong>prove it or delete it.</strong>
          </p>
          
          <p>
            Most can't prove it.
          </p>
          
          <p>
            <strong>So it gets deleted.</strong>
          </p>
          
          <p>
            When your negatives disappear your <strong>score jumps.</strong> Sometimes <strong>50 points.</strong> Sometimes <strong>75.</strong> We've seen <strong>100+ point increases</strong> when someone has multiple items removed.
          </p>
          
          <p>
            But the real win isn't even the number.
          </p>
          
          <p>
            It's <strong>what that number gets you.</strong> The apartment you actually want. The car loan that doesn't feel like highway robbery. The credit card with rewards instead of a 29% APR and a $500 limit.
          </p>
          
          <p>
            <strong>You stop feeling like you're playing on hard mode while everyone else is on easy.</strong>
          </p>
          
          <p className="mt-12 mb-6">
            Ready to switch to easy mode?
          </p>
          
          <div className="flex justify-center">
            <Button size="lg" className="text-white hover:opacity-90 px-8 py-5" style={{
            backgroundColor: '#0079fe'
          }} onClick={() => window.open('https://vicv0vf2lsh.typeform.com/to/ckD5tW4w', '_blank')}>
              Get Started Now
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default BenefitsSection;