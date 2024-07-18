import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowLeft = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={props.width || 24}
    height={props.height || 24}
    ref={ref}
    {...props}>
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M20.708 11H7.13l5.042-5.021-1.411-1.417L3.291 12l7.47 7.438 1.411-1.418L7.128 13h13.58z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowLeft);
const Memo = memo(ForwardRef);
export default Memo;
