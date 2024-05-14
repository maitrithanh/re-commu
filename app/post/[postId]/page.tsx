"use client";
import CardPostRelated from "@/components/Post/CardPostRelated";
import Cate from "@/components/Post/Cate";
import Button from "@/components/utils/Button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CiBookmark, CiHeart } from "react-icons/ci";
import { FcBarChart } from "react-icons/fc";
import { IoHeartSharp } from "react-icons/io5";
import { postData } from "@/data/post";
import Link from "next/link";

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

  useEffect(() => {
    const commentEl = document.getElementById("commentSection");
    const infomationPost = document.getElementById("infomationPostTag");
    const commentPost = document.getElementById("commentPostTag");

    const isIntoView = (el: any) => {
      const rect = el.getBoundingClientRect();
      return rect.bottom <= window.innerHeight;
    };

    window.addEventListener("scroll", () => {
      if (isIntoView(commentEl)) {
        commentPost?.classList.add("border-b-2");
        commentPost?.classList.add("border-slate-800");
        infomationPost?.classList.remove("border-b-2");
        infomationPost?.classList.remove("border-slate-800");
      } else {
        infomationPost?.classList.add("border-b-2");
        infomationPost?.classList.add("border-slate-800");
        commentPost?.classList.remove("border-b-2");
        commentPost?.classList.remove("border-slate-800");
      }
    });
  }, []);

  return (
    <main className="bg-white ">
      <div className="w-full lg:hidden flex justify-center">
        <Image
          className="w-full"
          src={postData.thumbnail}
          quality={100}
          width={1920}
          height={1080}
          alt="Thumbnail"
        />
      </div>
      <div className="lg:mx-[104px] py-10 px-8 h-full">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 justify-center items-center max-h-[622px]">
          <div className="flex lg:justify-center justify-start items-center">
            <div>
              {/* info user */}
              <div className="flex items-center gap-2">
                <div className="relative w-[32px] h-fit border rounded-full">
                  <Image
                    src={postData.author.avatar}
                    width={32}
                    height={32}
                    alt="avatar"
                  />
                </div>
                <div>
                  <p className="text-xs text-black">{postData.author.name}</p>
                </div>
              </div>
              {/* title */}
              <div className="my-2">
                <h1 className="text-2xl font-bold">{postData.title}</h1>
              </div>
              {/* category */}
              <div className="flex gap-4 items-center text-sm text-gray mb-6">
                <p className="">{postData.postCategory}</p>
                &#x2022;
                <div>
                  <div className="flex gap-2 text-gray-500">
                    <div className="flex items-center gap-[2px]">
                      <span className="text-rose-600">
                        <IoHeartSharp />
                      </span>
                      {postData.analytics.favourite}
                    </div>
                    &#x2022;
                    <div className="flex items-center gap-[2px]">
                      <span>
                        <FcBarChart />
                      </span>
                      {postData.analytics.view} lượt xem
                    </div>
                  </div>
                </div>
              </div>
              {/* action */}
              <div className="flex gap-2">
                <Button
                  name="Mua sản phẩm"
                  onclick={() => alert(`Mua tại: ${postData.linkAffilate}`)}
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
          {/* Thumnail show when view Desktop */}
          <div className="w-full col-span-2 lg:flex hidden justify-center">
            <Image
              className="border rounded-md w-full max-w-[788px] max-h-[444px]"
              src={postData.thumbnail}
              quality={100}
              width={1920}
              height={1080}
              alt="Thumbnail"
            />
          </div>
        </div>
      </div>

      <div className="px-8 bg-white sticky top-[48px] z-10 shadow-sm">
        <div className="lg:mx-[104px] cursor-pointer lg:flex justify-between items-center">
          <div>
            <div
              className={`pt-2 transition-all ${
                isTop ? "visible opacity-100 h-fit" : "invisible opacity-0 h-0"
              }`}
            >
              {/* title and button action when scroll sticky */}
              <h1 className="text-2xl font-bold">{postData.title}</h1>
            </div>
            <div className="flex gap-4 ">
              <Link href={"#infomationSection"}>
                <p
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  id="infomationPostTag"
                  className="border-b-2 border-slate-800 py-2"
                >
                  Thông tin
                </p>
              </Link>
              <Link href={"#commentSection"}>
                <p id="commentPostTag" className="py-2">
                  Bình luận
                </p>
              </Link>
            </div>
          </div>
          <div className="py-2">
            <div
              className={`flex gap-2 transition-all duration-300 ${
                isTop ? "block opacity-100" : "hidden opacity-0"
              }`}
            >
              <Button
                name="Mua sản phẩm"
                onclick={() => alert(`Mua tại: ${postData.linkAffilate}`)}
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
            <div className="mb-4 border-b pb-8 text-justify">
              {postData.content}
            </div>
            {/* category */}
            <div className="max-w-[390px] w-full lg:hidden block pb-2">
              <Cate nameCate="Danh mục" data={postData.category} />
              <Cate nameCate="Thẻ" data={postData.tag} />
            </div>
            {/* related */}
            <div className="my-4">
              <p className="font-semibold text-md">Liên quan</p>
              <div className="lg:grid lg:grid-cols-3 flex overflow-auto w-full gap-6 border-b mb-4 pb-4">
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
                    <Button
                      name={"Đăng bình luận"}
                      onclick={() => {
                        alert("Đăng bình luận");
                      }}
                      custom="px-4 py-2 hover:opacity-80"
                    />
                  </div>
                </div>
                {/* all comment */}
                <div id="commentSection">
                  <p className="text-sm my-2 mt-4">
                    {postData.comment.length} bình luận
                  </p>
                  {postData.comment.map((item, index) => {
                    return (
                      <div key={index} className="mb-2 pb-4 border-b">
                        <div className="flex items-center gap-2">
                          <div className="relative w-[32px] h-fit border rounded-full">
                            <Image
                              src={item.userComment.avatar}
                              width={32}
                              height={32}
                              alt="avatar"
                            />
                          </div>
                          <div className="my-2">
                            <p className="text-sm font-semibold">
                              {item.userComment.name}
                            </p>
                            <p className="text-xs text-gray">
                              @{item.userComment.userName}
                            </p>
                          </div>
                        </div>
                        <div className="ml-10 text-sm">{item.content}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* show when view desktop */}
          <div className="lg:w-1/6 w-full lg:block hidden pb-2">
            <Cate nameCate="Danh mục" data={postData.category} />
            <Cate nameCate="Thẻ" data={postData.tag} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default DetailPostPage;
