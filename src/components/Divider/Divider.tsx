import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils.ts";

interface DividerProps extends ComponentPropsWithoutRef<"div"> {
  size?: 0 | 0.5 | 1 | 2 | 4;
}

const Divider = ({ size = 1, ...props }: DividerProps) => {
  const borderSizeStyle = () => {
    switch (size) {
      case 0:
        return "border-0";
      case 0.5:
        return "border-t";
      case 1:
        return "border";
      case 2:
        return "border-2";
      case 4:
        return "border-4";
    }
  };
  const { className: propsClassName, ...rest } = props;
  return (
    <div
      className={cn(
        "w-full h-0.5 border-gray-800",
        borderSizeStyle(),
        propsClassName
      )}
      {...rest}
    />
  );
};

export default Divider;
