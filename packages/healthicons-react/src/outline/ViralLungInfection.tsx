import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgViralLungInfection = (
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
        d="M23.176 6H24v16.5c0 1.398.564 1.942 1.004 2.199.041.024.083.046.125.067a37.998 37.998 0 0 0 .01-1.712c-.01-.925-.022-2.087.067-3.29a10.04 10.04 0 0 0 1.928 2.506c0 .245.003.484.005.715.003.275.005.54.005.79 0 .838-.033 1.724-.068 2.653-.058 1.563-.12 3.248-.038 5.034.063 1.353.21 2.594.484 3.633.278 1.054.649 1.75 1.051 2.163 1.182 1.216 3.049 2.197 4.946 2.576 1.863.372 3.333.096 4.19-.564l.01-.023c.054-.14.121-.385.176-.758.11-.749.138-1.793.064-3.08-.147-2.562-.682-5.81-1.527-9.007a50.45 50.45 0 0 0-.45-1.598 9.919 9.919 0 0 0 1.91-.59c2.12 7.062 2.846 15.099 1.222 16.49-2.994 2.566-8.98 1.027-11.974-2.051-2.29-2.355-2.223-7.69-2.082-11.79a4.259 4.259 0 0 1-1.062-.437 3.816 3.816 0 0 1-.996-.834c-.297.352-.64.626-.996.834-.377.22-.748.354-1.062.437.141 4.1.208 9.435-2.082 11.79-2.993 3.078-8.98 4.617-11.974 2.052C3.893 38.14 8.882 13 15.866 13c5.1 0 5.03 6.643 4.995 10.054-.002.26-.005.502-.005.72 0 .308.006.64.015.992.042-.02.084-.043.125-.067.44-.257 1.004-.801 1.004-2.199V6h1.176Zm-7.31 9c.843 0 1.308.269 1.64.622.394.418.732 1.102.97 2.083.417 1.714.4 3.688.385 5.28-.002.276-.005.54-.005.79 0 .838.033 1.724.068 2.653.058 1.563.12 3.248.038 5.034-.062 1.353-.21 2.594-.484 3.633-.278 1.054-.649 1.75-1.051 2.163-1.182 1.216-3.048 2.197-4.946 2.576-1.863.372-3.333.096-4.19-.564l-.01-.023a3.66 3.66 0 0 1-.176-.758c-.11-.749-.138-1.793-.064-3.08.147-2.562.682-5.81 1.527-9.007.849-3.21 1.977-6.242 3.254-8.423.64-1.093 1.266-1.885 1.84-2.382.57-.494.965-.597 1.205-.597Zm-7.55 24.327.004.005v-.001l-.003-.004Zm29.367 0a.044.044 0 0 1-.003.005l.001-.002.002-.003Z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.243 10.828A4.972 4.972 0 0 1 33 10.1V9a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2v1.1c.638.13 1.233.38 1.757.728l.829-.828A1 1 0 0 1 39 8.586L40.414 10A1 1 0 1 1 39 11.414l-.828.829c.347.524.598 1.119.728 1.757H40a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0h-1.1a4.972 4.972 0 0 1-.728 1.757l.828.829A1 1 0 1 1 40.414 20L39 21.414A1 1 0 0 1 37.586 20l-.829-.828A4.972 4.972 0 0 1 35 19.9V21a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2v-1.1a4.972 4.972 0 0 1-1.757-.728l-.829.828A1 1 0 0 1 29 21.414L27.586 20A1 1 0 0 1 29 18.586l.828-.829A4.972 4.972 0 0 1 29.1 16H28a1 1 0 1 1-2 0v-2a1 1 0 1 1 2 0h1.1c.13-.638.38-1.233.728-1.757L29 11.414A1 1 0 0 1 27.586 10l.698-.698.009-.01.01-.008.697-.698A1 1 0 0 1 30.414 10l.829.828ZM31 15a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgViralLungInfection);
export default ForwardRef;
