import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgKakaoLogo = (
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
      fill={props.color || `#000000`}
      fillRule="evenodd"
      d="M12 .8C5.372.8 0 4.95 0 10.07c0 3.183 2.078 5.99 5.242 7.66l-1.331 4.863c-.118.43.374.772.751.523l5.836-3.852q.738.073 1.502.075c6.627 0 12-4.15 12-9.27S18.627.8 12 .8"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgKakaoLogo);
const Memo = memo(ForwardRef);
export default Memo;
