import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCheckCircleGreen = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 36 36"
    width={props.width || 24}
    height={props.height || 24}
    ref={ref}
    {...props}>
    <rect
      width={36}
      height={36}
      fill="#4ADE80"
      rx={18}
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M9 17.297 15.816 24 27 13"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCheckCircleGreen);
const Memo = memo(ForwardRef);
export default Memo;
