import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgWaterSanitation = (passedProps: SvgProps) => {
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
        d="M42 6v6H23V8a2 2 0 0 1 2-2h17ZM25 8h15v2H25V8ZM13 39.75v.246a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V29.001a2 2 0 0 1 2-2h3a2 2 0 0 1 1.947 1.539c1.324-.477 2.871-1.045 3.344-1.261.402-.183.866-.245 1.252-.268a9.059 9.059 0 0 1 1.195.021 14.456 14.456 0 0 1 1.328.168l.023.004.007.001h.003l.018.004 6.69 1.5.041.014.011.004.046.014a12.764 12.764 0 0 0 .874.223c.575.125 1.3.242 1.975.242.624 0 1.27.233 1.614.865.296.542.227 1.138.117 1.55-.139.514-.425 1.054-.788 1.513.49-.185 1.027-.404 1.603-.64l.123-.05c1.623-.667 3.547-1.457 5.245-1.737 1.94-.321 3.351.383 3.991 1.632.57 1.112.438 2.571-.42 3.45-.215.221-.543.453-.872.666-.352.229-.785.486-1.266.76a85.495 85.495 0 0 1-3.355 1.782c-2.372 1.203-4.858 2.373-5.648 2.662-.916.335-1.9.367-2.845.318a37.896 37.896 0 0 1-1.709-.145c-.43-.043-.857-.085-1.25-.115-1.928-.146-3.408-.617-4.77-1.05l-.166-.053c-1.408-.446-2.718-.843-4.453-.913-.396-.016-1.188.014-1.905.048Zm4.12-10.651c.065-.03.235-.073.538-.091.284-.017.608-.006.925.018a12.572 12.572 0 0 1 1.068.131l.036.007.028.005h.003l6.567 1.473.045.014a14.864 14.864 0 0 0 1.023.262c.585.128 1.37.262 2.169.285a2.394 2.394 0 0 1-.285.543c-.16.232-.335.411-.479.514-.416.298-.752.422-.956.475a1.335 1.335 0 0 1-.212.04h-.022l-5.362-.064-.19 1.984.178-.984-.178.984.053.01.153.027.556.098c.467.082 1.108.192 1.806.306 1.374.224 3.03.472 3.97.529.65.04 1.406-.16 2.109-.395.733-.245 1.562-.584 2.396-.926 1.717-.704 3.466-1.421 4.935-1.664 1.27-.21 1.723.254 1.885.571.233.455.107.96-.072 1.142-.043.045-.2.172-.528.385-.306.197-.701.434-1.165.697a83.855 83.855 0 0 1-3.272 1.738c-2.392 1.213-4.772 2.326-5.432 2.568-.534.196-1.195.243-2.054.199-.508-.026-.99-.075-1.515-.129a52.37 52.37 0 0 0-1.396-.128c-1.692-.128-2.978-.537-4.357-.975l-.125-.04c-1.428-.453-2.956-.924-4.977-1.005-.455-.018-1.265.01-1.986.044v-7.101c1.405-.503 3.487-1.258 4.12-1.547Zm2.796-.91.183-.983-.183.983ZM11 29H8v10.995h3V29.001Z"
      />
      <Path d="M24 14a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-6ZM27 18.172a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1ZM31.121 18.293a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 1 0 1.415-1.414l-1.415-1.414ZM21.293 21.293a1 1 0 0 1 0-1.414l1.414-1.415a1 1 0 0 1 1.414 1.415l-1.414 1.414a1 1 0 0 1-1.414 0ZM28 24.172a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0v-1ZM33.207 21.793a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 0 1-1.414 1.414l-1.414-1.414a1 1 0 0 1 0-1.414ZM17.793 23.129a1 1 0 0 0 1.414 1.414l1.414-1.414a1 1 0 1 0-1.414-1.415l-1.414 1.415Z" />
    </Svg>
  );
};
export default SvgWaterSanitation;
