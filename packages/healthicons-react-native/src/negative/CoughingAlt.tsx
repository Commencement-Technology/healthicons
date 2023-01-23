import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgCoughingAlt = (passedProps: SvgProps) => {
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
        d="M0 0h48v48H0V0Zm25.963 22.02h-3.24v-.947h1.06c.714 0 1.399-.268 1.905-.746a2.499 2.499 0 0 0 .797-1.803V16.85c0 .07.438.029.647.01a.778.778 0 0 0 .58-.27c.12-.14.18-.317.17-.497a2.333 2.333 0 0 0-.276-.772l-.368-.888a67.443 67.443 0 0 1-.768-1.85s-.154-1.456-.292-1.95a6.554 6.554 0 0 0-2.47-3.333A7.145 7.145 0 0 0 19.636 6a7.075 7.075 0 0 0-3.964 1.197 6.509 6.509 0 0 0-2.493 3.16 6.149 6.149 0 0 0-.093 3.945 6.466 6.466 0 0 0 2.343 3.261v4.456h-2.826c-1.72-.004-3.375.63-4.61 1.768C6.76 24.925 6.045 26.475 6 28.107V42h26.996V29.053a6.502 6.502 0 0 0-.465-2.641 6.776 6.776 0 0 0-1.503-2.268A7.197 7.197 0 0 0 28.72 22.6a7.519 7.519 0 0 0-2.757-.58Zm-5.106 9.976a4.834 4.834 0 0 1-1.137-.182 3.147 3.147 0 0 1-.72-.305 3.147 3.147 0 0 1-.72.305 4.834 4.834 0 0 1-1.238.186h-.004c.066 1.87.093 4.294-.981 5.366-1.41 1.406-4.23 2.109-5.64.937-1.41-1.171.94-12.654 4.23-12.654 2.283 0 2.366 2.742 2.354 4.35H17.044a3.18 3.18 0 0 0 .676-.105c.143-.042.233-.086.28-.117V25h2v4.777c.047.03.137.075.28.117a2.85 2.85 0 0 0 .613.101c-.011-1.61.074-4.346 2.355-4.346 3.29 0 5.64 11.483 4.23 12.654-1.41 1.172-4.23.469-5.64-.937-1.075-1.072-1.047-3.5-.98-5.37ZM17 30.241v-.075l.001.704a15.002 15.002 0 0 1 0-.628ZM25 18a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-4 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm3 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm1 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm7-2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-5 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-9 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgCoughingAlt;
