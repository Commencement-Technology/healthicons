import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgGlobalPandemic = (
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
      <g clipPath="url(#global-pandemic_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm30.089 7.03a18.016 18.016 0 0 0-9.804-.625 18.06 18.06 0 0 0-8.684 4.613A18.164 18.164 0 0 0 6.744 19h8.405a3.554 3.554 0 0 1 2.195.754 3.581 3.581 0 0 1 1.267 1.948v.003l1.284 5.163a3.598 3.598 0 0 1-.65 3.067 3.569 3.569 0 0 1-2.812 1.378h-1.024l-1.552 7.81a18.044 18.044 0 0 0 7.017 2.893 1 1 0 1 1-.357 1.968 20.054 20.054 0 0 1-9.81-4.8 20.16 20.16 0 0 1-5.859-9.236A20.22 20.22 0 0 1 4.668 19a20.166 20.166 0 0 1 5.55-9.427 20.06 20.06 0 0 1 9.645-5.123 20.016 20.016 0 0 1 10.892.695 20.083 20.083 0 0 1 8.92 6.308 20.187 20.187 0 0 1 4.316 10.056 1 1 0 1 1-1.982.262 18.189 18.189 0 0 0-3.698-8.82A.998.998 0 0 1 38 13h-6.489c-.293 0-.586.103-.831.307a1.56 1.56 0 0 0-.514.845l-1.192 5.077a1 1 0 1 1-1.948-.458l1.193-5.077a3.563 3.563 0 0 1 1.184-1.927 3.3 3.3 0 0 1 2.11-.767h5.032a18.07 18.07 0 0 0-6.456-3.97ZM12.092 37.74l1.515-7.622a1 1 0 0 1 .98-.805h1.846a1.555 1.555 0 0 0 1.233-.605 1.588 1.588 0 0 0 .287-1.36l-1.282-5.157v-.002a1.582 1.582 0 0 0-.559-.859 1.554 1.554 0 0 0-.96-.33H6.275a18.22 18.22 0 0 0 .49 8.374 18.16 18.16 0 0 0 5.277 8.32l.05.046Zm19.904-.432a5.406 5.406 0 0 0 4.312-4.312c.03.003.061.004.092.004h2.605A1 1 0 0 0 41 32.9v-1.8a1 1 0 0 0-1.995-.1H36.4c-.03 0-.061.001-.092.004a5.37 5.37 0 0 0-.848-2.05l1.84-1.84.193.193a1 1 0 0 0 1.414-1.414l-1.8-1.8a1 1 0 0 0-1.414 1.414l.193.193-1.84 1.84A5.371 5.371 0 0 0 32 26.692v-2.697A1 1 0 0 0 31.9 22h-1.8a1 1 0 0 0-.1 1.995v2.697c-.747.14-1.44.434-2.046.848l-1.84-1.84.193-.193a1 1 0 0 0-1.414-1.414l-1.8 1.8a1 1 0 0 0 1.414 1.414l.193-.193 1.84 1.84a5.37 5.37 0 0 0-.848 2.05A1.026 1.026 0 0 0 25.6 31h-2.605a1 1 0 0 0-1.995.1v1.8a1 1 0 0 0 1.995.1H25.6c.03 0 .061-.001.092-.004.14.749.434 1.444.848 2.05l-1.84 1.84-.193-.193a1 1 0 0 0-1.414 1.414l1.8 1.8a1 1 0 0 0 1.414-1.414l-.193-.193 1.84-1.84a5.37 5.37 0 0 0 2.05.848c-.003.03-.004.061-.004.092v2.605A1 1 0 0 0 30.1 42h1.8a1 1 0 0 0 .1-1.995V37.4c0-.03-.001-.061-.004-.092Zm4.597 2.6a1 1 0 0 1 0-1.415l.193-.193-1.993-1.993 1.414-1.414 1.993 1.993.193-.193a1 1 0 0 1 1.414 1.414l-1.8 1.8a1 1 0 0 1-1.414 0Z"
        />
      </g>
      <defs>
        <clipPath id="global-pandemic_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgGlobalPandemic);
export default ForwardRef;
