import { CheckCircle } from "lucide-react";

const audienceCards = [
  {
    title: "People With Errors on Their Report",
    description: "You suspect there are ",
    bold1: "inaccurate or unverifiable items",
    rest1: " reporting and you want a documented, compliance-based dispute strategy.",
  },
  {
    title: "Renters Trying to Get Approved",
    description: "You're applying for housing and need to address ",
    bold1: "high-impact negatives",
    rest1: " that are hurting approvals, with clear next steps (not guessing).",
  },
  {
    title: "Car or Home Buyers Preparing",
    description: "You want to position your credit for a major purchase by challenging ",
    bold1: "collections, charge-offs, repos, medical bills",
    rest1: ", and more when they're inaccurate or outdated.",
  },
  {
    title: "Entrepreneurs Seeking Funding",
    description: "You're serious about business growth and want your personal credit cleaned up so you can ",
    bold1: "unlock approvals",
    rest1: " when it's time to apply.",
  },
  {
    title: "People Rebuilding After Setbacks",
    description: "You've dealt with ",
    bold1: "late payments, collections, charge-offs,",
    rest1: " or reporting mistakes and you want a real process that doesn't drag forever.",
  },
  {
    title: "Action Takers Who Want Clarity",
    description: "You want ",
    bold1: "clear documentation",
    rest1: " of what was submitted and when, plus a multi-round plan based on bureau responses, not vague updates.",
  },
];

const WhoThisIsForSection = () => {
  const scrollToBookCall = () => {
    const bookCallSection = document.getElementById('book-call');
    bookCallSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-[50px] bg-white px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Headline */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 text-gray-900">
            This Is For People Who Want{" "}
            <span className="text-blue-600">Inaccurate Negative Items Challenged and Deleted</span>
            {" "}the right way.
          </h2>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            If you're tired of template disputes and empty promises, this is a specialist-led, compliance-based process built to challenge{" "}
            <strong className="text-gray-900">inaccurate, outdated, or unverifiable</strong>{" "}
            negatives with a clear plan after each bureau response.
          </p>
        </div>

        {/* Audience Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {audienceCards.map((card, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-gray-50"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {card.description}
                    <strong className="text-gray-900">{card.bold1}</strong>
                    {card.rest1}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-gray-600 mb-4">
            If this sounds like you, start with a quick call. We'll confirm fit, identify what can be challenged, and map the next steps.
          </p>
          <p className="text-gray-400 text-xs mb-8">
            We do not promise specific score increases or removals. Disputes focus on inaccurate, outdated, or unverifiable information. Timelines vary; bureaus typically respond in 30-45 days.
          </p>
          <button
            onClick={scrollToBookCall}
            className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:opacity-90"
            style={{ backgroundColor: '#057bff' }}
          >
            Book My Free Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhoThisIsForSection;
