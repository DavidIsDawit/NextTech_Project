



import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CoverImage from "./Banner";
import { getBannerConfig } from "../utils/BannerConfigs";

function AppLayout() {
  const location = useLocation();
  const banner = getBannerConfig(location.pathname);
  return (
    <div className="relative min-h-screen">
      
      {/* Navbar overlays content */}
      <header className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </header>

      {/* Page content */}
      <main>
      {banner && (
          <CoverImage
            title={banner.title}
            backgroundImage={banner.backgroundImage}
            breadcrumbs={banner.breadcrumbs}
          />
        )}
        <Outlet />
      </main>
   <Footer/>
    </div>
  );
}

export default AppLayout;
