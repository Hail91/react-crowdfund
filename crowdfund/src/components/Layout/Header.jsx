import React from "react";
// import image/icon files
import HeroImage from "../../images/image-hero-desktop.jpg";
const Header = () => {
  return (
    <div>
      <nav class="header-nav">
        <h2>crowdfund</h2>
        <div class="header-anchor">
          <a href="#About">About</a>
          <a href="#Discover">Discover</a>
          <a href="#Get_started">Get Started</a>
        </div>
      </nav>
      <img class="header-hero" src={HeroImage} alt="header-hero-img" />
    </div>
  );
};

export default Header;
