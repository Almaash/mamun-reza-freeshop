import Sidebar from './Sidebar';

const Layout: React.FC = ({ children }: any) => {
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
