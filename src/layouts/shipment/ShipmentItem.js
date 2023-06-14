import { useEffect, useState } from "react";
import axios from "axios";
const API_ENDPOINT = "https://my.api.mockaroo.com/shipments.json?key=5e0b62d0";

const ShipmentItem = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    await axios
      .get(API_ENDPOINT)
      .then((response) => {
        setData(response.json());
        setError(null);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return { isLoading, error, data };
};

export default ShipmentItem;
