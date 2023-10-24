const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 h-16 bg-secondary z-10 flex justify-center px-4 border-b border-primary/50">
      <div className="w-full text-white flex items-center justify-between max-w-6xl">
        <div>
          <h1 className="font-semibold uppercase">Currency Swap</h1>
        </div>
        <div>
          <button className="px-4 py-2 bg-primary rounded-lg hover:bg-primary/80 transition-all text-sm">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
