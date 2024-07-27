import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgImgInputLabel = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 60 60"
    width={props.width || 24}
    height={props.height || 24}
    ref={ref}
    {...props}>
    <rect
      width={60}
      height={60}
      fill="#D9D9D9"
      rx={30}
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M38.037 38.199H22.118l-.197-.403 3.67-4.744.357-.04 2.491 2.084 3.825-5.37.41.003 5.569 8.078zM26.646 24.27a2.31 2.31 0 0 1 2.307 2.305 2.31 2.31 0 0 1-2.307 2.306 2.31 2.31 0 0 1-2.304-2.306 2.307 2.307 0 0 1 2.304-2.305M20.25 39.75h19.5v-19.5h-19.5z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgImgInputLabel);
const Memo = memo(ForwardRef);
export default Memo;
