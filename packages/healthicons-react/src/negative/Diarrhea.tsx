import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgDiarrhea = (
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
      <g clipPath="url(#diarrhea_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0Zm-6 10.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM29.326 22.362c-.028.325-.053.633-.072.915-.03.42-.05.818-.05 1.138 0 .153.003.342.023.527.01.088.029.234.073.4l.002.006c.026.098.146.543.538.935.328.328.612.51 1.154.847l.724.449h.001c.612.378 1.491.921 2.855 1.774a2 2 0 0 0 2.12-3.392c-1.36-.85-2.3-1.43-2.922-1.815h-.001v-.001l-.002-.001-.541-.335.016-.255c.054-.779.154-1.814.264-2.877.103-.982.213-1.968.302-2.767l.02-.18c.047-.413.087-.772.115-1.04l.004-.035c.02-.19.051-.482.051-.655 0-.573-.235-.988-.386-1.2a2.213 2.213 0 0 0-.447-.463 2.74 2.74 0 0 0-.639-.363 4.463 4.463 0 0 0-1.196-.289c-.867-.095-1.97-.011-3.206.417-2.501.868-5.404 3.09-8.129 7.81-.934 1.618-.13 3.233.424 4.063.632.948 1.556 1.838 2.397 2.554a30.786 30.786 0 0 0 2.43 1.85c.209.143.397.27.558.377l3.566 9.92a2 2 0 1 0 3.764-1.353l-3.795-10.558a2 2 0 0 0-.832-1.026h-.002l-.01-.007-.05-.031a30.373 30.373 0 0 1-2.472-1.754l.303-.504c.643-1.072 1.1-1.593 1.658-2.065.38-.32.803-.621 1.39-1.016ZM22 42h-8.5C9.358 42 6 40.88 6 39.5S9.358 37 13.5 37c8 0 8.5 3.62 8.5 5Zm-3.397-11.618a1 1 0 1 0-1.8-.871L14.6 34.065a1 1 0 0 0 1.8.87l2.203-4.553Zm2.83 1.717a1 1 0 0 1 .468 1.335l-1.223 2.544a1 1 0 1 1-1.803-.867l1.224-2.544a1 1 0 0 1 1.334-.468Z"
        />
      </g>
      <defs>
        <clipPath id="diarrhea_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgDiarrhea);
export default ForwardRef;
