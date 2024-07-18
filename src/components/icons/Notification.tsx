import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNotification = (
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
      d="M12.002 20.375a2.41 2.41 0 0 1-2.39-2.143h4.778A2.41 2.41 0 0 1 12 20.375m8.518-2.143-1.832-4.928V8.813c0-3.688-3-6.688-6.687-6.688-3.689 0-6.689 3-6.689 6.688v4.491L3.48 18.232h4.632c.143 2.03 1.823 3.643 3.89 3.643 2.064 0 3.744-1.613 3.887-3.643z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgNotification);
const Memo = memo(ForwardRef);
export default Memo;
