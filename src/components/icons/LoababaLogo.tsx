import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgLoababaLogo = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 50 50"
    width={props.width || 24}
    height={props.height || 24}
    ref={ref}
    {...props}>
    <rect
      width={50}
      height={50}
      fill={props.color || `#000000`}
      rx={10}
    />
    <path
      fill="#00CC7E"
      d="M30 32V20H14v12zM18 36v-4h-4v4zM14 40v-4h-4v4zM33 21v-9h3v9z"
    />
    <path
      fill="#00CC7E"
      d="M20 17v-6h16v6zM33 25v-4h3v4zM36 29v-4h4v4z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgLoababaLogo);
const Memo = memo(ForwardRef);
export default Memo;
