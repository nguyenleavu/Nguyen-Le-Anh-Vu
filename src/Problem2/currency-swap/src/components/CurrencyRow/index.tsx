import { isEmpty, map } from "lodash";
import { ChangeEvent, useRef, useState } from "react";
import { svgs } from "../../constants/svgs";
import useOnClickOutside from "../../hooks/useOutsideClick";
import { Currency } from "../../types/currency.types";

interface Props {
  label: string;
  options: Currency[];
  selectValue: string;
  value: number;
  onSelect: (currency: Currency) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClearInput: () => void;
}

const CurrencyRow = ({
  label,
  options,
  selectValue,
  onSelect,
  value,
  handleChange,
  onClearInput,
}: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(menuRef, () => {
    setOpen(false);
  });

  const handleClick = (option: Currency) => () => {
    onSelect(option);
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="min-w-[300px] flex flex-col flex-1">
      <label className="font-semibold mb-1 text-lg">{label}</label>

      <div className="relative w-full mb-4" ref={menuRef}>
        <button
          onClick={handleOpen}
          className="w-full h-[50px] bg-white border border-gray-200 shadow-input font-medium rounded-lg text-sm px-5 py-2.5 flex justify-between items-center"
        >
          {!isEmpty(selectValue) && (
            <>
              <div className="flex items-center gap-2">
                <img src={(svgs as any)[selectValue]} alt="svg" />
                <span className="text-base">{selectValue}</span>
              </div>
              <i className="fa-light fa-chevron-down"></i>
            </>
          )}
        </button>

        {open && (
          <div className="absolute z-10 w-full bg-white divide-y divide-gray-100 rounded-lg animate-fade animate-duration-200 flex flex-col mt-2 drop-shadow h-80 overflow-auto">
            <div className="py-2 text-sm text-gray-700 flex flex-col">
              {map(options, (option, index) => (
                <button
                  key={`${option.currency}-${index}`}
                  className="flex items-center px-3 py-[10px] h-11 hover:bg-[#b5d7fd]/20 cursor-pointer font-medium"
                  onClick={handleClick(option)}
                >
                  <img
                    src={(svgs as any)[option.currency]}
                    className="h-5 w-5"
                    alt="svg"
                  />
                  <span className="ml-2">{option.currency}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="relative w-full h-[50px] bg-white border border-gray-200 shadow-input font-medium rounded-lg">
        <input
          value={value}
          type="number"
          onChange={handleChange}
          className="h-full w-full pl-5 pr-12 py-2.5 outline-none"
        />
        {!!value && (
          <button
            className="absolute right-5 top-1/2 -translate-y-1/2"
            onClick={onClearInput}
          >
            <i className="fa-regular fa-xmark text-xl"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default CurrencyRow;
