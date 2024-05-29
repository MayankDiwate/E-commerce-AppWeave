import { Button } from "@/components/ui/button";
import { removeFromCart } from "@/store/features/cartSlice";
import { useAppSelector } from "@/store/hooks";
import { useDispatch } from "react-redux";

const Cart = () => {
  const products = useAppSelector((state) => state.products);
  const dispatch = useDispatch();

  const total = useAppSelector((state) => state.total);

  if (products.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        Cart is empty
      </div>
    );
  }

  return (
    <div>
      {products.map((product) => {
        return (
          <>
            <div key={product.id}>
              <div>{total}</div>
              <div>{product.quantity}</div>
              <div>{product.title}</div>
            </div>
            <Button onClick={() => dispatch(removeFromCart(product))}>
              Delete Product
            </Button>
          </>
        );
      })}
    </div>
  );
};

export default Cart;
