import { useEffect, useState } from "react";

const useCarDetails = () => {
  const [carDetails, setCarDetails] = useState([]);

  useEffect(() => {
    fetch("https://car-warehouse.up.railway.app/inventory")
      .then((res) => res.json())
      .then((data) => setCarDetails(data));
  }, []);
  return [carDetails, setCarDetails];
};
export default useCarDetails;
