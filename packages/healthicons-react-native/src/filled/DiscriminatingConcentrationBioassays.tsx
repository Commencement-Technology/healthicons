import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgDiscriminatingConcentrationBioassays = (passedProps: SvgProps) => {
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
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 6a2 2 0 0 0-2 2v4h1.533v2.195a3 3 0 0 1-1.015 2.25l-1.826 1.61A5 5 0 0 0 23 21.806V37a5 5 0 0 0 5 5h9a5 5 0 0 0 5-5V21.805a5 5 0 0 0-1.692-3.75l-1.826-1.61a3 3 0 0 1-1.015-2.25V12H39V8a2 2 0 0 0-2-2h-9Zm7.467 6h-5.934v2.195a5 5 0 0 1-1.692 3.75l-1.826 1.61A3 3 0 0 0 25 21.806V37a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3V21.805a3 3 0 0 0-1.015-2.25l-1.826-1.61a5 5 0 0 1-1.692-3.75V12ZM33 21.5a.5.5 0 0 0-1 0v2.728c-.28.264-.523.745-.698 1.366l-.802-.801V23.5a.5.5 0 0 0-.146-.354l-1.5-1.5a.5.5 0 0 0-.708.708l1.354 1.353V25a.5.5 0 0 0 .146.354l1.425 1.424c-.01.082-.018.164-.026.248l-5.007.831c-.157.714.093 2.143 2.346 2.143 1.55 0 2.3-.946 2.617-1.862.004.327.023.643.055.945L28.7 30.85a.5.5 0 0 0-.164.586l.317.792-1.045.435a.5.5 0 1 0 .384.924l1.5-.626a.5.5 0 0 0 .272-.647l-.357-.894 1.638-1.229c.043.175.09.34.143.493l-.372 1.441a.497.497 0 0 0-.016.125v.7l-1.39 1.738a.5.5 0 1 0 .78.624l1.5-1.875a.5.5 0 0 0 .11-.312v-.812l.115-.446A.664.664 0 0 0 32.5 32c.15 0 .293-.058.43-.166l.07.238v1.053a.5.5 0 0 0 .11.312l1.5 1.875a.5.5 0 1 0 .78-.624L34 32.95V32a.498.498 0 0 0-.02-.142l-.357-1.205c.04-.12.077-.246.111-.379l1.655 1.158-.353.882a.5.5 0 0 0 .272.648l1.5.624a.5.5 0 1 0 .384-.922l-1.045-.436.317-.792a.5.5 0 0 0-.177-.596l-2.355-1.648c.024-.2.041-.407.053-.619.39.758 1.128 1.427 2.43 1.427 2.254 0 2.504-1.429 2.347-2.143l-4.804-.797a9.581 9.581 0 0 0-.03-.282l1.425-1.424A.5.5 0 0 0 35.5 25v-1.293l1.353-1.353a.5.5 0 0 0-.707-.708l-1.5 1.5a.5.5 0 0 0-.146.354v1.293l-.801.801c-.176-.621-.418-1.102-.699-1.366V21.5ZM28.384 29c-.75 0-1.069-.189-1.204-.319l2.679-.445a1.906 1.906 0 0 1-.05.08c-.25.367-.652.684-1.425.684Zm9.236-.319c-.135.13-.454.319-1.204.319-.773 0-1.176-.317-1.424-.685a1.906 1.906 0 0 1-.05-.079l2.678.445ZM6 14.143h.75v1.102c0 .66.266 1.293.738 1.755a.457.457 0 0 1 .137.327v13.346c0 .123-.05.24-.137.327a2.457 2.457 0 0 0-.738 1.755v1.102H6V39h14v-5.143h-.75v-1.102c0-.66-.266-1.293-.738-1.755a.457.457 0 0 1-.137-.327V17.327c0-.123.05-.24.137-.327a2.457 2.457 0 0 0 .738-1.755v-1.102H20V9H6v5.143Zm11.25 19.714v-1.102c0-.123-.05-.24-.137-.326a2.457 2.457 0 0 1-.738-1.756V17.327c0-.66.266-1.293.738-1.756a.457.457 0 0 0 .137-.326v-1.102H16v-1.714a1 1 0 1 0-2 0v1.714h-2v-1.714a1 1 0 1 0-2 0v1.714H8.75v1.102c0 .123.05.24.137.326.472.463.738 1.095.738 1.756v13.346c0 .66-.266 1.294-.738 1.756a.457.457 0 0 0-.137.326v1.102H10V35a1 1 0 1 0 2 0v-1.143h2V35a1 1 0 1 0 2 0v-1.143h1.25Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgDiscriminatingConcentrationBioassays;
