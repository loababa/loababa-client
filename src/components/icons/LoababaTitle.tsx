import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgLoababaTitle = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 118 36"
    width={props.width || 24}
    height={props.height || 24}
    ref={ref}
    {...props}>
    <path
      fill="#75FFBF"
      d="M1.732 27.704v-4.208h9.358v-3.86H1.731V9.41h4.5v6.545H24.72v3.682H15.36v3.859h11.754v4.208zm0-21.04V2.454h22.987V9.41H6.231V6.663zM27.114 23.496V6.663h6.725v16.833zm6.725 0h7.723v4.208h-7.723zm0-16.833V2.455h7.723v4.208zm7.723 16.833V6.663h4.27v16.833zm7.722 4.208V2.455h4.27V15.08h3.452v4.208h-3.452v8.416zM59.91 27.704V2.455h4.27v8.416h6.904V2.455h4.27v25.249zm4.27-4.208h6.904V15.08H64.18zm15.445 4.208V2.455h3.924V15.08h3.798v4.208H83.55v8.416zM89.686 27.704V2.455h4.27v8.416h6.904V2.455h4.27v25.249zm4.27-4.208h6.904V15.08h-6.904zm15.444 4.208V2.455h4.271V15.08h4.27v4.208h-4.27v8.416z"
    />
    <path
      fill={props.color || `#000000`}
      d="M27.095 0h2.455v36h-2.455z"
    />
    <path
      fill="#75FFBF"
      d="M5.822 9H24.64v4.091H5.822z"
    />
    <path
      fill={props.color || `#000000`}
      d="M1.731 6.546h18.818v3.273H1.731zM20.549 0h6.545v6.545h-6.545zM.095 15.546H6.64v6.545H.095z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgLoababaTitle);
const Memo = memo(ForwardRef);
export default Memo;
