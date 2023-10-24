const HeaderTable = () => {
  return (
    <thead className="uppercase bg-secondary h-14 rounded-lg">
      <tr className="rounded-lg">
        <th scope="col" className="px-6 py-3 font-medium capitalize">
          Currency
        </th>
        <th
          scope="col"
          className="px-6 py-3 font-medium capitalize text-center"
        >
          Price
        </th>
        <th scope="col" className="px-6 py-3 font-medium capitalize text-right">
          Date update
        </th>
      </tr>
    </thead>
  );
};

export default HeaderTable;
