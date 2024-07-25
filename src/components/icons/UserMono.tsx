import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgUserMono = (
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
      fill={props.color || "#424242"}
      fillRule="evenodd"
      d="M19.52 19.391c-1.017-3.213-3.746-5.054-7.493-5.054H12c-3.757-.02-6.501 1.833-7.52 5.054l-.117.374.334.204c1.958 1.194 4.4 1.8 7.256 1.8h.095c2.896 0 5.27-.59 7.256-1.8l.334-.204zM12 12.109a4.944 4.944 0 0 0 4.94-4.938A4.944 4.944 0 0 0 12 2.23a4.944 4.944 0 0 0-4.938 4.94A4.943 4.943 0 0 0 12 12.109"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgUserMono);
const Memo = memo(ForwardRef);
export default Memo;
