import React from "react";
import { Slide } from "react-awesome-reveal";

const ImageWithTextAnimated = ({
  reverse,
  direction,
  imageSrc,
  text,
  address,
}) => {
  return (
    <div
      className={`flex justify-center gap-44 pb-14 ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      <div className="max-w-[30%] h-[45vh] text-xl flex justify-center items-center flex-col">
        <p className="font-semibold text-3xl text-sky-600 w-full">{address}</p>
        <p>{text}</p>
      </div>

      <Slide direction={direction}>
        <div className="flex-1 h-[45vh] w-[50vh] overflow-hidden shadow-xl rounded-xl">
          <img
            src={imageSrc}
            className="w-full h-full object-cover hover:scale-105 duration-200 cursor-pointer"
            alt=""
          />
        </div>
      </Slide>
    </div>
  );
};

const ImageWithText = ({ imageSrc, address, text, direction }) => {
  return (
    <>
      <div className="p-3 gap-4 flex flex-col sm:items-center">
        <Slide direction={direction}>
          <div className="flex-1 h-[40vh] w-full sm:w-[50vh] overflow-hidden shadow-sm rounded-lg">
            <img
              src={imageSrc}
              className="w-full h-full object-cover hover:scale-105 duration-200 cursor-pointer"
              alt=""
            />
          </div>
        </Slide>
        <div>
          <p className="font-semibold text-xl text-center">{address}</p>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};

export { ImageWithText, ImageWithTextAnimated };
