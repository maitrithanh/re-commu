"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FilterPost = () => {
  return (
    <>
      <div className="bg-white  z-10 sticky top-[48px]">
        <div className="flex justify-between items-center gap-2">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Tất cả nội dung" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {/* <SelectLabel>Fruits</SelectLabel> */}
                {/* <SelectItem value="apple">Săn sale</SelectItem> */}
                <SelectItem value="pineapple">Tin tức</SelectItem>
                <SelectItem value="banana">Săn sale</SelectItem>
                <SelectItem value="grapes">Game </SelectItem>
                <SelectItem value="blueberry">Ứng dụng</SelectItem>
                <SelectItem value="blueberry">Phần mềm</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sắp xếp" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {/* <SelectLabel>Fruits</SelectLabel> */}
                {/* <SelectItem value="apple">Săn sale</SelectItem> */}
                <SelectItem value="grapes">Phổ biến nhất </SelectItem>
                <SelectItem value="pineapple">Mới nhất</SelectItem>
                <SelectItem value="banana">Cũ nhất</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </>
  );
};

export default FilterPost;
