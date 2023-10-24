import { map } from "lodash";
import { Currency } from "../../../types/currency.types";
import { svgs } from "../../../constants/svgs";
import { formatDate } from "../../../utils/date";

interface Props {
  options: Currency[];
}

const List = ({ options }: Props) => {
  return (
    <>
      {map(options, (option, index) => (
        <tr
          key={`${option.price}-${index}`}
          className="bg-white border-b border-gray-200"
        >
          <th scope="row" className="px-6 py-4 font-medium flex items-center">
            <img
              className="h-7 w-7"
              src={(svgs as any)[option.currency]}
              alt="svg"
            />
            <span className="ml-2">{option.currency}</span>
          </th>
          <td className="px-6 py-4 text-center">{option.price}</td>
          <td className="px-6 py-4 text-right">{formatDate(option.date)}</td>
        </tr>
      ))}
    </>
  );
};

export default List;
