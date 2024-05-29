import { decreaseQuantity, increaseQuantity } from "@/store/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Minus, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const QuantitySelector = ({ id }: { id: number }) => {
  const products = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  const product = products.find((product) => product.id === id);

  return (
    <div className="flex items-center gap-1">
      <Button
        size={"sm"}
        variant={"ghost"}
        className="p-0"
        onClick={() => dispatch(decreaseQuantity(product!.id))}
      >
        <Minus size={16} />
      </Button>
      <Input
        type="number"
        value={product?.quantity}
        min={1}
        max={10}
        className="w-12 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        onChange={(e) => console.log(e.target.value)}
      />
      <Button
        size={"sm"}
        variant={"ghost"}
        className="p-0"
        onClick={() => dispatch(increaseQuantity(product!.id))}
      >
        <Plus size={16} />
      </Button>
    </div>
  );
};

export default QuantitySelector;
