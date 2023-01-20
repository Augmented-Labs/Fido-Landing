import React from "react";
import Button, { ButtonType } from "../Button";

type Props = {};

const CTA = (props: Props) => {
  return (
    <div className="container mx-auto lg:px-48 lg:py-24 py-20 flex items-center text-center lg:text-left lg:justify-between lg:flex-row flex-col">
      <div>
        <div className="text-3xl font-bold">
          Ready to supercharge your CX workflow?
        </div>
        <div className="lg:p-0 p-8">
          Let us help you improve CX efficiency and deliver personalized support
          at scale.
        </div>
      </div>
      <div>
        <Button className="py-4 font-semibold" variant={ButtonType.Secondary}>
          Book a demo today
        </Button>{" "}
      </div>
    </div>
  );
};

export default CTA;
