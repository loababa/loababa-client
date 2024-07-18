import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCalendar = (
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
      fill="#424242"
      fillRule="evenodd"
      d="M16.735 3.845v-1.72h-1.5v4.55h-1v-2.83h-4.97v-1.72h-1.5v4.55h-1v-2.83h-3.59v5.13h17.65v-5.13zM8.645 16.185v1.5h-1.5l-.01-1.5zm0-3.59v1.5h-1.5l-.01-1.5zm4.11 3.59v1.5h-1.5l-.01-1.5zm0-3.59v1.5h-1.5l-.01-1.5zm4.11 3.59v1.5h-1.5l-.01-1.5zm0-3.59v1.5h-1.5l-.01-1.5zm-13.69 9.28h17.65v-11.4H3.175z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCalendar);
const Memo = memo(ForwardRef);
export default Memo;
