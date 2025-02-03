import { StarFour } from "@phosphor-icons/react";

function FerramentasBack() {
  return (
    <ul
      role="list"
      className="marker:text-secondary list-inside pl-5 space-y- my-2"
    >
      <li className="flex items-center">
        <StarFour size={12} weight="fill" className="text-primary mr-2" />
        Java
      </li>
      <li className="flex items-center">
        <StarFour size={12} weight="fill" className="text-secondary mr-2" />
        SpringBoot
      </li>{" "}
      <li className="flex items-center">
        <StarFour size={12} weight="fill" className="text-accent mr-2" />
        MySQL e PostgreSQL
      </li>{" "}
      <li className="flex items-center">
        <StarFour size={12} weight="fill" className="text-primary mr-2" />
        Render - Deploy
      </li>
    </ul>
  );
}

export default FerramentasBack;
