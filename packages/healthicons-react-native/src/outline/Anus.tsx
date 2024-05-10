import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgAnus = (passedProps: SvgProps) => {
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
      <Path d="M0 0h48v48H0z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m5.793 7.707 1.414-1.414L21.17 20.257a8.59 8.59 0 0 1 .36-.17c.619-.276 1.517-.587 2.469-.587.951 0 1.85.311 2.468.586.13.058.25.115.361.17L40.793 6.294l1.414 1.414-15.08 15.08-.68-.454h-.001l-.006-.004a6.639 6.639 0 0 0-.784-.415c-.506-.225-1.108-.414-1.656-.414-.549 0-1.15.189-1.657.414a6.625 6.625 0 0 0-.784.415l-.006.004-.68.454-15.08-15.08ZM23.427 29.555c-.232.257-.327.543-.327.71 0 .153.084.396.299.614.206.21.46.321.7.321.242 0 .496-.112.702-.321.214-.218.299-.461.299-.614 0-.167-.096-.453-.328-.71-.225-.248-.473-.355-.672-.355-.2 0-.448.107-.673.355Zm-1.483-1.34c.499-.553 1.25-1.015 2.156-1.015.905 0 1.657.462 2.156 1.014.492.544.844 1.29.844 2.05 0 .774-.363 1.498-.873 2.017-.518.526-1.264.919-2.127.919-.864 0-1.61-.393-2.127-.92-.51-.518-.873-1.242-.873-2.015 0-.76.352-1.507.844-2.05Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.043 37.21c2.515 3.212 6.213 4.253 9.891 3.12 4.028-1.239 7.871-5.022 10.197-10.965l-1.862-.73c-2.175 5.557-5.641 8.774-8.923 9.784-3.21.988-6.392-.072-8.409-3.433l-.813-1.355-.876 1.314c-2.267 3.4-5.626 4.464-8.866 3.474-3.297-1.008-6.662-4.21-8.588-9.747l-1.889.657c2.074 5.962 5.825 9.76 9.893 11.002 3.71 1.134 7.526.085 10.245-3.12Z"
      />
    </Svg>
  );
};
export default SvgAnus;
