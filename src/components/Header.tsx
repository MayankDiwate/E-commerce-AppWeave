import { RootState } from "@/store/store";
import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";

const Header = () => {
  const products = useSelector((state: RootState) => state.products);

  return (
    <header>
      <div className="bg-gray-300 py-3 px-6 flex items-center justify-between">
        <a href="/" className="text-xl">
          <div className="text-2xl">TeeRex Store</div>
        </a>
        <div className="flex items-center gap-2">
          <a href="/" className="text-xl hover:underline">
            Products
          </a>
          <a href="/cart" className="relative">
            <div>
              <div className="bg-black rounded-full text-white text-xs text-center absolute -top-1 -right-2 h-4 w-4">
                {products.length}
              </div>
            </div>
            <ShoppingCart size={24} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
