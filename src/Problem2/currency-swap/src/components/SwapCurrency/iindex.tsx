import { ReactNode } from "react";
import { useDate } from "../../hooks/useDate";

interface Props {
  left: ReactNode;
  right: ReactNode;
  handleSwitch: () => void;
}

const SwapCurrency = ({ left, right, handleSwitch }: Props) => {
  const { date, time } = useDate();
  return (
    <div className="w-full lg:w-5/6 bg-white shadow-wrapper rounded-lg max-w-6xl">
      <div className="h-14 flex items-center justify-center bg-[#f0f5fa] rounded-lg font-medium text-center">
        <span>{date}</span>
        <span className="mx-4"> {time} </span>
      </div>
      <div className="w-full flex justify-center lg:items-center gap-6 p-3 lg:p-12 flex-wrap">
        {left}
        <div className="w-full md:w-12 flex items-center justify-center">
          <button
            onClick={handleSwitch}
            className="flex items-center justify-center border border-gray-200 rounded-full h-12 w-12"
          >
            <i className="text-primary text-xl fa-light fa-arrow-right-arrow-left"></i>
          </button>
        </div>
        {right}
      </div>
    </div>
  );
};

export default SwapCurrency;
