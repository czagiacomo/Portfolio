import { StarFour } from "@phosphor-icons/react";
import React from "react";

function FerramentasDeploy() {
  return (
    <ul
      role="list"
      className="marker:text-secondary list-inside pl-5 space-y- my-2"
    >
      <li className="flex items-center">
        <StarFour size={12} weight="fill" className="text-primary mr-2" />
        Render
      </li>
      <li className="flex items-center">
        <StarFour size={12} weight="fill" className="text-secondary mr-2" />
        Vercel
      </li>
    </ul>
  );
}

export default FerramentasDeploy;
