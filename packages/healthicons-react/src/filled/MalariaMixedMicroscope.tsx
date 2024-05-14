import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMalariaMixedMicroscope = (
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
      <path d="M13.57 20.39a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM16.363 16.984a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM15.637 18.89a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM18.348 16.077a.7.7 0 1 1-1.4 0 .7.7 0 0 1 1.4 0ZM32.419 31.898a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM29.965 31.166a.453.453 0 1 0 0-.906.453.453 0 0 0 0 .906ZM27.274 29.039a.447.447 0 1 1-.894 0 .447.447 0 0 1 .894 0ZM28.316 30.712a.768.768 0 1 0 0-1.536.768.768 0 0 0 0 1.536ZM30.3 17.076a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM27.8 15.596a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM30.877 19.55a.7.7 0 1 1-1.4 0 .7.7 0 0 1 1.4 0ZM18.457 33.02a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM17.373 31.123a.453.453 0 1 0 0-.906.453.453 0 0 0 0 .906ZM16.168 29.627a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM18.867 35.836a.7.7 0 1 0 0-1.4.7.7 0 0 0 0 1.4Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20ZM9.693 22.308c1.18 1.527 4.627.841 7.698-1.533 3.072-2.373 4.606-5.536 3.426-7.063-1.18-1.527-4.628-.84-7.7 1.533-3.07 2.374-4.604 5.536-3.424 7.063Zm21.694 5.542c3.287 1.984 5.151 4.918 4.165 6.551-.987 1.634-4.451 1.35-7.738-.634-3.286-1.985-5.15-4.918-4.164-6.552.986-1.634 4.45-1.35 7.737.635Zm1.019-11.848c1.645 3.519 1.562 7.034-.188 7.852-1.749.819-4.5-1.37-6.147-4.889-1.646-3.518-1.562-7.033.187-7.852 1.75-.818 4.502 1.371 6.148 4.89Zm-11.838 14.93c1.784 3.55 1.8 7.146.035 8.033-1.764.887-4.64-1.271-6.425-4.82-1.784-3.55-1.8-7.145-.036-8.032 1.765-.887 4.642 1.27 6.426 4.82Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgMalariaMixedMicroscope);
export default ForwardRef;
