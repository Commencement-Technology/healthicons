import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgElderly = (
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
        d="M18 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM12.516 20.935A8.97 8.97 0 0 1 13 20.4V38a2 2 0 0 0 3.988.22L17.79 31h.42l.802 7.22A2 2 0 0 0 23 38V24.36c.15-.796.711-1.949 1.596-3.032.793.975 1.326 2.006 1.532 2.784-.021 1.651-1.35 7.83-1.896 10.309a.986.986 0 0 0 .825 1.194c3.693.507 6.884.506 10.546.04.683-.087 1.082-.844.834-1.487-.737-1.913-1.937-5.886-1.937-11.49v-2.926c.39.3.8.694 1.208 1.183 1.057 1.267 1.713 2.718 1.799 3.62a1.5 1.5 0 0 0 2.986-.285c-.163-1.716-1.2-3.721-2.481-5.256C36.768 17.522 34.893 16 32.79 16h-4.628c-1.283 0-2.501.515-3.562 1.248C23.543 16.515 22.328 16 21.048 16h-5.614c-2.103 0-3.977 1.522-5.222 3.014-1.28 1.535-2.318 3.54-2.481 5.256a1.5 1.5 0 0 0 2.986.285c.086-.902.742-2.353 1.8-3.62Z"
        fill="#333"
      />
      <path
        d="M6 28.5a2.5 2.5 0 0 1 5 0V39a1 1 0 1 1-2 0V28.5a.5.5 0 0 0-1 0v1.013a1 1 0 1 1-2 0V28.5ZM30.5 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM39.5 26a2.5 2.5 0 0 0-2.5 2.5v1.013a1 1 0 1 0 2 0V28.5a.5.5 0 0 1 1 0V39a1 1 0 1 0 2 0V28.5a2.5 2.5 0 0 0-2.5-2.5ZM25.5 39.388v-2.236a35.91 35.91 0 0 0 3.588.282l-.64 2.348a1.5 1.5 0 0 1-2.948-.394ZM32.553 39.782l-.654-2.397A41.646 41.646 0 0 0 35.5 37v2.388a1.5 1.5 0 0 1-2.947.394Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgElderly);
export default ForwardRef;
