"use client";
import React from "react";
import Button, { ButtonType } from "../Button";

type Props = {};

const PrimaryCopy = (props: Props) => {
  return (
    <div className="flex items-center justify-between">
      <div className="lg:max-w-xl lg:text-left text-center text-white">
        <div className="mt-16 text-6xl lg:text-7xl leading-tight tracking-tight">
          Quality Customer Support 10x faster with AI
        </div>
        <div className="my-4 font-light text-lg">
          {`Fido leverages modern AI trained on your existing support history to respond to customers 10x faster without the time and cost of scaling a team.`}
        </div>
        <div className="flex gap-x-5 mt-12 lg:justify-start justify-center">
          <Button
            onClick={() => {
              window.open(
                "https://calendly.com/jerry-fido-support/30min",
                "_self"
              );
            }}
            className="py-4 px-8"
          >
            Book a Demo
          </Button>
        </div>
      </div>
      <div style={{ maxWidth: "525px" }} className="mt-12  lg:block hidden">
        <img src="/primary.png" alt="primary" />
      </div>
    </div>
  );
};

export default PrimaryCopy;
