import Link from "next/link";
import { Newspaper, MapPin, HelpCircle, Car, ShoppingCart } from "lucide-react";

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 text-black h-screen p-4 shadow-2xl border-r border-gray-200">
      <div className="text-base font-bold">
        <img src="/image.png" alt="Logo" className="h-12 w-auto" />
      </div>
      <ul className="mt-8 space-y-4 text-base">
        <li>
          <Link href="/articles" className="flex items-center gap-3 hover:bg-blue-400 p-2 rounded-xl hover:text-white">
            <Newspaper size={20} />
            Articles
          </Link>
        </li>
        <li>
          <Link href="/country" className="flex items-center gap-3 hover:bg-blue-400 p-2 rounded-xl hover:text-white">
            <MapPin size={20} />
            Country, State, City
          </Link>
        </li>
        <li>
          <Link href="/services" className="flex items-center gap-3 hover:bg-blue-400 p-2 rounded-xl hover:text-white">
            <HelpCircle size={20} />
            Services
          </Link>
        </li>
        <li>
          <Link href="/autoDelarship" className="flex items-center gap-3 hover:bg-blue-400 p-2 rounded-xl hover:text-white">
            <Car size={20} />
            Auto Dealership
          </Link>
        </li>
        <li>
          <Link href="/orders" className="flex items-center gap-3 hover:bg-blue-400 p-2 rounded-xl hover:text-white">
            <ShoppingCart size={20} />
            Orders
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
