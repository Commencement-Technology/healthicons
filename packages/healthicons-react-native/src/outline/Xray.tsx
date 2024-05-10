import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgXray = (passedProps: SvgProps) => {
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
        d="M29 9a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm-2 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <Path d="M17 41v-7h2v7a1 1 0 0 0 1 1h.087a1 1 0 0 0 .995-.91l.645-7.09h2.008l-.66 7.272a3.05 3.05 0 0 1-.097.53A3 3 0 0 1 20.086 44H20a3 3 0 0 1-3-3ZM26.917 41.09 26.272 34h-2.008l.661 7.272a3.05 3.05 0 0 0 .097.53A3 3 0 0 0 27.913 44H28a3 3 0 0 0 3-3v-7h-2v7a1 1 0 0 1-1 1h-.087a1 1 0 0 1-.996-.91Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 15a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V16a1 1 0 0 0-1-1H11Zm1 2v13h7.5c0-.558.26-1.043.528-1.4a4.884 4.884 0 0 1 1.051-.998A6.31 6.31 0 0 1 23 26.668V24.5h-.8c-.603 0-1.447.364-2.257.855a12.459 12.459 0 0 0-1.285.898l-.015.013-.003.002L18 25.5l-.64-.768.001-.002.003-.002.007-.006.026-.02a13.105 13.105 0 0 1 .411-.318c.27-.2.653-.47 1.099-.74.84-.508 2.096-1.144 3.293-1.144h.8v-2h-.5c-.57 0-1.31.2-1.97.44a12.378 12.378 0 0 0-1.069.447l-.012.007h-.002L19 20.5l-.447-.895.003-.001.007-.003.021-.011a9.143 9.143 0 0 1 .346-.16c.227-.1.546-.235.916-.37.713-.26 1.723-.56 2.654-.56h.5V17H12Zm13 7.5h1.1c.749 0 1.519.366 2.163.819a7.037 7.037 0 0 1 .986.841l.008.01.743-.67.743-.67-.002-.001-.002-.003-.007-.008-.022-.023a7.788 7.788 0 0 0-.343-.34 9.053 9.053 0 0 0-.955-.774c-.78-.547-1.96-1.181-3.312-1.181H25v-2h.75c.694 0 1.37.201 1.893.422a6.194 6.194 0 0 1 .8.408l.003.002L29 20.5l.554-.832-.001-.001-.003-.002-.007-.005-.02-.013a6.165 6.165 0 0 0-.297-.177 8.163 8.163 0 0 0-.807-.392c-.663-.28-1.613-.578-2.669-.578H25V17h11v13h-7.5c0-.562-.268-1.055-.536-1.413a5.046 5.046 0 0 0-1.063-1.02A5.926 5.926 0 0 0 25 26.638V24.5Zm1.493 5.5a.98.98 0 0 0-.129-.212 3.07 3.07 0 0 0-.64-.604c-.576-.42-1.23-.672-1.692-.684-.544.046-1.227.325-1.787.727-.28.2-.49.404-.62.577a.885.885 0 0 0-.119.196h4.987Z"
      />
    </Svg>
  );
};
export default SvgXray;
