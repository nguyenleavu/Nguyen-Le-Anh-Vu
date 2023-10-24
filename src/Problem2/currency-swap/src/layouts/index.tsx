import { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
