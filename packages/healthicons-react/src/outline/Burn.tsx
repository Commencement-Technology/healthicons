import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBurn = (
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
      <path d="M43.999 26.499a1.5 1.5 0 0 0-1.5-1.5h-15.5v-2h12.5a1.5 1.5 0 1 0 0-3H23.914c-1.905 0-2.732-2.41-1.228-3.579l4.097-3.186a1.518 1.518 0 0 0-1.72-2.496l-11.391 6.89L12.5 16l11.524-6.972a3.518 3.518 0 0 1 3.986 5.784L23.915 18h15.585a3.5 3.5 0 0 1 3.161 5.004 3.5 3.5 0 0 1 0 6.992A3.5 3.5 0 0 1 39.5 35h-2.837a3.5 3.5 0 0 1-3.163 5H13.813l2.687-2h16.999a1.5 1.5 0 1 0 0-3h-8.618v-2H39.5a1.5 1.5 0 1 0 0-3h-12.5v-2h15.5a1.5 1.5 0 0 0 1.5-1.5Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.567 17c0 .823-.08 1.6-.225 2.346-.528 2.73-1.914 5.043-3.364 7.643-1.677 3.008-.994 5.721.517 8.254.561.942 1.238 1.859 1.95 2.757l-.001-.593c-.002-1.09-.003-1.932.055-2.642.167-2.049.827-2.992 3.395-5.571 1.172 2.097.879 4.268.448 6.474-.043.22-.087.439-.132.658A47.071 47.071 0 0 0 11.894 38c.47-.227.933-.437 1.388-.644.271-.123.54-.245.804-.368 2.094-.974 3.936-2.012 5.106-4.338 1.38-2.745.77-4.913-.178-7.537-.321-.889-.681-1.83-1.017-2.863-.407 1.5-1.166 2.863-1.659 3.818-.981-3.802-3.781-6.587-6.771-9.068Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgBurn);
export default ForwardRef;