import { createContext, useState } from "react";

export const Shoppin = createContext();

const ShoppinProvider = (props) => {
  const [headerTrue, setHeaderTrue] = useState(false);
  const [mainSideImage, setMainSideImage] = useState(false);
  const value = { headerTrue, setHeaderTrue, mainSideImage, setMainSideImage };

  return <Shoppin.Provider value={value}>{props.children}</Shoppin.Provider>;
};

export default ShoppinProvider;
