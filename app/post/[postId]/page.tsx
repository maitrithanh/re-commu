"use client";
import CardPostRelated from "@/components/Post/CardPostRelated";
import Cate from "@/components/Post/Cate";
import Tag from "@/components/Post/Tag";
import Button from "@/components/utils/Button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CiBookmark, CiHeart } from "react-icons/ci";
import { FcBarChart, FcLink } from "react-icons/fc";
import { IoHeartSharp } from "react-icons/io5";

const DetailPostPage = () => {
  const [isTop, setIsTop] = useState(false);

  const scrollHandle = () => {
    if (window.scrollY >= 346) {
      setIsTop(true);
    } else {
      setIsTop(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHandle);
    return () => {
      window.addEventListener("scroll", scrollHandle);
    };
  }, []);

  return (
    <main className="bg-white ">
      <div className="lg:mx-[104px] py-10 px-8 h-full">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 justify-center items-center max-h-[622px]">
          <div className="flex lg:justify-center justify-start items-center">
            <div>
              {/* info user */}
              <div className="flex items-center gap-2">
                <div className="relative w-[32px] h-fit border rounded-full">
                  <Image
                    src={"/avatar/avatar.webp"}
                    width={32}
                    height={32}
                    alt="avatar"
                  />
                </div>
                <div>
                  <p className="text-xs text-black">Mai Trí Thành</p>
                </div>
              </div>
              {/* title */}
              <div className="my-2">
                <h1 className="text-2xl font-bold">
                  Financial Dashboard – Apple’s Vision Pro
                </h1>
              </div>
              {/* category */}
              <div className="flex gap-4 items-center text-sm text-gray mb-6">
                <p className="">Săn sale</p>
                &#x2022;
                <div>
                  <div className="flex gap-2 text-gray-500">
                    <div className="flex items-center gap-[2px]">
                      <span className="text-rose-600">
                        <IoHeartSharp />
                      </span>
                      100
                    </div>
                    &#x2022;
                    <div className="flex items-center gap-[2px]">
                      <span>
                        <FcBarChart />
                      </span>
                      1000 lượt xem
                    </div>
                  </div>
                </div>
              </div>
              {/* action */}
              <div className="flex gap-2">
                <Button
                  name="Mua sản phẩm"
                  onclick={() => alert("Mua sàn S")}
                  custom="py-[12px] px-[16px] text-lg font-bold"
                />
                <Button
                  name={<CiHeart size={20} />}
                  outline
                  onclick={() => alert("Yêu thích")}
                  custom="py-[10px] px-[12px] text-slate-900 border-slate-300 font-bold"
                />

                <Button
                  name={<CiBookmark size={20} />}
                  outline
                  onclick={() => alert("Lưu lại xem sau")}
                  custom="py-[10px] px-[12px] text-slate-900 border-slate-300 font-bold"
                />
              </div>
            </div>
          </div>
          <div className="w-full col-span-2 flex justify-center">
            <Image
              className="border rounded-md w-full max-w-[788px] max-h-[444px]"
              src={"/Thumb.webp"}
              quality={100}
              width={1920}
              height={1080}
              alt="Thumbnail"
            />
          </div>
        </div>
      </div>

      <div className="px-8 bg-white sticky top-[48px] z-10 shadow-sm ">
        <div className="lg:mx-[104px] cursor-pointer flex justify-between items-center">
          <div>
            <div
              className={`pt-2 transition-all ${
                isTop ? "block opacity-100" : "hidden opacity-0"
              }`}
            >
              <h1 className="text-2xl font-bold">
                Financial Dashboard – Apple’s Vision Pro
              </h1>
            </div>
            <div className="flex gap-4 ">
              <p className="border-b-2 border-slate-800 py-2">Thông tin</p>
              <p className="py-2">Bình luận</p>
            </div>
          </div>
          <div>
            <div
              className={`flex gap-2 transition-all duration-300 ${
                isTop ? "block opacity-100" : "hidden opacity-0"
              }`}
            >
              <Button
                name="Mua sản phẩm"
                onclick={() => alert("Mua sàn S")}
                custom="py-[12px] px-[16px] text-lg font-bold"
              />
              <Button
                name={<CiHeart size={20} />}
                outline
                onclick={() => alert("Yêu thích")}
                custom="py-[10px] px-[12px] text-slate-900 border-slate-300 font-bold"
              />

              <Button
                name={<CiBookmark size={20} />}
                outline
                onclick={() => alert("Lưu lại xem sau")}
                custom="py-[10px] px-[12px] text-slate-900 border-slate-300 font-bold"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="lg:mx-[104px] p-8 ">
        <div className="lg:flex gap-8">
          <div className="lg:w-3/4">
            <div className="mb-4 border-b pb-8">
              An App Shortcut is an easily understood, frequently used task or
              piece of content from your app or game that you provide to the
              system for people to use in a variety of contexts. If you have
              requests, find bugs, or have other feedback for us, please use
              Feedback Assistant. Select Developer Tools Apple Design Resources.
              Important: Make sure to install the latest version of SF Symbols
              before using this library.
            </div>
            {/* category */}
            <div className="lg:w-1/6 lg:hidden block w-full pb-2">
              <Cate
                nameCate="Danh mục"
                data={[{ name: "Gia dụng" }, { name: "Săn sale" }]}
              />
              <Cate
                nameCate="Thẻ"
                data={[
                  { name: "App" },
                  { name: "Apple" },
                  { name: "components" },
                  { name: "ios" },
                  { name: "ios 17" },
                  { name: "Mobile" },
                ]}
              />
            </div>
            {/* related */}
            <div className="my-4">
              <p className="font-semibold text-md">Liên quan</p>
              <div className="grid lg:grid-cols-3 grid-cols-1 w-full gap-6 border-b mb-4 pb-4">
                <CardPostRelated />
                <CardPostRelated />
                <CardPostRelated />
              </div>
              <div>
                {/* comment */}
                <div className="relative border rounded-md p-2 w-full">
                  <div className="flex w-full">
                    <div className="relative w-[32px] h-fit border rounded-full">
                      <Image
                        src={"/avatar/avatar.webp"}
                        width={32}
                        height={32}
                        alt="avatar"
                      />
                    </div>
                    <div className="p-1 w-full">
                      <textarea
                        className="w-full p-1 hover:outline-none hover:bottom-0 focus-within:outline-none"
                        name="comment"
                        placeholder="Thêm một bình luận"
                        id=""
                      ></textarea>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button name={"Đăng bài"} onclick={() => {}} />
                  </div>
                </div>
                {/* all comment */}
                <div>
                  <p className="text-sm my-2 mt-4">1 bình luận</p>
                  <div className="mb-2 pb-4 border-b">
                    <div className="flex items-center gap-2">
                      <div className="relative w-[32px] h-fit border rounded-full">
                        <Image
                          src={"/avatar/avatar.webp"}
                          width={32}
                          height={32}
                          alt="avatar"
                        />
                      </div>
                      <div className="my-2">
                        <p className="text-sm font-semibold">Mai Tri Thanh</p>
                        <p className="text-xs text-gray">@maitrithanh</p>
                      </div>
                    </div>
                    <div className="ml-10 text-sm">
                      Much appreciated. This will go into my free iOS 17 costume
                      design system.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/6 w-full lg:block hidden pb-2">
            <Cate
              nameCate="Danh mục"
              data={[{ name: "Gia dụng" }, { name: "Săn sale" }]}
            />
            <Cate
              nameCate="Thẻ"
              data={[
                { name: "App" },
                { name: "Apple" },
                { name: "components" },
                { name: "ios" },
                { name: "ios 17" },
                { name: "Mobile" },
              ]}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default DetailPostPage;
