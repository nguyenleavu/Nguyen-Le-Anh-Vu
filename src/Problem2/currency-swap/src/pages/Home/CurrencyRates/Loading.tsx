const Loading = () => {
  return (
    <tr className="h-56">
      <th scope="row" className="px-6 py-4 font-medium flex items-center"></th>
      <td className="px-6 py-4 text-center">
        <span>
          <i className="animate-spin text-5xl fa-duotone fa-spinner-third text-secondary"></i>
        </span>
      </td>
      <td className="px-6 py-4 text-right"></td>
    </tr>
  );
};

export default Loading;
