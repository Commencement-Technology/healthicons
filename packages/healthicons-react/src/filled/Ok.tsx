import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgOk = (
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
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path
        d="M30.84 30.616a2.91 2.91 0 0 1-.472.878C29.081 33.07 26.636 34 24.013 34c-2.517 0-4.856-.854-6.179-2.302a3.364 3.364 0 0 1-.372-.438 2.817 2.817 0 0 1-.371-.855 2.601 2.601 0 0 1-.067-1.021c.056-.367.24-.856.738-1.154.48-.29 1.022-.259 1.476-.13 2.354.613 3.5.887 4.639.892 1.135.005 2.308-.258 4.704-.894l.014-.004c.52-.13 1.108-.159 1.616.138.55.321.74.86.78 1.277.038.404-.046.799-.151 1.107ZM21.302 23.108c.13-.358.091-.795-.016-1.193a4.172 4.172 0 0 0-.61-1.28c-.581-.829-1.544-1.59-2.845-1.646-1.347-.056-2.353.799-2.973 1.706-.315.46-.549.958-.695 1.416-.143.446-.219.902-.169 1.267a.5.5 0 0 0 .766.352c.4-.256.819-.607 1.207-.931.176-.148.347-.29.505-.415.562-.444 1-.697 1.362-.715.345-.017.743.18 1.245.556.18.134.354.277.534.424h.001l.194.159c.244.197.504.399.766.557a.5.5 0 0 0 .728-.257ZM26.613 23.108c-.13-.358-.09-.795.017-1.193.112-.416.319-.863.61-1.28.58-.829 1.544-1.59 2.845-1.646 1.346-.056 2.353.799 2.973 1.706.314.46.548.958.695 1.416.142.446.218.902.168 1.267a.5.5 0 0 1-.765.352c-.4-.256-.82-.607-1.207-.931-.177-.148-.347-.29-.505-.415-.563-.444-1-.697-1.363-.715-.345-.017-.743.18-1.244.556-.18.134-.354.277-.534.424H28.3c-.063.053-.128.105-.194.159-.244.197-.503.399-.765.557a.5.5 0 0 1-.729-.257Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 42c9.941 0 18-8.059 18-18S33.941 6 24 6 6 14.059 6 24s8.059 18 18 18Zm0-2c8.837 0 16-7.163 16-16S32.837 8 24 8 8 15.163 8 24s7.163 16 16 16Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOk);
export default ForwardRef;