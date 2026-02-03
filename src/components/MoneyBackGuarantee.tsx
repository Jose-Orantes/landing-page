import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, CheckCircle } from "lucide-react";

export const MoneyBackGuarantee = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const guaranteePoints = [
    "If we don't remove at least one negative item within 90 days, you get a full refund",
    "No questions asked, no hidden fees",
    "Risk-free investment in your financial future",
  ];

  return (
    <section className="py-[50px] px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-6xl mx-auto"
      >
        <Card className="glass-card p-6 lg:p-10">
          <CardContent className="p-0">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
              {/* Left side - Badge and headline */}
              <div className="flex-shrink-0 text-center lg:text-left lg:w-1/3">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-500/10 mb-6">
                  <ShieldCheck className="w-10 h-10 text-amber-500" />
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  90-Day Money Back Guarantee
                </h2>
                <p className="text-muted-foreground">
                  We're confident in our results. That's our commitment to you.
                </p>
              </div>

              {/* Right side - Guarantee details */}
              <div className="flex-1 space-y-4">
                {guaranteePoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm">{point}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
};
