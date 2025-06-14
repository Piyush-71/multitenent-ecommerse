import { Footer } from "./footer";
import { Navbar } from "./navbar";

interface Props {
  children: React.ReactNode;
}

function layout({ children }: Props) {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1 bg-[#F4F4F0]">
          {children}
          </div>
        <Footer />
      </div>
    </div>
  );
}
export default layout;

