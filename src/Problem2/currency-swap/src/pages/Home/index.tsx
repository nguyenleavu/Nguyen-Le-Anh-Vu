import { useEffect, useState } from "react";
import Layout from "../../layouts";
import CurrencyRates from "./CurrencyRates";
import CurrencySection from "./CurrencySection";
import { Currency } from "../../types/currency.types";
import { API_ENDPOINT } from "../../constants/api-endpoint";
import http from "../../utils/https";

const Home = () => {
  const [options, setOptions] = useState<Currency[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    http
      .get<Currency[]>(API_ENDPOINT.getCurrency)
      .then(({ data }) => {
        setOptions(data);
        setLoading(false);
      })
      .catch((error) => {
        // Toast Error
        console.log("data", error);
      });
  }, []);

  return (
    <Layout>
      <CurrencySection options={options} />
      <CurrencyRates options={options} loading={loading} />
    </Layout>
  );
};

export default Home;
