import { isEmpty } from "lodash";
import { ChangeEvent, useEffect, useState } from "react";
import CurrencyRow from "../../../components/CurrencyRow";
import SwapCurrency from "../../../components/SwapCurrency/iindex";
import Title from "../../../components/Title";
import { Currency } from "../../../types/currency.types";

interface Props {
  options: Currency[];
}

interface SwapCurrencyType {
  from: Currency;
  to: Currency;
}

const CurrencySection = ({ options }: Props) => {
  const [amount, setAmount] = useState<string>("");
  const [amountInFromCurrency, setAmountInFromCurrency] =
    useState<boolean>(false);
  const [swapCurrency, setSwapCurrency] = useState<SwapCurrencyType>({
    from: options[0],
    to: options[1],
  });

  const handleSwitch = () => {
    setSwapCurrency({ from: swapCurrency.to, to: swapCurrency.from });
  };

  const handleFromSelect = (currency: Currency) => {
    setSwapCurrency({ ...swapCurrency, from: currency });
  };

  const handleToSelect = (currency: Currency) => {
    setSwapCurrency({ ...swapCurrency, to: currency });
  };

  const handleFromAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  };

  const handleToAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  };

  const handleClearInput = () => {
    setAmount("");
  };

  useEffect(() => {
    if (!isEmpty(options)) {
      setSwapCurrency({
        from: options[0],
        to: options[1],
      });
    }
  }, [options]);

  let toAmount = 0;
  let fromAmount = 0;

  if (swapCurrency.from?.price && swapCurrency.to?.price) {
    if (amountInFromCurrency) {
      fromAmount = Number(amount);
      toAmount =
        (Number(amount) * swapCurrency.from.price) / swapCurrency.to.price;
    } else {
      toAmount = Number(amount);
      fromAmount =
        (Number(amount) * swapCurrency.to.price) / swapCurrency.from.price;
    }
  }

  return (
    <main className="relative w-full">
      <div className="absolute h-banner left-0 right-0 bg-secondary flex flex-col items-center"></div>
      <div className="relative top-0 left-0 right-0 flex flex-col items-center px-4 lg:px-6 pt-28 pb-16">
        <Title
          from={swapCurrency?.from?.currency}
          to={swapCurrency?.to?.currency}
        />
        <SwapCurrency
          handleSwitch={handleSwitch}
          left={
            <CurrencyRow
              label="From"
              value={fromAmount}
              handleChange={handleFromAmountChange}
              onSelect={handleFromSelect}
              onClearInput={handleClearInput}
              selectValue={swapCurrency.from?.currency}
              options={options}
            />
          }
          right={
            <CurrencyRow
              label="To"
              value={toAmount}
              onSelect={handleToSelect}
              handleChange={handleToAmountChange}
              onClearInput={handleClearInput}
              selectValue={swapCurrency.to?.currency}
              options={options}
            />
          }
        />
      </div>
    </main>
  );
};

export default CurrencySection;
