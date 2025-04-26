import { ReactNode } from "react";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Fixed Sidebar */}
      <div className="w-[250px] flex-shrink-0">
        <Sidebar />
      </div>

      {/* Scrollable Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

export default Layout;
