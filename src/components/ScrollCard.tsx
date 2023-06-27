"use client";
import { Media, User } from "@prisma/client";

import React from "react";
import { Button } from "./Button";

export default function ScrollCard({
  media,
  user,
  BookMark,
}: {
  media: Media & { users: User[] };
  user: User;
  BookMark: (media: FormData) => Promise<void>;
}) {
  return (
    <div className=" snap-start snap-always ">
      <div
        className="flex h-[140px] w-[240px] flex-col items-center rounded-lg  bg-cover bg-local bg-center bg-repeat   md:h-[230px] md:w-[470px]"
        style={{
          backgroundImage: `url(https://zymkhjvldwzznxshgeet.supabase.co/storage/v1/object/public/thumbnail/${media.id}.jpg)`,
        }}
      >
        <div className=" group/play h-full w-full hover:rounded-lg hover:bg-black/50">
          <div className="flex h-full w-full flex-col justify-between ">
            <div className=" flex h-1/3    w-full justify-end bg-transparent p-2 md:px-6 md:py-4">
              <div className=" ">
                <form
                  action={BookMark}
                  className="group flex h-8 w-8 justify-center rounded-full bg-[#10141E]/50 hover:bg-white"
                >
                  <input
                    type="text"
                    name="id"
                    id="id"
                    hidden
                    defaultValue={media.id}
                  />
                  <Button>
                    {media.users[0]?.id === user.id ? (
                      <svg
                        width="12"
                        height="14"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="group-hover:fill-[#10141E]"
                          d="M10.61 0c.14 0 .273.028.4.083a1.03 1.03 0 0 1 .657.953v11.928a1.03 1.03 0 0 1-.656.953c-.116.05-.25.074-.402.074-.291 0-.543-.099-.756-.296L5.833 9.77l-4.02 3.924c-.218.203-.47.305-.756.305a.995.995 0 0 1-.4-.083A1.03 1.03 0 0 1 0 12.964V1.036A1.03 1.03 0 0 1 .656.083.995.995 0 0 1 1.057 0h9.552Z"
                          fill="#FFF"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="12"
                        height="14"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="group-hover:stroke-[#10141E]"
                          d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
                          stroke="#FFF"
                          strokeWidth="1.5"
                          fill="none"
                        />
                      </svg>
                    )}
                  </Button>
                </form>
              </div>
            </div>
            <div className=" invisible flex h-1/3  w-full items-center justify-center  group-hover/play:visible">
              <button className=" flex  items-center justify-center md:h-12  md:w-28 md:flex-row md:space-x-3  md:rounded-[28.5px] md:bg-white/25">
                <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z"
                    fill="#FFF"
                  />
                </svg>
                <h1 className="hidden text-white md:inline md:text-lg">Play</h1>
              </button>
            </div>
            <div className=" h-1/3  w-full">
              <div className="h-full w-full rounded-lg bg-gradient-to-t from-black/75 to-transparent">
                <div className="flex h-full w-full flex-col justify-end space-y-2 p-4 md:p-6">
                  <div>
                    <div className="flex flex-row items-center space-x-2">
                      <h1 className=" text-xs font-light text-white/75 md:text-base">
                        {media.year}
                      </h1>
                      <h1 className="text-xs font-light text-white/75 md:text-base">
                        •
                      </h1>
                      <h1 className="text-xs font-light text-white/75 md:text-base">
                        {media.category === "Movie" ? (
                          <div className="flex flex-row items-center space-x-2">
                            <svg
                              width="12"
                              height="12"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2ZM1.2 6.6h1.2v1.2H1.2V6.6Zm9.6-1.2H9.6V4.2h1.2v1.2ZM9.6 6.6h1.2v1.2H9.6V6.6Zm1.2-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM1.644 1.2H2.4v1.2H1.2v-.756a.444.444 0 0 1 .444-.444ZM1.2 10.356V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.6 0a.444.444 0 0 1-.444.444H9.6V9.6h1.2v.756Z"
                                fill="#FFF"
                                opacity=".75"
                              />
                            </svg>

                            <span className="text-xs font-light text-white/75 md:text-base">
                              Movie
                            </span>
                          </div>
                        ) : (
                          <div className="flex flex-row items-center space-x-2">
                            <svg
                              width="12"
                              height="12"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 2.689H5.448L7.068.722 6.132 0 4.2 2.345 2.268.017l-.936.705 1.62 1.967H0V12h12V2.689Zm-4.8 8.147h-6V3.853h6v6.983Zm3-2.328H9V7.344h1.2v1.164Zm0-2.328H9V5.016h1.2V6.18Z"
                                fill="#FFF"
                                opacity=".75"
                              />
                            </svg>
                            <span className="text-xs font-light text-white/75 md:text-base">
                              TV Show
                            </span>
                          </div>
                        )}
                      </h1>
                      <h1 className="text-xs font-light text-white/75 md:text-base">
                        •
                      </h1>
                      <h1 className="text-xs font-light text-white/75 md:text-base">
                        {media.rating}
                      </h1>
                    </div>
                  </div>
                  <h1 className=" text-base font-medium text-white md:text-2xl">
                    {media.title}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
