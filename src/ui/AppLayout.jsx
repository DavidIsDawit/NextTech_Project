



import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Home Page/Footer";

function AppLayout() {
  return (
    <div className="relative min-h-screen">
      
      {/* Navbar overlays content */}
      <header className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </header>

      {/* Page content */}
      <main>
        <Outlet />
      </main>
   <Footer/>
    </div>
  );
}

export default AppLayout;
