import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMalariaTesting = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M24 6.5a.5.5 0 0 0-1 0v2.728c-.28.264-.523.745-.698 1.366l-.802-.801V8.5a.5.5 0 0 0-.146-.354l-1.5-1.5a.5.5 0 1 0-.708.708L20.5 8.707V10a.5.5 0 0 0 .146.354l1.425 1.424c-.01.082-.018.164-.026.248l-5.007.831c-.157.714.093 2.143 2.346 2.143 1.55 0 2.3-.946 2.617-1.862.004.327.023.643.055.945L19.7 15.85a.5.5 0 0 0-.164.586l.317.792-1.045.435a.5.5 0 1 0 .384.924l1.5-.625a.5.5 0 0 0 .272-.648l-.357-.894 1.638-1.229c.043.175.09.34.143.493l-.372 1.441a.497.497 0 0 0-.016.125v.742l-.434.76a.5.5 0 0 0 .868.496l.5-.875a.5.5 0 0 0 .066-.248v-.811l.115-.447A.664.664 0 0 0 23.5 17c.15 0 .293-.058.43-.166l.07.239v1.052a.5.5 0 0 0 .066.248l.5.875a.5.5 0 0 0 .868-.496l-.434-.76V17a.498.498 0 0 0-.02-.142l-.358-1.205c.04-.12.078-.246.112-.379l1.655 1.158-.353.882a.5.5 0 0 0 .272.648l1.5.625a.5.5 0 1 0 .384-.924l-1.045-.435.317-.792a.5.5 0 0 0-.177-.596l-2.355-1.648c.024-.2.041-.407.053-.619.39.758 1.128 1.427 2.43 1.427 2.254 0 2.504-1.429 2.347-2.143l-4.804-.797a9.581 9.581 0 0 0-.03-.282l1.425-1.424A.5.5 0 0 0 26.5 10V8.707l1.354-1.353a.5.5 0 1 0-.708-.708l-1.5 1.5a.5.5 0 0 0-.146.354v1.293l-.802.801c-.175-.621-.418-1.102-.698-1.366V6.5ZM19.384 14c-.75 0-1.069-.189-1.204-.319l2.679-.445a1.906 1.906 0 0 1-.05.08c-.25.367-.652.684-1.425.684Zm9.236-.319c-.135.13-.454.319-1.204.319-.773 0-1.176-.317-1.424-.685a1.906 1.906 0 0 1-.05-.079l2.678.445Z"
        fill="#333"
      />
      <Path
        d="M12 26h-2a1 1 0 1 0 0 2h2v-2ZM14 28h3v-2h-3v2ZM19 28h3v-2h-3v2ZM26 26a1 1 0 1 1 0 2h-2v-2h2Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 33a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6Zm32-8a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm-7 2a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0ZM7 27a3 3 0 0 0 3 3h16a3 3 0 1 0 0-6H10a3 3 0 0 0-3 3Z"
        fill="#333"
      />
      <Path
        d="M7.85 14.105c.238-.105.495-.131.743-.079.248.053.485.185.677.39a1 1 0 0 0 1.46-1.368 3.301 3.301 0 0 0-1.722-.978 3.208 3.208 0 0 0-1.966.206 3.383 3.383 0 0 0-1.495 1.304A3.62 3.62 0 0 0 5 15.5c0 .678.188 1.346.547 1.92.36.574.877 1.031 1.495 1.304a3.208 3.208 0 0 0 1.966.206 3.3 3.3 0 0 0 1.722-.978 1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.207 1.207 0 0 1-.742-.079 1.383 1.383 0 0 1-.609-.537A1.62 1.62 0 0 1 7 15.5c0-.31.087-.61.242-.858.156-.248.37-.432.609-.537Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 36a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0v-5Zm2 2h1.5a.5.5 0 0 0 0-1H15v1ZM34 12a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5H34Zm2.5 3H35v-1h1.5a.5.5 0 0 1 0 1Z"
        fill="#333"
      />
      <Path
        d="M22.5 42a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 42ZM42 18v-2a1 1 0 0 0 0-2 1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.116 2.116 0 0 0 40 14a1 1 0 1 0 0 2v2a1 1 0 1 0 2 0Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgMalariaTesting);
export default ForwardRef;
