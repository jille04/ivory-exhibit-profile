
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ExhibitionRoomProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

const ExhibitionRoom = ({ title, subtitle, children, className }: ExhibitionRoomProps) => {
  return (
    <section className={cn("mb-16", className)}>
      <div className="museum-texture p-8 rounded-lg">
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <div className="w-2 h-16 column-accent mr-6"></div>
            <div>
              <h2 className="text-3xl font-bold serif-elegant text-amber-900 mb-2">
                {title}
              </h2>
              {subtitle && (
                <p className="text-amber-700 serif-elegant italic">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
          <div className="w-full h-px bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600 opacity-30"></div>
        </div>
        
        <div className="exhibition-frame p-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg">
          {children}
        </div>
      </div>
    </section>
  );
};

export default ExhibitionRoom;
