import { RootState } from "@/store/store";
import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Header = () => {
  const products = useSelector((state: RootState) => state.products);

  return (
    <header>
      <div className="bg-gray-200 shadow-md fixed top-0 w-full py-3 px-6 flex items-center justify-between">
        <NavLink to="/" className="text-xl">
          <div className="text-2xl">TeeRex Store</div>
        </NavLink>
        <div className="flex items-center gap-2">
          <NavLink to="/" className="text-xl hover:underline">
            Products
          </NavLink>
          <NavLink to="/cart" className="relative">
            <div>
              <div className="bg-black rounded-full text-white text-xs text-center absolute -top-1 -right-2 h-4 w-4">
                {products.length}
              </div>
            </div>
            <ShoppingCart size={24} />
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
