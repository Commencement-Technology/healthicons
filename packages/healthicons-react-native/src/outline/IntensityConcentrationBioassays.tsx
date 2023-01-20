import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgIntensityConcentrationBioassays = (
  passedProps: SvgProps,
  ref: Ref<SVGSVGElement>
) => {
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
        d="M10 9.771h6v.696c-.616.337-1 .984-1 1.689v7.688c0 .705.384 1.352 1 1.69v.695h-6v-.696c.616-.337 1-.984 1-1.689v-7.688c0-.705-.384-1.352-1-1.69v-.695ZM8 21.49c0-.704.384-1.351 1-1.689v-7.6c-.616-.338-1-.985-1-1.69V6h10.057v3.771H18v.74c0 .704-.384 1.351-1 1.689v7.6c.616.338 1 .985 1 1.69v.739h.057v3.77H8v-4.51ZM18 30H8v10h10V30ZM8 28a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V30a2 2 0 0 0-2-2H8Z"
        fill="#333"
      />
      <Path d="M9 36h2v3H9v-3ZM12 34h2v5h-2v-5ZM15 31h2v8h-2v-8Z" fill="#333" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37 8h-9v2h9V8Zm-11 4h1.533v2.195a3 3 0 0 1-1.015 2.25l-1.826 1.61A5 5 0 0 0 23 21.806V37a5 5 0 0 0 5 5h9a5 5 0 0 0 5-5V21.805a5 5 0 0 0-1.692-3.75l-1.826-1.61a3 3 0 0 1-1.015-2.25V12H39V8a2 2 0 0 0-2-2h-9a2 2 0 0 0-2 2v4Zm9.467 2.195V12h-5.934v2.195a5 5 0 0 1-1.692 3.75l-1.826 1.61A3 3 0 0 0 25 21.806V37a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3V21.805a3 3 0 0 0-1.015-2.25l-1.826-1.61a5 5 0 0 1-1.692-3.75ZM33 21.5a.5.5 0 0 0-1 0v2.728c-.28.264-.523.745-.698 1.366l-.802-.801V23.5a.5.5 0 0 0-.146-.354l-1.5-1.5a.5.5 0 0 0-.708.708l1.354 1.353V25a.5.5 0 0 0 .146.354l1.425 1.424a9.73 9.73 0 0 0-.026.248l-5.007.831c-.157.714.093 2.143 2.346 2.143 1.55 0 2.3-.946 2.617-1.862.005.366.028.72.067 1.054l-2.355 1.648a.5.5 0 0 0-.177.596l.317.792-1.045.435a.5.5 0 1 0 .384.924l1.5-.626a.5.5 0 0 0 .272-.647l-.353-.882 1.655-1.158c.063.244.137.469.218.67l-.448 1.12a.499.499 0 0 0-.036.186v.7l-1.39 1.738a.5.5 0 1 0 .78.624l1.5-1.875a.5.5 0 0 0 .11-.312v-.779l.176-.44A.635.635 0 0 0 32.5 32a.66.66 0 0 0 .377-.128l.123.246v1.007a.5.5 0 0 0 .11.312l1.5 1.875a.5.5 0 1 0 .78-.624L34 32.95V32a.5.5 0 0 0-.053-.224l-.425-.85a5.36 5.36 0 0 0 .212-.652l1.655 1.158-.353.882a.5.5 0 0 0 .272.648l1.5.624a.5.5 0 1 0 .384-.922l-1.045-.436.317-.792a.5.5 0 0 0-.177-.596l-2.355-1.648c.024-.2.041-.407.053-.619.39.758 1.128 1.427 2.43 1.427 2.254 0 2.504-1.429 2.347-2.143l-4.804-.797a9.581 9.581 0 0 0-.03-.282l1.425-1.424A.5.5 0 0 0 35.5 25v-1.293l1.353-1.353a.5.5 0 0 0-.707-.708l-1.5 1.5a.5.5 0 0 0-.146.354v1.293l-.801.801c-.176-.621-.418-1.102-.699-1.366V21.5Zm-5.82 7.181c.135.13.454.319 1.204.319.773 0 1.176-.317 1.424-.685.018-.026.035-.052.05-.079l-2.678.445Zm10.44 0c-.135.13-.454.319-1.204.319-.773 0-1.176-.317-1.424-.685a1.906 1.906 0 0 1-.05-.079l2.678.445Zm-4.996 1.796c.22-.585.376-1.46.376-2.477 0-1.016-.156-1.892-.376-2.477a2.856 2.856 0 0 0-.124-.287c-.04.078-.082.173-.124.287-.22.585-.376 1.46-.376 2.477 0 1.016.156 1.892.376 2.477.042.114.084.209.124.287.04-.078.082-.173.124-.287Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgIntensityConcentrationBioassays);
export default ForwardRef;
