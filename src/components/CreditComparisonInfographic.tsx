import { X, Check, ArrowRight, Clock, TrendingDown, CreditCard, FileText, Frown } from "lucide-react";
import { BGPattern } from "@/components/ui/bg-pattern";
interface ComparisonCardProps {
  icon: React.ReactNode;
  text: string;
  variant: 'wrong' | 'right';
}
function ComparisonCard({
  icon,
  text,
  variant
}: ComparisonCardProps) {
  const bgColor = 'bg-white';
  const borderColor = variant === 'wrong' ? 'border-red-200' : 'border-[#057AFF]';
  const iconBg = variant === 'wrong' ? 'bg-red-100 text-red-600' : 'bg-[#057AFF]/10 text-[#057AFF]';
  return <div className={`${bgColor} ${borderColor} border rounded-xl p-4 hover:shadow-md transition-all duration-200 flex items-start gap-3`}>
      <div className={`${iconBg} rounded-lg p-2 flex-shrink-0`}>
        {icon}
      </div>
      <p className="text-foreground font-medium leading-relaxed">{text}</p>
    </div>;
}
export default function CreditComparisonInfographic() {
  return <section className="rounded-t-[3rem] py-[50px] px-4 relative overflow-hidden bg-[#E8F1FF]">
      <BGPattern variant="dots" mask="fade-y" size={40} fill="rgba(0,0,0,0.05)" />
      <div className="max-w-7xl mx-auto relative z-30">
        
        <div className="text-center mb-12">
          
        </div>

        {/* Main Comparison */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 relative">
          
          {/* LEFT SIDE - What You've Been Doing */}
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 border-2 border-red-200 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-red-500 rounded-full p-2">
                  <X className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-red-900">What Doesn't Work</h3>
              </div>

              <div className="space-y-4">
                <ComparisonCard icon={<Clock className="w-5 h-5" />} text="Waiting around for 7 years hoping things fix themselves" variant="wrong" />
                <ComparisonCard icon={<TrendingDown className="w-5 h-5" />} text="Paying off collections without a strategy to boost your score" variant="wrong" />
                <ComparisonCard icon={<CreditCard className="w-5 h-5" />} text="Settling for below average credit cards and loan offers" variant="wrong" />
                <ComparisonCard icon={<FileText className="w-5 h-5" />} text="Trying to dispute items on your own without professional guidance" variant="wrong" />
                <ComparisonCard icon={<Frown className="w-5 h-5" />} text="Accepting bad credit as your permanent situation" variant="wrong" />
              </div>
            </div>
            
            {/* Result indicator */}
            <div className="bg-red-100 rounded-xl p-4 text-center border border-red-200">
              <p className="text-red-800 font-semibold text-lg">Result: Years of frustration with little progress</p>
            </div>
          </div>

          {/* CENTER ARROW - Hidden on mobile */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="bg-white rounded-full p-4 shadow-2xl border-4 border-[#057AFF]">
              <ArrowRight className="w-12 h-12 text-[#057AFF] animate-pulse" />
            </div>
          </div>

          {/* RIGHT SIDE - What Actually Works */}
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border-2 border-[#057AFF]/30 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#057AFF] rounded-full p-2">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold" style={{
                color: '#057AFF'
              }}>What Actually Works</h3>
              </div>

              <div className="space-y-4">
                <ComparisonCard icon={<Check className="w-5 h-5" />} text="Taking strategic action NOW to remove negative items before the 7-year mark" variant="right" />
                <ComparisonCard icon={<Check className="w-5 h-5" />} text="Leveraging proven credit repair strategies that force creditor responses" variant="right" />
                <ComparisonCard icon={<Check className="w-5 h-5" />} text="Getting pre-approved for premium cards and competitive loan rates" variant="right" />
                <ComparisonCard icon={<Check className="w-5 h-5" />} text="Using professional dispute methods that actually get results" variant="right" />
                <ComparisonCard icon={<Check className="w-5 h-5" />} text="Building excellent credit that opens doors to your financial goals" variant="right" />
              </div>
            </div>

            {/* Result indicator */}
            <div className="bg-blue-100 rounded-xl p-4 text-center border-2 border-[#057AFF]/50 shadow-md">
              <p className="text-[#057AFF] font-semibold text-lg">Result: Access to wealth-building tools and opportunities</p>
            </div>
          </div>

        </div>
      </div>
      
      {/* Gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-white pointer-events-none z-20" />
    </section>;
}