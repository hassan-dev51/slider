import { Ibuttons } from "@/interface";
import Link from "next/link";

const HowerGrowButton = (props: Ibuttons) => {
  return (
    <button className="cursor-pointer h-14 px-10 text-sm bg-white rounded-sm hover:transform hover:scale-105 duration-300 text-[#353839]">
      <Link href={props.href}>{props.text}</Link>
    </button>
  );
};

export default HowerGrowButton;
