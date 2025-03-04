import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { RiUserCommunityFill } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { GrUserManager } from "react-icons/gr";

export const sidebarTop = [
  { id: 1, icon: BiSolidMessageSquareDetail, behave: "chats" },
  { id: 2, icon: HiOutlineStatusOnline, behave: "status" },
  { id: 3, icon: RiUserCommunityFill, behave: "community" },
];

export const sidebarBottom = [
  { id: 4, icon: IoSettingsOutline, behave: "settings" },
  { id: 5, icon: GrUserManager, behave: "users" },
];