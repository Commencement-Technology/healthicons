import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgHelicopter = (
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
      <g clipPath="url(#helicopter_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm8 31.752-.508.597a1 1 0 0 1-.29-.415L8 31.64c-.798.295-.799.294-.8.294v-.002l-.002-.006-.005-.014a3.569 3.569 0 0 1-.063-.192 8.16 8.16 0 0 1-.14-.523 10.52 10.52 0 0 1-.259-1.81c-.083-1.488.116-3.499 1.269-5.516 1.744-3.05 5.498-5.851 13-7.075V14a1 1 0 1 1 2 0V16.518c2.066-.24 4.383-.37 6.977-.371l10.328-.869 1.74-5.575 1.91.596-1.835 5.875 1.807 4.45-1.854.753-1.664-4.1-9.413.791c-.038 3.77-.347 7.372-1.887 10.093a8.614 8.614 0 0 1-3.792 3.577c-1.702.835-3.838 1.263-6.49 1.263-5.11 0-7.81-.103-9.243-.21-.715-.052-1.136-.107-1.395-.156a2.44 2.44 0 0 1-.33-.082 1.257 1.257 0 0 1-.254-.12 1.033 1.033 0 0 1-.083-.058l-.015-.012-.007-.006c-.004-.003-.007-.006.5-.605Zm12.883-12.91c-.109 1.045-.29 2.408-.518 3.72-.193 1.104-.412 2.121-.636 2.847-.08.256-.152.451-.214.591H9.204c.14-.376.315-.757.532-1.137 1.313-2.295 4.336-4.828 11.147-6.022ZM5 10a1 1 0 1 0 0 2h33.005a1 1 0 1 0 0-2H5Zm-.625 24.22a1 1 0 0 1 1.406.155c.22.276.783.6 1.758.88.924.265 2.037.44 3.135.554a38.511 38.511 0 0 0 4.083.192h.082l.01-.001H30.5a1 1 0 1 1 0 2H14.847l-.073.001-.271.001a40.49 40.49 0 0 1-4.034-.204c-1.152-.119-2.396-.31-3.481-.62-1.034-.297-2.133-.758-2.769-1.553a1 1 0 0 1 .156-1.406Z"
          fill="#000"
        />
      </g>
      <defs>
        <clipPath id="helicopter_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgHelicopter);
export default ForwardRef;
