import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMsm = (passedProps: SvgProps) => {
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
        d="M19 9.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM9.55 21.23c.073-.433.153-.846.239-1.23H10v20.5a1.5 1.5 0 0 0 2.995.12l.85-10.62h2.31l.85 10.62A1.5 1.5 0 0 0 20 40.5V20h.52c.202.46.402.964.595 1.492a37.071 37.071 0 0 1 1.015 3.236c.126.48.223.899.287 1.228.032.165.054.299.068.4.012.09.015.134.015.144a1.5 1.5 0 0 0 3 0c0-.01.003-.054.015-.143.014-.102.036-.236.068-.4.064-.33.161-.749.287-1.229.251-.96.607-2.12 1.015-3.236.193-.528.393-1.032.595-1.492H28v20.5a1.5 1.5 0 0 0 2.995.12l.85-10.62h2.31l.85 10.62A1.5 1.5 0 0 0 38 40.5V20h.211c.086.384.166.797.24 1.23.387 2.257.549 4.67.549 5.27a1.5 1.5 0 0 0 3 0c0-.798-.182-3.384-.592-5.777-.205-1.193-.48-2.428-.854-3.397-.183-.476-.426-.983-.76-1.396-.324-.402-.918-.93-1.794-.93H28v.023c-.66.098-1.15.489-1.446.78-.374.368-.697.834-.972 1.3-.557.943-1.076 2.16-1.514 3.357l-.068.187a37.631 37.631 0 0 0-.068-.186c-.438-1.198-.957-2.415-1.514-3.358-.275-.466-.598-.932-.972-1.3-.296-.291-.787-.682-1.446-.78V15H10c-.876 0-1.47.527-1.794.93-.334.413-.577.92-.76 1.396-.374.969-.65 2.204-.854 3.397C6.182 23.116 6 25.703 6 26.5a1.5 1.5 0 0 0 3 0c0-.6.162-3.013.55-5.27ZM29 9.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgMsm;
