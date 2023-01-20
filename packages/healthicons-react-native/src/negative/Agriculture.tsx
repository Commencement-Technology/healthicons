import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgAgriculture = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
  const context = React.useContext(HealthIconsContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 48 48"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48 0H0v48h48V0ZM18.846 23.023a1 1 0 0 1 1.705-1.046c.956 1.559 1.804 3.16 2.382 4.664a1 1 0 0 1-1.866.718c-.52-1.35-1.302-2.838-2.221-4.336Zm10.744-2.33a1 1 0 0 1 .217 1.397c-1.157 1.583-2.176 3.7-2.893 5.316a1 1 0 1 1-1.828-.812c.724-1.63 1.814-3.916 3.107-5.684a1 1 0 0 1 1.397-.217ZM42.105 6S29.582 9.36 27.24 12.037c-1.852 2.117.237 6.583 1.192 8.359 1.697-2.598 3.636-5.095 5.309-7.047a1 1 0 0 1 1.518 1.302c-1.66 1.936-3.546 4.375-5.174 6.872 2.178.613 6.623 1.61 8.018.014C39.976 19.395 42.105 6 42.105 6ZM6 30h5v1.914c1.018-.363 3.96-1.417 4.665-1.74.857-.392 2.951 0 2.951 0l6.092 1.373s1.523.49 2.95.49c1.428 0 .575 1.963-.38 2.648s-1.65.648-1.65.648l-4.918-.06s4.283.785 5.901.883c.82.05 2.226-.53 3.797-1.177 1.53-.631 3.218-1.327 4.674-1.569 2.951-.49 3.427 2.158 2.475 3.138-.952.981-8.566 4.707-9.899 5.198-1.043.384-2.306.256-3.73.112-.394-.04-.801-.08-1.22-.112-1.662-.127-2.933-.533-4.192-.935-1.348-.43-2.682-.856-4.468-.928-.522-.022-2.028.032-3.048.074V42H6V30Zm15.145-15.349C19.213 12.441 8.878 9.67 8.878 9.67s1.756 11.055 3.303 12.823c1.1 1.259 4.502.562 6.37.056a56.058 56.058 0 0 0-3.336-4.695 1 1 0 0 1 1.57-1.239 58.114 58.114 0 0 1 3.434 4.83c.81-1.531 2.419-5.086.926-6.793Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgAgriculture);
export default ForwardRef;
