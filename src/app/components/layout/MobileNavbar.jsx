import LeftNavbar from "./LeftNavbar";
import Navbar from "./Navbar";

export default function MobileNavbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[100] lg:hidden bg-blacktheme/80 backdrop-blur-md default-cursor">
      <div className="flex items-center justify-between px-5 py-4">
        <LeftNavbar variant="mobile" />
        <Navbar variant="mobile" />
      </div>
    </div>
  );
}
