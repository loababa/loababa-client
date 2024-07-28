import { clsx } from "clsx";

const Tab = ({
  label,
  isActive,
  onClick
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) => (
  <div
    className={clsx(
      "flex items-center justify-center w-1/3 border-b-2 pb-[6px] cursor-pointer",
      isActive ? "border-green-500" : "border-gray-900"
    )}
    onClick={onClick}>
    <span
      className={clsx("text-hl", isActive ? "text-white" : "text-gray-700")}>
      {label}
    </span>
  </div>
);

export default Tab;
