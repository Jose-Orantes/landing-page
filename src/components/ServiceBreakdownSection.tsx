import legalTransparentImg from "@/assets/legal-transparent-illustration.png";
import securityImg from "@/assets/security-illustration.png";
import timelineImg from "@/assets/timeline-illustration.png";
import customStrategyImg from "@/assets/custom-strategy-illustration.png";
import transparencyProgressImg from "@/assets/transparency-progress-illustration.png";
import heavyLiftingImg from "@/assets/heavy-lifting-illustration.png";

const ServiceBreakdownSection = () => {
  const phases = [
    {
      icon: legalTransparentImg,
      title: "100% Legal & Transparent Process",
      description: "We follow the Credit Repair Organizations Act. No fake promises, no shady tactics. You get legal strategies that work, complete visibility into what we're doing, and results that stick."
    },
    {
      icon: securityImg,
      title: "Your Information Stays Secure",
      description: "Encrypted storage, zero data sharing. Your personal information is used for one thing: repairing your credit. It doesn't get sold, shared with affiliates or handed to marketing companies."
    },
    {
      icon: timelineImg,
      title: "Honest Timelines, Actual Progress",
      description: "We won't promise you a perfect score in 30 days. Credit repair has actual timelines. Bureaus get 30-45 days to investigate each dispute. You get honest expectations upfront and consistent progress every month."
    },
    {
      icon: customStrategyImg,
      title: "Custom Strategy for Your Credit Report",
      description: "Cookie-cutter dispute templates don't work. Credit bureaus spot them a mile away. We build each dispute specifically for your accounts, using the exact federal laws that apply to your situation. Custom approach, better results."
    },
    {
      icon: transparencyProgressImg,
      title: "Full Transparency on Progress",
      description: "No waiting around wondering what's happening. After each dispute round, you see exactly what got removed, what's still being challenged, and where your score stands. Your client portal updates 24/7."
    },
    {
      icon: heavyLiftingImg,
      title: "We Do the Heavy Lifting (You Stay Informed)",
      description: "We write the disputes, manage the timelines, and deal with bureau runarounds. You forward us their responses and check your progress updates. That's it. The heavy lifting happens on our end."
    }
  ];

  return (
    <section className="py-[50px] px-4 relative overflow-hidden bg-white">
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="headline text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-foreground">
            What's Inside Our Credit Repair Service?
          </h2>
          <p className="subheadline text-base md:text-lg max-w-3xl mx-auto text-muted-foreground">
            Legal disputes that remove negative items from your report, steady score increases you can track, and a clear path to getting approved for what you need.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {phases.map((phase, index) => {
            return (
              <div
                key={index}
                className="glass-card rounded-xl p-8 relative overflow-hidden"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-xl opacity-50" />
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  <div className="mb-6">
                    <img 
                      src={phase.icon} 
                      alt={phase.title} 
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">
                    {phase.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {phase.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceBreakdownSection;