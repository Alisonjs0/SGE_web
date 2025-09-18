interface WelcomeTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function WelcomeTitle({ 
  title, 
  subtitle, 
  className = "text-xl font-bold text-black leading-relaxed" 
}: WelcomeTitleProps) {
  return (
    <div className="text-center mb-12">
      <h2 className={className}>
        {title}
        {subtitle && (
          <>
            <br />
            {subtitle}
          </>
        )}
      </h2>
    </div>
  );
}
