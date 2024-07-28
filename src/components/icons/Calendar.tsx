import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCalendar = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 18 18"
    width={props.width || 24}
    height={props.height || 24}
    ref={ref}
    {...props}>
    <path
      fill={props.color || "#424242"}
      fillRule="evenodd"
      d="M12.55 2.884v-1.29h-1.124v3.412h-.75V2.884H6.948v-1.29H5.823v3.412h-.75V2.884H2.381V6.73h13.237V2.884zM6.483 12.139v1.125H5.358l-.007-1.125zm0-2.693v1.125H5.358l-.007-1.125zm3.083 2.693v1.125H8.44l-.008-1.125zm0-2.693v1.125H8.44l-.008-1.125zm3.082 2.693v1.125h-1.125l-.007-1.125zm0-2.693v1.125h-1.125l-.007-1.125zm-10.267 6.96h13.237v-8.55H2.381z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCalendar);
const Memo = memo(ForwardRef);
export default Memo;
