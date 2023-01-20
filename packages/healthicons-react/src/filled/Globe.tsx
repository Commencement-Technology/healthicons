import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgGlobe = (
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
        d="M24 42c9.941 0 18-8.059 18-18S33.941 6 24 6 6 14.059 6 24s8.059 18 18 18Zm0 2c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z"
        fill="#333"
      />
      <path
        d="m12.862 39 1.726-9.687h1.845a2.552 2.552 0 0 0 2.022-.991 2.59 2.59 0 0 0 .47-2.214l-1.284-5.161a2.582 2.582 0 0 0-.913-1.405A2.554 2.554 0 0 0 15.15 19H6.5c-2.347 6.354-1.515 10.26 5 19.5"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.149 18a3.554 3.554 0 0 1 2.195.754 3.581 3.581 0 0 1 1.267 1.948v.003l1.284 5.163a3.598 3.598 0 0 1-.65 3.067 3.567 3.567 0 0 1-2.812 1.378h-1.008l-1.579 8.862a1 1 0 0 1-1.33.764l-1.36-.5a1 1 0 0 1-.473-.363c-3.266-4.632-5.2-8.047-5.976-11.166-.794-3.185-.36-5.964.855-9.256A1 1 0 0 1 6.5 18h8.649Zm.964 2.33a1.554 1.554 0 0 0-.96-.33H7.204c-.94 2.75-1.174 4.953-.558 7.426.666 2.67 2.342 5.744 5.447 10.18l1.51-8.468a1 1 0 0 1 .984-.825h1.845a1.555 1.555 0 0 0 1.233-.605 1.59 1.59 0 0 0 .288-1.36l-1.282-5.157v-.002a1.582 1.582 0 0 0-.56-.859Z"
        fill="#333"
      />
      <path
        d="m35.25 39-1.195-6.78h-1.278a1.75 1.75 0 0 1-.779-.184 1.781 1.781 0 0 1-.62-.51 1.82 1.82 0 0 1-.326-1.55l.889-3.613c.097-.39.32-.737.632-.983.312-.247.697-.38 1.093-.38H41.5c1.404 5.204-.134 8.282-6.25 14Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.666 24a2.756 2.756 0 0 0-1.713.595 2.81 2.81 0 0 0-.983 1.526v.003l-.889 3.614a2.838 2.838 0 0 0 .503 2.397c.259.336.59.609.97.797.38.189.799.287 1.223.287h.439l1.049 5.955a1 1 0 0 0 1.668.556c3.067-2.867 5.11-5.18 6.172-7.508 1.095-2.4 1.106-4.72.36-7.483A1 1 0 0 0 41.5 24h-7.834Zm-.473 2.164a.756.756 0 0 1 .47-.164h7.053c.457 2.08.334 3.717-.43 5.393-.747 1.637-2.133 3.376-4.376 5.59l-.87-4.937a1 1 0 0 0-.985-.827h-1.278a.752.752 0 0 1-.334-.078.783.783 0 0 1-.273-.225.821.821 0 0 1-.146-.703l.887-3.609a.81.81 0 0 1 .282-.44Z"
        fill="#333"
      />
      <path
        d="M41 16.027c-3.487-5.163-6.057-7.32-12.062-9.527l-.716 2.344h-.93a1.292 1.292 0 0 0-1.254 1.602l2.646 5.58A1.29 1.29 0 0 0 29.94 17H41"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.94 18a2.292 2.292 0 0 1-2.195-1.62l-2.61-5.505a1.001 1.001 0 0 1-.067-.187 2.29 2.29 0 0 1 2.224-2.845h.19l.5-1.635a1 1 0 0 1 1.3-.647c3.058 1.124 5.31 2.26 7.255 3.813 1.942 1.55 3.523 3.474 5.292 6.093a1 1 0 0 1 .171.56V17a1 1 0 0 1-1 1H29.94Zm-.183-2.061c.051.04.114.061.18.061h9.833c-1.547-2.229-2.9-3.802-4.481-5.064-1.515-1.21-3.281-2.167-5.707-3.122l-.404 1.322a1 1 0 0 1-.956.708h-.93a.294.294 0 0 0-.286.23.288.288 0 0 0-.006.067l2.588 5.457c.027.059.05.12.066.183a.29.29 0 0 0 .103.158Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgGlobe);
export default ForwardRef;
