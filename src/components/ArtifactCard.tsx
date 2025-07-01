
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ArtifactCardProps {
  title: string;
  description: string;
  image?: string;
  year?: string;
  tags?: string[];
  children?: ReactNode;
  className?: string;
}

const ArtifactCard = ({ 
  title, 
  description, 
  image, 
  year, 
  tags, 
  children, 
  className 
}: ArtifactCardProps) => {
  return (
    <div className={cn(
      "museum-spotlight exhibition-frame p-6 bg-gradient-to-br from-amber-50 to-stone-100 rounded-lg",
      className
    )}>
      {image && (
        <div className="mb-4 rounded-lg overflow-hidden border-2 border-amber-200">
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <div className="space-y-3">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-semibold serif-elegant text-amber-900">
            {title}
          </h3>
          {year && (
            <span className="text-sm text-amber-600 bg-amber-100 px-2 py-1 rounded serif-elegant">
              {year}
            </span>
          )}
        </div>
        
        <p className="text-amber-800 leading-relaxed">
          {description}
        </p>
        
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="text-xs bg-amber-200 text-amber-800 px-2 py-1 rounded-full serif-elegant"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        {children}
      </div>
    </div>
  );
};

export default ArtifactCard;
