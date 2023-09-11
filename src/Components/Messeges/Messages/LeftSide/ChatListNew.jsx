import { Avatar, Box, Divider, IconButton } from "@mui/material";
import {
  ArchiveBox,
  CircleDashed,
  MagnifyingGlass,
  Stack,
} from "phosphor-react";
import React from "react";

const ChatListNew = () => {
  return (
    <>
      <div className=" h-screen md:w-80 bg-gray-400 shadow-inner overflow-scroll px-3">
        <div>
          <div className="flex flex-row justify-between items-center p-3">
            <h1 className="font-bold text-xl">Chats</h1>
            <IconButton>
              <CircleDashed></CircleDashed>
            </IconButton>
          </div>
          <div className="flex items-center gap-1 bg-gray-200 mx-3 rounded-md justify-center">
            <MagnifyingGlass size={20}></MagnifyingGlass>
            <input
              className="p-2 bg-gray-200"
              type="Search"
              placeholder="search"
            />
          </div>
          <div className="flex flex-row items-center gap-2 p-2">
            <ArchiveBox size={25}></ArchiveBox>
            <button>Archive</button>
          </div>
          <Divider></Divider>
        </div>
        {/* Pinned Chat */}
        <div className="flex flex-col gap-3">
          <h1 className="font-bold ml-1">Pinned</h1>
          <Divider></Divider>
          <div className="w-full rounded-md bg-white h-[60px] flex   items-center justify-between p-1">
            <div className="flex items-center gap-4">
              <div>
                <Avatar
                  src={"https://i.ibb.co/fMMzzbY/Ahaduzzaman.jpg"}
                ></Avatar>
              </div>
              <div>
                <h1>Ahaduzzaman</h1>
                <p>You: Thank you.</p>
              </div>
            </div>
            <div>
              <p>9:37</p>
              <p className="bg-green-500 rounded-full font-bold flex items-center justify-center">
                2
              </p>
            </div>
          </div>

          <div className="w-full rounded-md bg-white h-[60px] flex   items-center justify-between p-1">
            <div className="flex items-center gap-4">
              <div>
                <Avatar
                  src={"https://i.ibb.co/fMMzzbY/Ahaduzzaman.jpg"}
                ></Avatar>
              </div>
              <div>
                <h1>Ahaduzzaman</h1>
                <p>You: Thank you.</p>
              </div>
            </div>
            <div>
              <p>9:37</p>
              <p className="bg-green-500 rounded-full font-bold flex items-center justify-center">
                2
              </p>
            </div>
          </div>
        </div>
          {/* All Chats list */}
        <div className="flex flex-col gap-3 ">
          <h1 className="font-bold ml-1 pt-3">All Chats</h1>
          <Divider></Divider>

          <div className="w-full rounded-md bg-white h-[60px] flex   items-center justify-between p-1">
            <div className="flex items-center gap-4">
              <div>
                <Avatar
                  src={"https://i.ibb.co/fMMzzbY/Ahaduzzaman.jpg"}
                ></Avatar>
              </div>
              <div>
                <h1>Ahaduzzaman</h1>
                <p>You: Thank you.</p>
              </div>
            </div>
            <div>
              <p>9:37</p>
              <p className="bg-green-500 rounded-full font-bold flex items-center justify-center">
                2
              </p>
            </div>
          </div>

          <div className="w-full rounded-md bg-white h-[60px] flex   items-center justify-between p-1">
            <div className="flex items-center gap-4">
              <div>
                <Avatar
                  src={"https://i.ibb.co/fMMzzbY/Ahaduzzaman.jpg"}
                ></Avatar>
              </div>
              <div>
                <h1>Ahaduzzaman</h1>
                <p>You: Thank you.</p>
              </div>
            </div>
            <div>
              <p>9:37</p>
              <p className="bg-green-500 rounded-full font-bold flex items-center justify-center">
                2
              </p>
            </div>
          </div>

          <div className="w-full rounded-md bg-white h-[60px] flex   items-center justify-between p-1">
            <div className="flex items-center gap-4">
              <div>
                <Avatar
                  src={"https://i.ibb.co/fMMzzbY/Ahaduzzaman.jpg"}
                ></Avatar>
              </div>
              <div>
                <h1>Ahaduzzaman</h1>
                <p>You: Thank you.</p>
              </div>
            </div>
            <div>
              <p>9:37</p>
              <p className="bg-green-500 rounded-full font-bold flex items-center justify-center">
                2
              </p>
            </div>
          </div>

          <div className="w-full rounded-md bg-white h-[60px] flex   items-center justify-between p-1">
            <div className="flex items-center gap-4">
              <div>
                <Avatar
                  src={"https://i.ibb.co/fMMzzbY/Ahaduzzaman.jpg"}
                ></Avatar>
              </div>
              <div>
                <h1>Ahaduzzaman</h1>
                <p>You: Thank you.</p>
              </div>
            </div>
            <div>
              <p>9:37</p>
              <p className="bg-green-500 rounded-full font-bold flex items-center justify-center">
                2
              </p>
            </div>
          </div>
          <div className="w-full rounded-md bg-white h-[60px] flex   items-center justify-between p-1">
            <div className="flex items-center gap-4">
              <div>
                <Avatar
                  src={"https://i.ibb.co/fMMzzbY/Ahaduzzaman.jpg"}
                ></Avatar>
              </div>
              <div>
                <h1>Ahaduzzaman</h1>
                <p>You: Thank you.</p>
              </div>
            </div>
            <div>
              <p>9:37</p>
              <p className="bg-green-500 rounded-full font-bold flex items-center justify-center">
                2
              </p>
            </div>
          </div>
          <div className="w-full rounded-md bg-white h-[60px] flex   items-center justify-between p-1">
            <div className="flex items-center gap-4">
              <div>
                <Avatar
                  src={"https://i.ibb.co/fMMzzbY/Ahaduzzaman.jpg"}
                ></Avatar>
              </div>
              <div>
                <h1>Ahaduzzaman</h1>
                <p>You: Thank you.</p>
              </div>
            </div>
            <div>
              <p>9:37</p>
              <p className="bg-green-500 rounded-full font-bold flex items-center justify-center">
                2
              </p>
            </div>
          </div>

          <div className="w-full rounded-md bg-white h-[60px] flex   items-center justify-between p-1">
            <div className="flex items-center gap-4">
              <div>
                <Avatar
                  src={"https://i.ibb.co/fMMzzbY/Ahaduzzaman.jpg"}
                ></Avatar>
              </div>
              <div>
                <h1>Ahaduzzaman</h1>
                <p>You: Thank you.</p>
              </div>
            </div>
            <div>
              <p>9:37</p>
              <p className="bg-green-500 rounded-full font-bold flex items-center justify-center">
                2
              </p>
            </div>
          </div>
          <div className="w-full rounded-md bg-white h-[60px] flex   items-center justify-between p-1">
            <div className="flex items-center gap-4">
              <div>
                <Avatar
                  src={"https://i.ibb.co/fMMzzbY/Ahaduzzaman.jpg"}
                ></Avatar>
              </div>
              <div>
                <h1>Ahaduzzaman</h1>
                <p>You: Thank you.</p>
              </div>
            </div>
            <div>
              <p>9:37</p>
              <p className="bg-green-500 rounded-full font-bold flex items-center justify-center">
                2
              </p>
            </div>
          </div>
          <div className="w-full rounded-md bg-white h-[60px] flex   items-center justify-between p-1">
            <div className="flex items-center gap-4">
              <div>
                <Avatar
                  src={"https://i.ibb.co/fMMzzbY/Ahaduzzaman.jpg"}
                ></Avatar>
              </div>
              <div>
                <h1>Ahaduzzaman</h1>
                <p>You: Thank you.</p>
              </div>
            </div>
            <div>
              <p>9:37</p>
              <p className="bg-green-500 rounded-full font-bold flex items-center justify-center">
                2
              </p>
            </div>
          </div>
          <div className="w-full rounded-md bg-white h-[60px] flex   items-center justify-between p-1">
            <div className="flex items-center gap-4">
              <div>
                <Avatar
                  src={"https://i.ibb.co/fMMzzbY/Ahaduzzaman.jpg"}
                ></Avatar>
              </div>
              <div>
                <h1>Ahaduzzaman</h1>
                <p>You: Thank you.</p>
              </div>
            </div>
            <div>
              <p>9:37</p>
              <p className="bg-green-500 rounded-full font-bold flex items-center justify-center">
                2
              </p>
            </div>
          </div>
          <div className="w-full rounded-md bg-white h-[60px] flex   items-center justify-between p-1">
            <div className="flex items-center gap-4">
              <div>
                <Avatar
                  src={"https://i.ibb.co/fMMzzbY/Ahaduzzaman.jpg"}
                ></Avatar>
              </div>
              <div>
                <h1>Ahaduzzaman</h1>
                <p>You: Thank you.</p>
              </div>
            </div>
            <div>
              <p>9:37</p>
              <p className="bg-green-500 rounded-full font-bold flex items-center justify-center">
                2
              </p>
            </div>
          </div>
          <div className="w-full rounded-md bg-white h-[60px] flex   items-center justify-between p-1">
            <div className="flex items-center gap-4">
              <div>
                <Avatar
                  src={"https://i.ibb.co/fMMzzbY/Ahaduzzaman.jpg"}
                ></Avatar>
              </div>
              <div>
                <h1>Ahaduzzaman</h1>
                <p>You: Thank you.</p>
              </div>
            </div>
            <div>
              <p>9:37</p>
              <p className="bg-green-500 rounded-full font-bold flex items-center justify-center">
                2
              </p>
            </div>
          </div>
          <div className="w-full rounded-md bg-white h-[60px] flex   items-center justify-between p-1">
            <div className="flex items-center gap-4">
              <div>
                <Avatar
                  src={"https://i.ibb.co/fMMzzbY/Ahaduzzaman.jpg"}
                ></Avatar>
              </div>
              <div>
                <h1>Ahaduzzaman</h1>
                <p>You: Thank you.</p>
              </div>
            </div>
            <div>
              <p>9:37</p>
              <p className="bg-green-500 rounded-full font-bold flex items-center justify-center">
                2
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatListNew;
