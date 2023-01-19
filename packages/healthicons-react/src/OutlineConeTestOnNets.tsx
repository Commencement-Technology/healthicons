import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineConeTestOnNets = (
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
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path
        fill="#333"
        fillRule="evenodd"
        d="M19.867 8.403a4.288 4.288 0 0 0-.63-.046c-2.26 0-4.09 1.759-4.09 3.929 0 1.64 1.046 3.045 2.533 3.633l-5.54 18.469c-.092.2-.14.404-.14.612 0 2.21 5.373 4 12 4s12-1.79 12-4a1.45 1.45 0 0 0-.14-.612l-5.512-18.374c1.626-.52 2.798-1.993 2.798-3.728 0-2.17-1.831-3.929-4.09-3.929-.215 0-.425.016-.63.046C27.584 6.97 25.983 6 24.146 6c-1.836 0-3.438.969-4.28 2.403Zm.376 5.694.6.357c.368.217 1.559.546 3.303.546 1.745 0 2.936-.329 3.303-.546l.6-.357.693.096c.101.014.206.021.313.021 1.232 0 2.091-.939 2.091-1.928 0-.99-.859-1.929-2.09-1.929-.116 0-.228.009-.337.025l-1.335.198-.683-1.165C26.218 8.591 25.272 8 24.146 8c-1.125 0-2.07.591-2.554 1.415l-.684 1.165-1.335-.198a2.283 2.283 0 0 0-.336-.025c-1.232 0-2.09.939-2.09 1.929 0 .99.858 1.928 2.09 1.928.108 0 .213-.007.314-.021l.692-.096ZM24 19c-2.274 0-3.796-1.35-3.981-2.72.874.433 2.396.72 4.127.72 1.539 0 2.912-.227 3.812-.581C27.692 17.74 26.197 19 24 19Zm-9.184 13.425C17.018 31.554 20.316 31 24 31c3.685 0 6.982.554 9.184 1.425L29.066 18.7C27.963 20.129 26.022 21 24 21c-2.021 0-3.963-.872-5.066-2.301l-4.118 13.726Zm17.037 1.644c.953.318 1.588.653 1.948.931-.36.278-.995.613-1.948.931C29.935 36.571 27.159 37 24 37s-5.935-.43-7.853-1.069c-.953-.318-1.588-.653-1.948-.931.36-.278.995-.613 1.948-.931C18.065 33.429 20.841 33 24 33s5.935.43 7.853 1.069Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        d="M39 37a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0-6a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM27 41a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm14-2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-29 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-5-1a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm34-6a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM8 30a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm26 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-17-1a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm21 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-25-1a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm-3 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm32-6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-32 2a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-2-4a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm-1-1a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-1 3a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm30 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-5 1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-9 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm18-8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineConeTestOnNets);
export default ForwardRef;
