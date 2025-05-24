import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="relative">
      <Navbar />
      {children}
      {/* Fixed Signature */}
      <div className="fixed bottom-6 right-10 text-4xl text-white opacity-70 z-50" 
           style={{ fontFamily: "Great Vibes, cursive" }}>
        Priyanshi
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
