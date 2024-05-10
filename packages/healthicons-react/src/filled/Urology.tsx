import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgUrology = (
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Zm9.833 15.817A3.998 3.998 0 0 0 19.88 18h.117c.554 0 1 .447 1 .998V26.7c-.17.09-.332.19-.485.299-.91.642-1.513 1.595-1.513 2.858 0 .045 0 .089.002.133V30c.064 2.424 1.759 4.429 3.996 4.897V37a1 1 0 1 0 2 0v-2.102c2.24-.467 3.936-2.473 4-4.898l.002-.143c0-1.477-.825-2.53-2-3.158V19A.999.999 0 0 1 28 18h.118a4 4 0 0 0 6.705 3.817c1.258-1.259 2.18-2.986 2.175-4.817.005-1.831-.917-3.571-2.175-4.83A4 4 0 0 0 28.12 16H28c-1.656 0-3 1.34-3 2.998v7.071a7.242 7.242 0 0 0-2.002 0V19a2.999 2.999 0 0 0-3-2.999h-.12a4 4 0 0 0-6.702-3.83C11.917 13.43 10.996 15.17 11 17c-.005 1.83.918 3.558 2.176 4.817a4 4 0 0 0 5.657 0ZM24 33c-1.561 0-2.925-1.282-2.997-3h5.994c-.072 1.718-1.436 3-2.997 3Zm-6.002-17.016c-.555 0-1.005-.45-1.005-1.005a1 1 0 1 0-2 0c0 .77.29 1.473.767 2.005a2.995 2.995 0 0 0-.767 2.005 1 1 0 0 0 2 0c0-.555.45-1.005 1.006-1.005a1 1 0 0 0 0-2Zm13.007-1.005c0 .555-.45 1.005-1.005 1.005a1 1 0 1 0 0 2c.555 0 1.005.45 1.005 1.005a1 1 0 1 0 2 0c0-.77-.29-1.473-.767-2.005a2.994 2.994 0 0 0 .767-2.006 1 1 0 1 0-2 0Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgUrology);
export default ForwardRef;
