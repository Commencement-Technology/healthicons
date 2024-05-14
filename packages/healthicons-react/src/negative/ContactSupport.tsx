import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgContactSupport = (
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
      <g clipPath="url(#contact-support_svg__a)" fill="#000">
        <path d="M29.498 15.761c0-1.486-.777-2.595-1.807-3.28-.982-.653-2.201-.94-3.344-.977-1.151-.037-2.374.176-3.414.68-1.038.504-2.04 1.38-2.385 2.721a1.5 1.5 0 0 0 2.905.746c.056-.215.252-.507.789-.767.534-.259 1.26-.405 2.01-.382.756.024 1.386.217 1.778.477.345.23.468.47.468.782 0 .373-.07.588-.13.707a.699.699 0 0 1-.24.272c-.254.175-.674.285-1.228.322a1.5 1.5 0 0 0-1.4 1.497v2.797a1.5 1.5 0 1 0 3 0v-1.532a4.524 4.524 0 0 0 1.33-.614c1.03-.71 1.668-1.87 1.668-3.449ZM27 27a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM20.5 6C12.492 6 6 12.492 6 20.5 6 38.5 26.8 42 26.8 42v-7h.7C35.508 35 42 28.508 42 20.5S35.508 6 27.5 6h-7Z"
        />
      </g>
      <defs>
        <clipPath id="contact-support_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgContactSupport);
export default ForwardRef;
