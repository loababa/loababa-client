import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHome = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={props.width || 24}
    height={props.height || 24}
    ref={ref}
    {...props}>
    <path
      fill="#424242"
      fillRule="evenodd"
      d="M11.25 17.107h1.5v-4.909h-1.5zM12 2.006.876 11.538l.977 1.139 1.74-1.491v10.808H20.41V11.188l1.737 1.489.977-1.139z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgHome);
const Memo = memo(ForwardRef);
export default Memo;
