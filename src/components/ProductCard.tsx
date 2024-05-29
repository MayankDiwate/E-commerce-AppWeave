import { addToCart } from "@/store/features/cartSlice";
import { Product } from "@/types/Product";
import { ShoppingCart } from "lucide-react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

type ProductCardType = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardType) => {
  const dispatch = useDispatch();
  // const products = useSelector((state: RootState) => state.products);

  // const handleAddToCart = (productId: number, cartQuantity: number) => {
  //   const existingProduct = products.find(
  //     (product) => product.id === productId
  //   );
  //   if (existingProduct && existingProduct.quantity >= cartQuantity) {
  //     dispatch(addToCart({ ...existingProduct, quantity: cartQuantity }));
  //     toast.success("Product added to cart");
  //   } else {
  //     toast.error("Not enough stock available");
  //   }
  // };

  const colorVariants: Record<string, string> = {
    red: "bg-red-400",
    blue: "bg-blue-400",
    green: "bg-green-400",
  };

  return (
    <div className="flex flex-col justify-between w-full md:w-60 h-[320px] p-2 border border-1 rounded-lg">
      <div className="flex justify-between items-center mb-2">
        <div className="flex gap-2">
          <Badge variant="secondary">{product.gender}</Badge>
          <Badge variant="secondary">{product.type}</Badge>
        </div>
        <div
          className={`w-6 h-6 rounded-full ${
            colorVariants[product.colour.toLowerCase()]
          }`}
        />
      </div>
      <div className="flex flex-col justify-between h-full">
        <div className="flex justify-center">
          <img src={product.image} alt="" height={100} width={100} />
        </div>
        <h1 className="line-clamp-2">{product.title}</h1>
      </div>
      <div>
        <Separator className="mt-4 mb-3" />
        <div className="flex items-center justify-between w-full gap-2">
          <p>${product.price}</p>
          <Button
            size={"sm"}
            className="flex items-center gap-1"
            onClick={() => {
              dispatch(addToCart({ ...product, quantity: 1 }));
              toast.success("Product added to cart");
            }}
          >
            <ShoppingCart size={16} /> Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
