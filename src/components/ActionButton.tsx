import { IconType } from "react-icons";

interface ActionButtonProps {
  text: string;
  icon?: IconType;
  onClick?: () => void;
  className?: string;
  iconClassName?: string;
}

export default function ActionButton({ 
  text, 
  icon: Icon, 
  onClick,
  className = "bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold flex items-center mx-auto hover:bg-red-700 transition-colors",
  iconClassName = "ml-2"
}: ActionButtonProps) {
  return (
    <div className="text-center">
      <button 
        className={className}
        onClick={onClick}
      >
        {text}
        {Icon && <Icon className={iconClassName} />}
      </button>
    </div>
  );
}
