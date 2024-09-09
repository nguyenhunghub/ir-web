import React from "react";
import NavIcon from "../nav-icon";
import "./nav-item.css";
import { cn } from "~/lib/utils";

export default function NavItem({ title = "", active = false }) {
  return (
    <li className="h-full hover:cursor-pointer hover:bg-white/5">
      <div className={cn("h-1 w-full", active ? "bg-gradient" : "")}></div>
      <div className="group flex h-full items-center justify-center px-8">
        {active && (
          <div className="mr-3">
            <NavIcon />
          </div>
        )}
        <p className="font-outfit">{title}</p>
      </div>
    </li>
  );
}
