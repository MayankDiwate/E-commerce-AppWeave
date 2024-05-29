import CategoryList from "@/components/CategoryList";
import ProductsList from "@/components/ProductsList";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedColours, setSelectedColours] = useState<string[]>([]);
  const [selectedGenders, setSelectedGenders] = useState<string[]>([]);
  const [selectedPrices, setSelectedPrices] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  return (
    <div>
      <div className="flex justify-center mt-20 mb-4">
        <Input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full ml-40 mr-2 sm:w-80"
        />
      </div>

      <div className="flex flex-row items-start justify-center">
        <CategoryList
          setSelectedColours={setSelectedColours}
          setSelectedGenders={setSelectedGenders}
          setSelectedPrices={setSelectedPrices}
          setSelectedTypes={setSelectedTypes}
        />
        <ProductsList
          serchTerm={searchTerm}
          selectedColours={selectedColours}
          selectedGenders={selectedGenders}
          selectedPrices={selectedPrices}
          selectedTypes={selectedTypes}
        />
      </div>
    </div>
  );
};

export default Home;
