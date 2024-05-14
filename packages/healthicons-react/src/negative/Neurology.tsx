import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgNeurology = (
  passedProps: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => {
  const context = React.useContext(HealthIconsContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 48 48"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <g clipPath="url(#neurology_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM32.834 21.965c-.958.59-2.09.905-3.25.905-.876 0-1.132-.18-1.619-.523-.157-.11-.338-.238-.571-.382a2.455 2.455 0 0 0-.503.7c-.166.312-.3.567-.85.757a5.656 5.656 0 0 0-2.373 1.942 4.885 4.885 0 0 0-.877 2.78v5.535h-2.917v-8.192a1 1 0 0 0-.335-.747l-3.424-3.044-.637-3.499 3.688-2.346h1.572v3.909a1 1 0 0 0 2 0v-1.864h1.218l3.062 1.53a1 1 0 0 0 .895-1.788L24.64 16a1 1 0 0 0-.448-.105h-1.454v-.81l.7-1.4a.994.994 0 0 0 .21-.15l3.262.594 2.63 3.38a1 1 0 0 0 .572.362l3.562.792 1.526.763a1 1 0 1 0 .894-1.789l-1.636-.818a1.003 1.003 0 0 0-.23-.082l-2.064-.458.42-.839h1.836a1 1 0 1 0 0-2h-2.455a1 1 0 0 0-.894.553l-.678 1.356-1.73-2.223 1.472-1.178a1 1 0 0 0-1.249-1.561l-2.046 1.636a1 1 0 0 0-.057.05l-3.3-.6-.826-1.927a1 1 0 1 0-1.838.788l.95 2.217-.65 1.299h-1.398l-1.138-3.034a1 1 0 0 0-1.872.703l1.066 2.844-3.461 2.203-2.767-1.384a1 1 0 0 0-.895 1.789l2.826 1.413.635 3.492-2.084 2.084a1 1 0 1 0 1.414 1.415l1.787-1.788 2.642 2.348v7.743h-2.718a7.503 7.503 0 0 0-1.31-3.333 8.477 8.477 0 0 0-2.777-2.496 5.733 5.733 0 0 1-2.429-1.765 4.934 4.934 0 0 1-1.066-2.644C6.56 22.473 5.998 21.192 6 19.86c-.008-1.147.41-2.264 1.185-3.172a4.344 4.344 0 0 1-.204-1.384 4.891 4.891 0 0 1 1.13-3.109l2.957-1.89c.454-.922 1.194-1.704 2.13-2.254a6.242 6.242 0 0 1 3.143-.846c.461.003.92.052 1.37.148.95-.8 2.17-1.286 3.463-1.383l7.783.395c1.387.31 2.6 1.068 3.407 2.131h.409l3.63 1.147c1.03.745 1.746 1.786 2.03 2.949 1.246.488 2.269 1.348 2.896 2.435a4.892 4.892 0 0 1 .552 3.538c-.27 1.201-.99 2.283-2.038 3.063l-3.719 1.221a6.24 6.24 0 0 1-3.29-.885ZM23 38h-8v-2h8v2Zm-8 4h8v-2h-8v2Z"
        />
      </g>
      <defs>
        <clipPath id="neurology_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgNeurology);
export default ForwardRef;
