import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgNausea = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M25 14c.924 0 1.79-.25 2.532-.688L28.587 15H19a1.01 1.01 0 0 0-.138.01c-2.321.1-4.288 1.007-5.692 2.492-1.452 1.536-2.152 3.534-2.17 5.47-.018 1.938.648 3.96 2.112 5.519 1.238 1.318 2.917 2.168 4.888 2.426V41a3 3 0 0 0 5.985.298l.73-7.298h.57l.73 7.298A3 3 0 0 0 32 41V21h2a3 3 0 0 0 2.544-4.59l-5-8a2.991 2.991 0 0 0-1.933-1.347A5.001 5.001 0 0 0 20 9a5 5 0 0 0 5 5Zm0-2c.535 0 1.037-.14 1.472-.385l-.016-.025a3 3 0 0 1 1.073-4.205A3 3 0 1 0 25 12Zm4.848-2.53a1 1 0 0 0-1.696 1.06l3.087 4.94a1 1 0 0 1-.848 1.53H19.1a1.031 1.031 0 0 1-.066.004c-1.873.062-3.369.771-4.41 1.872-1.073 1.136-1.61 2.635-1.623 4.115-.013 1.48.495 2.987 1.57 4.131 1.04 1.108 2.552 1.814 4.462 1.874a1 1 0 0 1 .222.032c.294.002.575.007.841.012l.076.002c.316.006.605.011.878.012.6.001 1.035-.024 1.355-.097.306-.07.405-.159.448-.214.048-.062.148-.24.148-.716 0-.426-.106-.588-.17-.658-.078-.086-.24-.193-.6-.269-.36-.076-.82-.101-1.392-.1-.272 0-.553.007-.852.013h-.032c-.306.007-.63.014-.954.014a.999.999 0 0 1-.34-.06c-1.205-.125-2.06-.605-2.632-1.214-.685-.73-1.037-1.722-1.028-2.744.01-1.022.38-2.022 1.078-2.76.623-.66 1.557-1.161 2.863-1.239A1 1 0 0 1 20 20.01v5.003c.277-.006.559-.012.834-.012.6-.001 1.234.021 1.81.143.579.123 1.197.365 1.666.88.484.532.69 1.223.69 2.004 0 .73-.15 1.407-.57 1.946-.426.546-1.015.806-1.584.935-.555.125-1.183.147-1.8.146-.292 0-.599-.006-.91-.013L20 31.04V41a1 1 0 0 0 1.995.1l.82-8.2a1 1 0 0 1 .995-.9h2.38a1 1 0 0 1 .995.9l.82 8.2A1 1 0 0 0 30 41V20a1 1 0 0 1 1-1h3a1 1 0 0 0 .848-1.53l-5-8ZM18 21.272c-.203.105-.354.23-.469.351-.32.34-.526.843-.53 1.405-.006.56.188 1.04.485 1.356.116.123.279.257.514.368v-3.48Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgNausea);
export default ForwardRef;
