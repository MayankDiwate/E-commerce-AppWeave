import { colours, genders, prices, types } from "@/lib/constants";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";

type CategoryListType = {
  setSelectedColours: React.Dispatch<React.SetStateAction<string[]>>;
  setSelectedGenders: React.Dispatch<React.SetStateAction<string[]>>;
  setSelectedPrices: React.Dispatch<React.SetStateAction<string[]>>;
  setSelectedTypes: React.Dispatch<React.SetStateAction<string[]>>;
};

const CategoryList = ({
  setSelectedColours,
  setSelectedGenders,
  setSelectedPrices,
  setSelectedTypes,
}: CategoryListType) => {
  return (
    <div className="min-w-36 fixed left-6 top-20">
      {/* Colours */}
      <div className="flex flex-col items-start px-3 gap-2">
        <h1>Colour</h1>
        {colours.map((colour, index) => {
          return (
            <div key={index} className="flex items-center gap-2">
              <Checkbox
                id={colour}
                onCheckedChange={() =>
                  setSelectedColours((prev) =>
                    prev.includes(colour)
                      ? prev.filter((c) => c !== colour)
                      : [...prev, colour]
                  )
                }
              />
              <Label htmlFor={colour}>{colour}</Label>
            </div>
          );
        })}
      </div>

      {/* Gender */}
      <div className="flex flex-col items-start px-3 pt-6 gap-2">
        <h1>Gender</h1>
        {genders.map((gender, index) => {
          return (
            <div key={index} className="flex items-center gap-2">
              <Checkbox
                id={gender}
                onCheckedChange={() =>
                  setSelectedGenders((prev) =>
                    prev.includes(gender)
                      ? prev.filter((g) => g !== gender)
                      : [...prev, gender]
                  )
                }
              />
              <Label htmlFor={gender}>{gender}</Label>
            </div>
          );
        })}
      </div>

      {/* Price */}
      <div className="flex flex-col items-start px-3 pt-6 gap-2">
        <h1>Price</h1>
        {prices.map((price, index) => {
          return (
            <div key={index} className="flex items-center gap-2">
              <Checkbox
                id={price}
                onCheckedChange={() =>
                  setSelectedPrices((prev) =>
                    prev.includes(price)
                      ? prev.filter((p) => p !== price)
                      : [...prev, price]
                  )
                }
              />
              <Label htmlFor={price}>{price}</Label>
            </div>
          );
        })}
      </div>

      {/* Type */}
      <div className="flex flex-col items-start px-3 pt-6 gap-2">
        <h1>Type</h1>
        {types.map((type, index) => {
          return (
            <div key={index} className="flex items-center gap-2">
              <Checkbox
                id={type}
                onCheckedChange={() =>
                  setSelectedTypes((prev) =>
                    prev.includes(type)
                      ? prev.filter((t) => t !== type)
                      : [...prev, type]
                  )
                }
              />
              <Label htmlFor={type}>{type}</Label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryList;
