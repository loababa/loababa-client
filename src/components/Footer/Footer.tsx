import { Calendar, Home, UserMono } from "@/components/icons";
import { useLocation, useNavigate } from "react-router-dom";
import ROUTE_PATH from "@/constants/routePath.ts";

const footerItems = [
  {
    icon: Home,
    label: "홈",
    path: ROUTE_PATH.HOME
  },
  {
    icon: Calendar,
    label: "상담",
    path: ROUTE_PATH.CONSULTING
  },
  {
    icon: UserMono,
    label: "마이페이지",
    path: ROUTE_PATH.MYPAGE
  }
];

const Footer = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <footer className="w-full h-[82px] bg-gray-950 flex justify-between items-center rounded-tl-[20px] rounded-tr-[20px] pl-[45px] pr-[45px] pb-[35px]">
      {footerItems.map(({ icon: Icon, label, path }, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center cursor-pointer"
          onClick={() => navigate(path)}>
          <Icon color={pathname === path ? "#00CC7E" : ""} />
          <span
            className={`text-[10px] ${pathname === path ? "text-gray-400" : "text-gray-700"}`}>
            {label}
          </span>
        </div>
      ))}
    </footer>
  );
};

export default Footer;
