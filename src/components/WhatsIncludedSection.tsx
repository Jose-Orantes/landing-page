import { Check, Shield, FileText, Infinity, Headphones, Smartphone, TrendingUp, Zap, ArrowDown, Trash2 } from "lucide-react";
const WhatsIncludedSection = () => {
  const coreFeatures = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "6 Rounds of Disputes",
      description: "We challenge every inaccurate item using powerful laws like FCRA and FDCPA. Our team handles everything."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "3-Bureau Credit Audit",
      description: "Full breakdown across Experian, Equifax, and TransUnion with a clear roadmap to your target score."
    },
    {
      icon: <Infinity className="w-6 h-6" />,
      title: "Lifetime Access",
      description: "Pay once, supported for life. We'll keep supporting you with updates and tools as laws evolve."
    }
  ];

  const supportFeatures = [
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Personal Onboarding",
      description: "Step-by-step guidance with a dedicated credit specialist who guides you through each round."
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "24/7 Client Portal",
      description: "Track dispute progress, deleted items, and score updates anytime from our secure portal."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Identity Theft Protection",
      description: "Fraud detection and prevention monitoring, identity theft recovery assistance, and dark web monitoring for your personal information."
    }
  ];


  const FeatureCard = ({ feature, isBonus = false }: { feature: any; isBonus?: boolean }) => (
    <div className="relative">
      <div className={`h-full p-6 rounded-2xl transition-all duration-300 ${
        isBonus 
          ? 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white' 
          : 'bg-gray-50'
      }`}>
        {isBonus && feature.value && (
          <div className="absolute top-3 right-3 text-xs font-semibold bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
            {feature.value}
          </div>
        )}
        
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
          isBonus ? 'bg-white/10 text-white' : 'bg-white text-blue-600'
        }`}>
          {feature.icon}
        </div>
        
        <h3 className={`font-semibold text-lg mb-2 ${isBonus ? 'text-white' : 'text-gray-900'}`}>
          {feature.title}
        </h3>
        
        <p className={`text-sm leading-relaxed ${isBonus ? 'text-blue-100' : 'text-gray-600'}`}>
          {feature.description}
        </p>
      </div>
    </div>
  );

  return (
    <section className="bg-white py-[50px] px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header - What You Get */}
        <div className="text-center mb-12 mt-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
            Done-For-You Credit Repair Package
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
            What You Get
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            A complete service designed to remove negative items and rebuild your credit profile
          </p>
        </div>

        {/* Main Outcome Card - Same style as other feature cards */}
        <div className="mb-12">
          <div className="h-full p-6 rounded-2xl bg-gray-50">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-white text-blue-600">
              <Trash2 className="w-6 h-6" />
            </div>
            
            <h3 className="font-semibold text-lg mb-2 text-gray-900">
              Removal of All Negative Items
            </h3>
            
            <p className="text-sm leading-relaxed text-gray-600">
              We systematically dispute and eliminate inaccurate collections, late payments, charge-offs, and other credit-damaging items across all three bureaus giving you a clean slate and the financial freedom you deserve.
            </p>
          </div>
        </div>

        {/* Core Features Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px bg-gray-200 flex-1"></div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Core Features
            </h3>
            <div className="h-px bg-gray-200 flex-1"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {coreFeatures.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
        </div>

        {/* Support & Tools Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px bg-gray-200 flex-1"></div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Support & Tools
            </h3>
            <div className="h-px bg-gray-200 flex-1"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {supportFeatures.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
        </div>

        {/* Exclusive Bonus - Centered Hero Style */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl transform -rotate-1"></div>
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              {/* Left: Text Content */}
              <div className="lg:flex-1">
                <div className="flex items-center gap-2 text-blue-400 text-sm font-medium mb-2">
                  <Zap className="w-4 h-4" />
                  Limited Time Bonus
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-3">
                  Exclusive Bonus Included
                </h3>
                <p className="text-gray-400 max-w-md">
                  Worth $199 in additional value, yours free with your Genesis package
                </p>
              </div>
              
              {/* Right: Bonus Card */}
              <div className="lg:flex-1 lg:max-w-lg">
                <div className="relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
                  <div className="absolute top-4 right-4 text-xs font-semibold bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    $199 Value
                  </div>
                  
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 bg-white/10">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  
                  <h4 className="font-semibold text-xl mb-3 text-white">
                    Rebuild Plan
                  </h4>
                  
                  <p className="text-blue-100 leading-relaxed mb-4">
                    Strategic optimization, new trade lines, and preparation for major approvals after removal. Your complete roadmap to credit success.
                  </p>
                  
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-blue-200" />
                    <span className="text-sm font-medium text-blue-200">
                      Included Free
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhatsIncludedSection;