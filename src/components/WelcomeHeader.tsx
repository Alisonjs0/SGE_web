interface WelcomeHeaderProps {
  logoPath?: string;
  logoAlt?: string;
}

export default function WelcomeHeader({ 
  logoPath = "/assets/logo.svg", 
  logoAlt = "Logo SGE" 
}: WelcomeHeaderProps) {
  return (
    <img 
      src={logoPath} 
      alt={logoAlt} 
      className="mt-[32px] mx-auto" 
    />
  );
}
