import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgFetus = (
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
      <g clipPath="url(#fetus_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm28.758 25.612a2.25 2.25 0 0 1 2.399 1.342c.482 1.13.393 2.357.086 3.377-.318 1.056-.925 2.095-1.77 2.996-1.721 1.836-4.456 3.135-8 2.957a2.25 2.25 0 0 1-1.95-1.347l-1.762-4.04-2.061.674a2.25 2.25 0 0 1-1.4-4.277l2.973-.973-.996-2.207a9.16 9.16 0 0 0-.163-.28c-.07.012-.166.033-.298.068-1.494.398-2.893-.132-3.607-1.18a2.569 2.569 0 0 1-.432-1.837c.102-.675.473-1.29 1.063-1.775l.747-.614c.314-.259.393-.489.4-.719.01-.287-.095-.684-.368-1.213-.269-.52-.652-1.08-1.094-1.68-.158-.214-.328-.44-.5-.669l-.332-.44A15.996 15.996 0 0 0 8.967 29.48a16 16 0 1 0 4.12-17.18c.162.219.328.439.5.666.177.234.359.476.548.732.454.617.916 1.282 1.261 1.95.34.658.615 1.413.59 2.194-.027.84-.397 1.597-1.129 2.199l-.747.615c-.262.215-.337.407-.355.53a.57.57 0 0 0 .106.41c.19.28.684.576 1.44.375.5-.134 1.162-.281 1.765.045.298.162.493.392.626.58.119.167.23.366.33.54l.019.035.022.039.018.041 1.19 2.637a2.25 2.25 0 0 1 1.796 1.335l1.973 4.522c1.242-.156 2.153-.62 2.783-1.148l-.053.008a2.25 2.25 0 0 1-2.469-1.528l-1.446-4.434a2.25 2.25 0 0 1 4.278-1.396l.857 2.628 1.768-.262ZM32.5 26a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM16.822 39.41l-.422.907A18 18 0 1 1 31.6 7.683a18 18 0 0 1-15.2 32.634l.422-.907Z"
        />
      </g>
      <defs>
        <clipPath id="fetus_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFetus);
export default ForwardRef;
