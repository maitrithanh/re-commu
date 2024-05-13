import React from "react";
import Tag from "./Tag";
import { tagInterface } from "@/utils/type";

interface CateProps {
  nameCate: string;
  data: tagInterface[];
}

const Cate: React.FC<CateProps> = ({ nameCate, data }) => {
  return (
    <div className="my-2">
      <p className="font-semibold text-md">{nameCate}</p>
      <div className="flex md:flex-wrap gap-2 mt-2">
        {data.map((item: any, index) => {
          return (
            <div key={index}>
              <Tag nameTag={item.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cate;
