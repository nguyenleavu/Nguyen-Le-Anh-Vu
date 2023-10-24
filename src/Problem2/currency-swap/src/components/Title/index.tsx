import { isEmpty } from "lodash";

interface Props {
  from: string;
  to: string;
}

const Title = ({ from, to }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center h-40 text-white">
      <h1 className="text-3xl md:text-4xl font-semibold">
        {isEmpty(from) ? `Currency Swap` : `Swap ${from} to ${to}`}
      </h1>
      <p className="mt-1">Currency Swap</p>
    </div>
  );
};

export default Title;
