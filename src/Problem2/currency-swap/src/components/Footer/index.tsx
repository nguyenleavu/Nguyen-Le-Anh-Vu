const Footer = () => {
  return (
    <div className="h-60 bg-secondary flex flex-col justify-center items-center text-white">
      <div className="flex items-center gap-3">
        <i className="block text-3xl  fa-brands fa-square-facebook"></i>
        <i className="block text-3xl  fa-brands fa-github"></i>
        <i className="block text-3xl  fa-brands fa-instagram"></i>
      </div>
      <div className="text-sm my-3">
        <p>nguyenleavu</p>
      </div>
      <div className="text-sm">
        <p>@1999-2023 github.com/nguyenleavu</p>
      </div>
    </div>
  );
};

export default Footer;
