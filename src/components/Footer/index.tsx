import React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import Button from "../Button";
import clsx from "clsx";

type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      <div className="container mx-auto flex items-center justify-between py-12 text-white px-8">
        <div className="font-bold text-3xl">FIDO</div>
        <div className="flex gap-x-3">
          <div className="cursor-pointer">Terms</div>
          <div>•</div>
          <div className="cursor-pointer">Privacy</div>
          <div>•</div>
          <div
            className="cursor-pointer"
            data-bs-toggle="popover"
            data-bs-title="Popover title"
            data-bs-content="And here's some amazing content. It's very engaging. Right?"
          >
            Contact
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
