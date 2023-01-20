import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPharmacy = (
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
        d="M26.532 6.275C25.582 6.008 24.319 6 23.058 6c-1.316 0-2.215.284-2.843.686-.624.4-1.055.967-1.353 1.667-.568 1.332-.614 3.037-.557 4.647H37c.552 0 1.006.45.943.998C37.301 19.606 31.303 24 24 24c-7.304 0-13.301-4.394-13.943-10.002-.063-.548.39-.998.943-.998h5.304c-.057-1.633-.021-3.698.718-5.431.424-.995 1.09-1.91 2.113-2.566C20.155 4.35 21.452 4 23.058 4h.072c1.172 0 2.7 0 3.944.35.648.182 1.312.483 1.82 1.01.535.552.823 1.277.823 2.14a1 1 0 1 1-2 0c0-.387-.115-.6-.26-.75-.171-.177-.463-.345-.925-.475ZM12.306 15c1.175 3.76 5.667 7 11.694 7 6.027 0 10.52-3.24 11.694-7H12.306ZM16 42v2h16v-2H16Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.129 20.408c.63.858.871 1.86.871 2.895 0 1.545-.542 2.983-1.95 3.987-.988.704-2.33 1.142-4.05 1.325v-2.013c1.376-.17 2.294-.517 2.888-.94.78-.556 1.112-1.323 1.112-2.36 0-.723-.165-1.277-.483-1.71l1.612-1.184ZM22 26.736v2.002c-.967.037-1.818.128-2.506.35-.539.173-.891.403-1.113.679-.213.264-.381.664-.381 1.329 0 .668.168 1.07.382 1.336.222.277.575.508 1.113.682 1.12.362 2.673.376 4.459.376l.02-.002c.044-.003.106-.008.182-.01.152-.007.364-.01.615.001a6.519 6.519 0 0 1 1.888.36c.707.256 1.467.698 2.048 1.456.588.767.93 1.778.93 3.058 0 1.279-.342 2.283-.944 3.033-.594.741-1.37 1.145-2.084 1.361-.206.063-.41.11-.609.147v-2.052l.03-.009c.445-.135.828-.356 1.103-.698.268-.334.505-.873.505-1.782 0-.908-.237-1.474-.519-1.842-.288-.376-.688-.627-1.14-.79a4.523 4.523 0 0 0-1.3-.244 4.884 4.884 0 0 0-.548.005l-.023.002h-.002l-.05.006h-.163c-1.668 0-3.55 0-5.013-.473-.774-.25-1.515-.656-2.058-1.333-.553-.69-.822-1.56-.822-2.588 0-1.027.27-1.896.823-2.583.543-.675 1.284-1.08 2.058-1.329.926-.298 2.018-.408 3.119-.448Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.115 36v6.5h2V36h-2Zm0-4h2v-9.5h-2V32Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPharmacy);
export default ForwardRef;
