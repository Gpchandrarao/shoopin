import React from "react";

import Logo from "../assets/images/logo.jpeg";

const Header = () => {
  return (
    <div>
      <img
        src={Logo}
        alt="logo image"
        className="md:w-24 md:h-auto w-auto h-[17px]"
      />
    </div>
  );
};

export default Header;
