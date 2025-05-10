import "./App.css";
import { useState, useEffect } from "react";

export default function App() {
  const [imageSrc, setImageSrc] = useState("/images/image-product-mobile.jpg");
  function ResponsiveImage() {
    useEffect(() => {
      const mediaQuery = window.matchMedia("(min-width: 768px)");

      const handleMediaChange = (e) => {
        setImageSrc(
          e.matches
          ? "/images/image-product-desktop.jpg"
          : "/images/image-product-mobile.jpg"
        );
      };

      handleMediaChange(mediaQuery);
      mediaQuery.addEventListener("change", handleMediaChange);

      return () => mediaQuery.removeEventListener("change", handleMediaChange);
    }, []);
    console.log(imageSrc);
    return <img src={imageSrc} alt="Responsive" />;
  }
  window.addEventListener("load", ResponsiveImage);
  window.addEventListener("resize", ResponsiveImage);
  return (
    <main>
      <div className="app">
        {ResponsiveImage()}
        <div className="information-container">
          <span className="type-text">PERFUME</span>
          <h2>Gabrielle Essence Eau De Parfum</h2>
          <p>
            A floral, solar and voluptuous interpretation composed by Oliver
            Polge, Perfumer, Creator for the House of CHANEL.
          </p>
          <div className="price-container">
            <span className="current-price">$149.99</span>
            <span className="previous-price">$169.99</span>
          </div>
          <button className="add-to-cart-btn">
            <img src="/images/icon-cart.svg" alt="cart" />
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}
