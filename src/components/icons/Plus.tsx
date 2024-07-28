import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPlus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={props.width || 24}
    height={props.height || 24}
    ref={ref}
    {...props}>
    <path
      stroke="#BDBDBD"
      strokeLinecap="round"
      strokeWidth={2}
      d="M12 1v22M1 12h22"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgPlus);
const Memo = memo(ForwardRef);
export default Memo;
