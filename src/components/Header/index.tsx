import React from "react";
import Button from "../Button";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="text-white pt-8 flex justify-between ">
      <div className="font-bold text-3xl">FIDO</div>
      <Button>Book Demo</Button>
    </div>
  );
};

export default Header;
