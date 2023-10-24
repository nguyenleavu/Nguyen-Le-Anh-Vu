import { useState } from "react";
import HeaderTable from "./HeaderTable";
import List from "./List";
import Loading from "./Loading";
import { Currency } from "../../../types/currency.types";

interface Props {
  options: Currency[];
  loading: boolean;
}

const CurrencyRates = ({ options, loading }: Props) => {
  const [more, setMore] = useState<boolean>(false);

  return (
    <div className="px-4 w-full flex pb-10 flex-col items-center">
      <div className="relative overflow-x-auto shadow-wrapper sm:rounded-lg w-full lg:w-5/6 max-w-6xl">
        <table className="w-full text-left text-white">
          <HeaderTable />
          <tbody className="text-black">
            {loading ? (
              <Loading />
            ) : (
              <List options={options.slice(0, more ? options.length : 10)} />
            )}
          </tbody>
        </table>
      </div>
      <div className="w-full flex items-center justify-center my-4">
        <button
          className="shadow-wrapper px-10 py-3 rounded-full flex items-center justify-center font-medium"
          onClick={() => setMore(!more)}
        >
          {more ? <span>Show more</span> : <span>Show less</span>}
        </button>
      </div>
    </div>
  );
};

export default CurrencyRates;
