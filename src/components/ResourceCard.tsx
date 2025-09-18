import { IconType } from "react-icons";

interface ResourceCardProps {
  icon: IconType;
  title: string;
  description: string;
}

export default function ResourceCard({ icon: Icon, title, description }: ResourceCardProps) {
  return (
    <div className="flex">
      <div className="flex justify-center mb-4">
        <Icon className="text-red-600 text-3xl" />
      </div>
      <div>
        <h3 className="text-lg font-bold text-black mb-2">
          {title}
        </h3>
        <p className="text-sm text-gray-700 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
