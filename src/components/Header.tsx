import { ShoppingCart } from "lucide-react";

const Header = () => {
  return (
    <header>
      <div className="bg-gray-300 py-3 px-6 flex items-center justify-between">
        <div className="text-2xl">TeeRex Store</div>
        <div className="flex items-center gap-4">
          <a href="/" className="text-xl hover:underline">
            Products
          </a>
          <a href="/cart">
            <ShoppingCart size={20} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
