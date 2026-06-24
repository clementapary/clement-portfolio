import React from "react";
import Block from "./Block";
const services = [1, 2, 3, 4, 5, 6, 7];
export default function ServiceList() {
  return (
    <Block className="space-y-4">
      <h1 className="text-2xl font-bold">Our Services</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
        enim.
      </p>
      <div className="grid grid-cols-3 gap-4">
        {services.map((item, i) => (
          <Block key={i}>Business websites</Block>
        ))}
      </div>
    </Block>
  );
}
