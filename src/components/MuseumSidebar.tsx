
import { useState } from "react";
import { Home, User, Briefcase, Heart, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const navigationItems = [
  { id: "biography", label: "Biography", icon: User },
  { id: "portfolio", label: "Portfolio", icon: Briefcase },
  { id: "hobbies", label: "Hobbies", icon: Heart },
  { id: "contact", label: "Contact", icon: Mail },
];

interface MuseumSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const MuseumSidebar = ({ activeSection, onSectionChange }: MuseumSidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={cn(
      "fixed left-0 top-0 h-full brass-directory transition-all duration-300 z-50",
      isCollapsed ? "w-16" : "w-64"
    )}>
      <div className="p-6 border-b border-amber-600/30">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <h2 className="text-lg font-semibold text-amber-100 serif-elegant">
              Museum Directory
            </h2>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-md hover:bg-amber-600/20 transition-colors text-amber-100"
          >
            <Home size={20} />
          </button>
        </div>
      </div>

      <nav className="p-4 space-y-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={cn(
                "w-full flex items-center p-3 rounded-lg transition-all duration-300 text-left",
                "hover:bg-amber-600/20 hover:shadow-lg",
                isActive ? "bg-amber-600/30 shadow-lg text-amber-100" : "text-amber-200/80"
              )}
            >
              <Icon size={20} className="flex-shrink-0" />
              {!isCollapsed && (
                <span className="ml-3 serif-elegant font-medium">
                  {item.label}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      <div className="absolute bottom-4 left-4 right-4">
        {!isCollapsed && (
          <div className="p-3 bg-amber-900/30 rounded-lg border border-amber-600/30">
            <p className="text-xs text-amber-200/70 text-center serif-elegant">
              Est. 2024<br />
              Curated Collection
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MuseumSidebar;
