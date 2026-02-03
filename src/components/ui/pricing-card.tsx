"use client";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Shield, Lock, Award, BadgeCheck } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import genesisLogo from "@/assets/genesis-pricing-logo.png";

interface PricingFeature {
  title: string;
  items: string[];
}

interface PricingCardProps {
  title: string;
  description: React.ReactNode;
  price: number;
  originalPrice?: number;
  features: PricingFeature[];
  buttonText?: string;
  onButtonClick?: () => void;
}

export function PricingCard({
  title,
  description,
  price,
  originalPrice,
  features,
  buttonText = "Get Started",
  onButtonClick,
}: PricingCardProps) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 260,
        damping: 20,
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.section
      ref={containerRef}
      className="container py-0 relative"
      initial="hidden"
      animate={hasAnimated ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Subtle section separator */}
      
      <Card className="relative mx-auto w-full max-w-6xl overflow-hidden glass-card">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            className="flex flex-col justify-between p-6 lg:w-2/5 lg:p-10"
            variants={itemVariants}
          >
            <div>
              <CardHeader className="p-0">
                <div className="flex items-start justify-between">
                  <div>
                    <img 
                      src={genesisLogo} 
                      alt="Genesis" 
                      className="h-12 mb-4"
                    />
                    <CardTitle className="text-3xl font-bold">{title}</CardTitle>
                    <CardDescription className="mt-2">{description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <motion.div className="mt-6 space-y-4" variants={itemVariants}>
                <div className="flex items-baseline">
                  <span className="text-5xl font-extrabold">${price}</span>
                  {originalPrice && (
                    <span className="ml-2 text-xl text-muted-foreground line-through">
                      ${originalPrice}
                    </span>
                  )}
                </div>
                <span className="block text-sm text-muted-foreground">
                  one-time payment
                </span>
              </motion.div>
            </div>
            <motion.div className="mt-8 space-y-6" variants={itemVariants}>
              <Button 
                className="w-full text-white hover:opacity-90" 
                size="lg" 
                style={{ backgroundColor: '#0079fe' }}
                onClick={onButtonClick}
              >
                {buttonText}
              </Button>
              
              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-border/50">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Shield className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>FCRA Compliant</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Lock className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>Secure Payment</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Award className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>Money-Back Guarantee</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <BadgeCheck className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>100% Satisfaction Guarantee</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
          <Separator className="lg:my-6 lg:hidden" />
          <motion.div
            className="bg-muted/50 p-6 lg:w-3/5 lg:p-10"
            variants={itemVariants}
          >
            <div className="space-y-6">
              {features.map((feature, featureIndex) => (
                <div key={featureIndex}>
                  <h3 className="mb-4 text-lg font-semibold">{feature.title}:</h3>
                  <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
                    {feature.items.map((item, index) => {
                      const parts = item.split(':');
                      const hasColon = parts.length > 1;
                      
                      return (
                        <motion.li
                          key={index}
                          className="flex items-start"
                          variants={listItemVariants}
                          custom={index + featureIndex * feature.items.length}
                        >
                          <span className="text-sm">
                            {hasColon ? (
                              <>
                                <span className="font-bold">{parts[0]}:</span>
                                {parts.slice(1).join(':')}
                              </>
                            ) : (
                              item
                            )}
                          </span>
                        </motion.li>
                      );
                    })}
                  </ul>
                  {featureIndex < features.length - 1 && <Separator className="my-6" />}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Card>
    </motion.section>
  );
}