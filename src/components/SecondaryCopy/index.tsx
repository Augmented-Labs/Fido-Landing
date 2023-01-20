import React from "react";
import Button, { ButtonType } from "../Button";

type Props = {};

const SecondaryCopy = (props: Props) => {
  return (
    <div className=" text-white lg:py-24 py-12">
      <div className="text-3xl lg:text-5xl text-center font-semibold leading-tight tracking-tight">
        Integrate directly into your CX software
      </div>
      <div className=" mt-8 mb-12 font-extralight text-xl text-center flex justify-center">
        <p className="lg:px-48 px-12">
          Instantly connect with the service desk you’re already using. Get more
          out of the platforms your agents are already using, and drive
          self-serve resolutions across chat, email, SMS and more.
        </p>
      </div>
      <div className="lg:flex lg:justify-center grid grid-cols-2 gap-10 mt-12 place-items-center">
        <div className="w-48 h-24 justify-center items-center bg-secondary rounded-2xl px-4">
          <img src="/zendesk.svg" />
        </div>
        <div className="w-48 h-24 flex justify-center items-center bg-secondary rounded-2xl px-4">
          <img src="/intercom.png" />
        </div>
        <div className="w-48 h-24 flex justify-center items-center bg-secondary rounded-2xl px-4">
          <img src="/kustomer.png" />
        </div>
        <div className="w-48 h-24 flex justify-center items-center bg-secondary rounded-2xl px-4">
          <img src="/freshdesk.png" />
        </div>
      </div>
    </div>
  );
};

export default SecondaryCopy;
