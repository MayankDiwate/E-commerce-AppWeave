import { ShoppingCart } from "lucide-react";
import { Avatar } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

type ProductCardType = {
  image: string;
  title: string;
  price: number;
  colour: string;
  gender: string;
  type: string;
};

const ProductCard = ({
  image,
  title,
  price,
  colour,
  gender,
  type,
}: ProductCardType) => {
  return (
    <div className="flex flex-col justify-between w-full md:w-60 h-[320px] p-2 border border-1 rounded-lg">
      <div className="flex justify-between items-center mb-2">
        <div className="flex gap-2">
          <Badge variant="secondary">{gender}</Badge>
          <Badge variant="secondary">{type}</Badge>
        </div>
        <Avatar
          className={`w-6 h-6 bg-${colour && colour.toLowerCase()}-400`}
        />
      </div>
      <div className="flex flex-col justify-between h-full">
        <div className="flex justify-center">
          <img src={image} alt="" height={100} width={100} />
        </div>
        <h1 className="line-clamp-2">{title}</h1>
      </div>
      <div>
        <Separator className="mt-4 mb-3" />
        <div className="flex items-center justify-between w-full gap-2">
          <p>${price}</p>
          <Button size={"sm"} className="flex items-center gap-1">
            <ShoppingCart size={16} /> Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
