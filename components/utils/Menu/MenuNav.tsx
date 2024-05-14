"use client";
import React from "react";
import { menuNavData } from "@/data/menuNav";
import { usePathname, useRouter } from "next/navigation";

interface MenuNavProps {
  openMenu: boolean;
}

const MenuNav: React.FC<MenuNavProps> = ({ openMenu }) => {
  const router = useRouter();
  const pathCurr = usePathname();
  return (
    <div className={`md:block ${openMenu ? "block " : "hidden"}`}>
      <ul
        className={` ${
          openMenu ? "block h-screen w-60 bg-white p-8 pt-8 text-xl" : "flex"
        } justify-between items-center gap-12 font-[500] text-[13px] cursor-pointer`}
      >
        {menuNavData?.map((item, index) => {
          return (
            <li
              className={`hover:scale-110 transition-all hover:font-bold hover:text-main py-2 ${
                item.link == pathCurr || item.path == pathCurr.split("/")[1]
                  ? "font-bold text-main scale-110"
                  : null
              }`}
              key={index}
              onClick={() => router.push(item.link)}
            >
              <span
                className={`${
                  (openMenu && item.link == pathCurr) ||
                  item.path == pathCurr.split("/")[1]
                    ? "ml-2"
                    : null
                } `}
              >
                {item.title}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MenuNav;
