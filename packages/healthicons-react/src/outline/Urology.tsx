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
        d="M29.168 12.17A3.998 3.998 0 0 0 28.123 16H28c-1.656 0-3 1.34-3 2.998v7.074a6.914 6.914 0 0 0-2 0v-7.074A2.999 2.999 0 0 0 20 16h-.123a4 4 0 0 0-6.702-3.83C11.918 13.43 10.996 15.17 11 17c-.005 1.83.918 3.558 2.176 4.817A4 4 0 0 0 19.88 18H20c.553 0 1 .447 1 .998v7.733a4.67 4.67 0 0 0-.305.187C19.715 27.572 19 28.612 19 30a5.002 5.002 0 0 0 4 4.9V37a1 1 0 1 0 2 0v-2.1a5.002 5.002 0 0 0 4-4.9c0-1.388-.715-2.428-1.695-3.082a4.629 4.629 0 0 0-.305-.187v-7.733A.999.999 0 0 1 28 18h.12a4 4 0 0 0 6.705 3.817C36.082 20.558 37.004 18.83 37 17c.005-1.831-.917-3.571-2.175-4.83a4 4 0 0 0-5.657 0Zm4.242 1.415a2 2 0 0 0-3.171 2.37c.44-.107.766-.504.766-.976a1 1 0 1 1 2 0c0 .77-.29 1.473-.767 2.005.477.532.767 1.235.767 2.005a1 1 0 1 1-2 0c0-.47-.322-.864-.757-.974a2.001 2.001 0 0 0 3.162 2.387c.985-.984 1.593-2.233 1.59-3.402.003-1.17-.605-2.431-1.59-3.415ZM26.661 29a2.023 2.023 0 0 0-.466-.418C25.646 28.216 24.852 28 24 28c-.852 0-1.646.216-2.195.582a2.029 2.029 0 0 0-.466.418h5.322Zm.168 2a3.001 3.001 0 0 1-5.658 0h5.658Zm-9.41-17.415a2 2 0 0 0-2.83 0C13.606 14.569 12.998 15.83 13 17c-.003 1.169.605 2.418 1.59 3.402a2 2 0 0 0 3.162-2.387c-.435.11-.757.505-.757.974a1 1 0 1 1-2 0c0-.77.29-1.473.767-2.005a2.994 2.994 0 0 1-.767-2.006 1 1 0 1 1 2 0c0 .473.326.87.766.977a2 2 0 0 0-.343-2.37Z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9Zm2 0a1 1 0 0 1 1-1h30a1 1 0 0 1 1 1v30a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V9Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgUrology);
export default ForwardRef;
