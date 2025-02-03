import { StarFour } from "@phosphor-icons/react";

function FerramentasFront() {
  return (
    <ul
      role="list"
      className="marker:text-secondary list-inside pl-5 space-y- my-2"
    >
      <li className="flex items-center">
        <StarFour size={12} weight="fill" className="text-primary mr-2" />
        React
      </li>
      <li className="flex items-center">
        <StarFour size={12} weight="fill" className="text-secondary mr-2" />
        Vite
      </li>
      <li className="flex items-center">
        <StarFour size={12} weight="fill" className="text-accent mr-2" />
        TypeScript
      </li>
      <li className="flex items-center">
        <StarFour size={12} weight="fill" className="text-primary mr-2" />
        TailwindCSS
      </li>
      <li className="flex items-center">
        <StarFour size={12} weight="fill" className="text-secondary mr-2" />
        DaisyUI
      </li>
      <li className="flex items-center">
        <StarFour size={12} weight="fill" className="text-accent mr-2" />
        Vercel - Deploy
      </li>
    </ul>
  );
}

export default FerramentasFront;
