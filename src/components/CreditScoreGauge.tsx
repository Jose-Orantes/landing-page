interface CreditScoreGaugeProps {
  className?: string;
}

const CreditScoreGauge = ({ className = "" }: CreditScoreGaugeProps) => {
  const score = 750;
  
  // Calculate the angle for the needle (gauge goes from 180deg to 0deg)
  const minScore = 300;
  const maxScore = 850;
  const scoreRange = maxScore - minScore;
  const normalizedScore = (score - minScore) / scoreRange;
  const needleAngle = 180 - (normalizedScore * 180);

  return (
    <div className={`relative ${className}`}>
      {/* Background Glow */}
      <div 
        className="absolute inset-0 rounded-full blur-3xl opacity-20"
        style={{
          background: `radial-gradient(circle, hsl(142, 76%, 36%), transparent 70%)`
        }}
      />
      
      {/* Main Gauge Container */}
      <div className="relative aspect-square max-w-sm mx-auto">
        <svg
          viewBox="0 0 200 120"
          className="w-full h-full"
          style={{ overflow: 'visible' }}
        >
          {/* Gauge Background Arc */}
          <path
            d="M 20 100 A 80 80 0 0 1 180 100"
            fill="none"
            stroke="hsl(var(--muted))"
            strokeWidth="6"
            strokeLinecap="round"
            opacity="0.2"
          />
          
          {/* Colored Score Ranges */}
          {/* Red Range (300-600) */}
          <path
            d="M 20 100 A 80 80 0 0 1 85 28"
            fill="none"
            stroke="hsl(0, 84%, 60%)"
            strokeWidth="8"
            strokeLinecap="round"
            opacity="0.8"
          />
          
          {/* Yellow Range (600-740) */}
          <path
            d="M 85 28 A 80 80 0 0 1 135 38"
            fill="none"
            stroke="hsl(45, 93%, 47%)"
            strokeWidth="8"
            strokeLinecap="round"
            opacity="0.8"
          />
          
          {/* Green Range (740-850) */}
          <path
            d="M 135 38 A 80 80 0 0 1 180 100"
            fill="none"
            stroke="hsl(142, 76%, 36%)"
            strokeWidth="8"
            strokeLinecap="round"
            opacity="0.9"
            style={{
              filter: "drop-shadow(0 0 6px hsl(142, 76%, 36%, 0.4))"
            }}
          />
          
          {/* Center Pivot */}
          <circle
            cx="100"
            cy="100"
            r="4"
            fill="hsl(var(--foreground))"
            opacity="0.9"
          />
          
          {/* Needle */}
          <line
            x1="100"
            y1="100"
            x2="100"
            y2="35"
            stroke="hsl(var(--foreground))"
            strokeWidth="2.5"
            strokeLinecap="round"
            style={{
              transformOrigin: "100px 100px",
              transform: `rotate(${needleAngle}deg)`,
              filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))"
            }}
          />
          
          {/* Minimal Score Labels */}
          <text x="35" y="110" fill="hsl(var(--muted-foreground))" fontSize="9" textAnchor="middle" opacity="0.6">300</text>
          <text x="165" y="110" fill="hsl(var(--muted-foreground))" fontSize="9" textAnchor="middle" opacity="0.6">850</text>
        </svg>
        
        {/* Score Display */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center">
          <div className="glass-card rounded-xl p-6 backdrop-blur-sm">
            <div 
              className="text-4xl md:text-5xl font-bold mb-2"
              style={{ color: "hsl(142, 76%, 36%)" }}
            >
              {score}
            </div>
            <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
              Credit Score
            </div>
          </div>
        </div>
        
        {/* Success Glow Effect */}
        <div
          className="absolute inset-0 rounded-full opacity-30"
          style={{
            background: `radial-gradient(circle, hsl(142, 76%, 36%, 0.15), transparent 60%)`,
            filter: "blur(25px)"
          }}
        />
      </div>
    </div>
  );
};

export default CreditScoreGauge;