"use client";
import React from "react";
import Button, { ButtonType } from "../Button";

type Props = {};

const PrimaryCopy = (props: Props) => {
  return (
    <div className="flex items-center justify-between">
      <div className="lg:max-w-lg lg:text-left text-center text-white">
        <div className="mt-16 text-6xl lg:text-7xl leading-tight tracking-tight">
          Supercharge Your Customer Support by 10x
        </div>
        <div className="my-4 font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
          condimentum porta orci. Sed pellentesque, tortor eu sodales gravida,
          velit massa rutrum justo, quis cursus lacus purus vitae orci.
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
      <div
        style={{ maxWidth: "525px" }}
        className="mt-12 xl:mr-24 lg:block hidden"
      >
        <img src="/primary.png" alt="primary" />
      </div>
    </div>
  );
};

export default PrimaryCopy;
