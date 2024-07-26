import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgGoogleLogo = (
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
      fill="#4285F4"
      fillRule="evenodd"
      d="M17.64 9.204q-.002-.957-.164-1.84H9v3.48h4.844a4.14 4.14 0 0 1-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615"
      clipRule="evenodd"
    />
    <path
      fill="#34A853"
      fillRule="evenodd"
      d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A9 9 0 0 0 9 18"
      clipRule="evenodd"
    />
    <path
      fill="#FBBC05"
      fillRule="evenodd"
      d="M3.964 10.71A5.4 5.4 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A9 9 0 0 0 0 9c0 1.452.348 2.827.957 4.042z"
      clipRule="evenodd"
    />
    <path
      fill="#EA4335"
      fillRule="evenodd"
      d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.462.891 11.426 0 9 0A9 9 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgGoogleLogo);
const Memo = memo(ForwardRef);
export default Memo;
