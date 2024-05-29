import QuantitySelector from "@/components/QuantitySelector";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { removeFromCart, reset } from "@/store/features/cartSlice";
import { useAppSelector } from "@/store/hooks";
import { Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const products = useAppSelector((state) => state.products);
  const total = useAppSelector((state) => state.total);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (products.length === 0) {
    return (
      <div className="flex flex-col gap-2 text-lg items-center justify-center h-screen">
        🛒 Your cart is empty!
        <Button onClick={() => navigate("/")}>
          Go home
        </Button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col items-center py-4">
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="flex flex-row p-2 m-1 bg-gray-100 justify-between items-center border border-1 rounded-md sm:w-[80%] w-[95%]"
            >
              <div className="flex items-center gap-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-20 h-20"
                />
                <div>
                  <h2 className="max-w-60 line-clamp-2">{product.title}</h2>
                  <p className="text-gray-500 text-sm">
                    ${product.price * product.quantity}
                  </p>
                </div>
              </div>
              <QuantitySelector id={product.id} />
              <Button
                variant="destructive"
                onClick={() => dispatch(removeFromCart(product))}
                className="flex gap-1 items-center"
              >
                <Trash2 size={18} />
                <span className="hidden sm:inline">Delete</span>
              </Button>
            </div>
          );
        })}
      </div>
      <Separator />
      <div className="flex flex-col sm:flex-row justify-between items-end sm:items-center mx-auto sm:w-[80%] p-4">
        <div className=" text-lg text-center">
          Total amount: <span className="font-bold">${total}</span>
        </div>
        <Button
          className="mt-4 w-full sm:w-40"
          onClick={() => {
            dispatch(reset());
            toast.success("Checkout Successful");
            navigate("/");
          }}
        >
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;
