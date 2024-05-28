import { filterByCategory, filterBySearch } from "@/lib/utils";
import ProductCard from "./ProductCard";

type ProductListType = {
  serchTerm: string;
  selectedColours: string[];
  selectedGenders: string[];
  selectedPrices: string[];
  selectedTypes: string[];
};

const ProductsList = ({
  serchTerm,
  selectedColours,
  selectedGenders,
  selectedPrices,
  selectedTypes,
}: ProductListType) => {
  const filteredProducts = filterBySearch(serchTerm);

  const filteredProductsByCategory = filterByCategory({
    colours: selectedColours,
    genders: selectedGenders,
    prices: selectedPrices,
    types: selectedTypes,
  });

  return (
    <div className="grid grid-cols-1 px-2 gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-4">
      {filteredProducts.length === 0 && <p>No products found</p>}
      {filteredProductsByCategory.length === 0 && <p>No products found</p>}

      {(selectedColours && selectedColours.length > 0) ||
      (selectedGenders && selectedGenders.length > 0) ||
      (selectedPrices && selectedPrices.length > 0) ||
      (selectedTypes && selectedTypes.length > 0)
        ? filteredProductsByCategory.map((product) => {
            return (
              <div key={product.id}>
                <ProductCard
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  colour={product.colour}
                  gender={product.gender}
                  type={product.type}
                />
              </div>
            );
          })
        : filteredProducts.map((product) => {
            return (
              <div key={product.id}>
                <ProductCard
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  colour={product.colour}
                  gender={product.gender}
                  type={product.type}
                />
              </div>
            );
          })}
    </div>
  );
};

export default ProductsList;
