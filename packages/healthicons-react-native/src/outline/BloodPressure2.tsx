import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBloodPressure2 = (passedProps: SvgProps) => {
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
      <Path d="m25 21.5-1.5 5 1.5 2 1.5-2-1.5-5Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34.001 17.633a16.926 16.926 0 0 1-2.606-1.614C29.852 14.846 28 12.948 28 10.448 28 8.221 29.684 6 32.188 6 33.35 6 34.29 6.464 35 7.157 35.709 6.464 36.65 6 37.813 6 40.316 6 42 8.223 42 10.448c0 2.423-1.861 4.323-3.389 5.503a18.043 18.043 0 0 1-2.61 1.667c.006 1.744.034 3.409.06 4.985.06 3.455.11 6.484-.099 8.985-.318 3.788-1.257 6.828-4.065 8.473-2.761 1.617-6.841 2.225-10.22 1.814-1.696-.206-3.315-.68-4.54-1.498-.891-.595-1.598-1.396-1.93-2.4-2.077-.095-4.143-.474-5.777-1.152-1.765-.732-3.43-2-3.43-3.985V13.122h.003A2.558 2.558 0 0 1 6 13c0-2.761 4.477-5 10-5s10 2.239 10 5c0 .04-.001.082-.003.122H26v5.949a7.001 7.001 0 0 1-.001 13.858c-.046 2.015-1.657 3.29-3.434 4.014-1.47.598-3.28.928-5.13 1.026.2.268.47.516.814.745.87.582 2.15.991 3.67 1.176 3.051.371 6.667-.208 8.968-1.555 1.911-1.12 2.775-3.255 3.082-6.914.201-2.402.152-5.262.095-8.638a357.718 357.718 0 0 1-.063-5.15ZM32.188 8C31.006 8 30 9.096 30 10.448c0 1.495 1.148 2.872 2.605 3.977a14.934 14.934 0 0 0 2.384 1.466 16.045 16.045 0 0 0 2.4-1.522C38.861 13.231 40 11.855 40 10.449 40 9.095 38.994 8 37.812 8c-.823 0-1.479.458-1.938 1.285L35 10.862l-.874-1.577C33.666 8.458 33.01 8 32.188 8ZM16 18c3.271 0 6.175-.785 8-2v3.07a7.001 7.001 0 0 0-.003 13.859c-.044.778-.673 1.545-2.186 2.161-1.525.621-3.632.933-5.8.909a20.927 20.927 0 0 1-.92-.031V17.98c.3.013.603.02.909.02Zm8-5c0 .215-.226.948-1.823 1.747C20.699 15.485 18.518 16 16 16s-4.7-.515-6.177-1.253C8.226 13.948 8 13.215 8 13c0-.215.226-.948 1.823-1.747C11.301 10.515 13.482 10 16 10s4.7.515 6.177 1.253C23.774 12.052 24 12.785 24 13Zm1 18a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
      />
    </Svg>
  );
};
export default SvgBloodPressure2;
