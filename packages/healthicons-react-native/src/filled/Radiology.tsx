import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgRadiology = (passedProps: SvgProps) => {
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
        d="M6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9Zm22.5 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM13 22a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1h-5c0-.597-.273-1.14-.57-1.556a5.734 5.734 0 0 0-1.18-1.189c-.629-.48-1.425-.914-2.25-1.123v-2.985h1.4c.99 0 2.237.395 3.312.848a18.804 18.804 0 0 1 1.76.855l.022.013.005.002L32 32c.501-.865.501-.865.5-.866l-.003-.002-.01-.005-.032-.018a12.884 12.884 0 0 0-.535-.288 20.84 20.84 0 0 0-1.432-.67c-1.125-.473-2.679-1.005-4.088-1.005H25V27h.8c.749 0 1.685.215 2.485.457a17.054 17.054 0 0 1 1.311.458l.016.007.004.001L30 27l.384-.923-.003-.002-.007-.003-.025-.01a19.074 19.074 0 0 0-1.484-.52c-.85-.257-2.014-.542-3.065-.542H25v-2h-2v2h-1.1c-1.2 0-2.292.284-3.069.556a10.472 10.472 0 0 0-1.206.511 5.33 5.33 0 0 0-.076.04l-.023.012-.007.004-.003.002s-.002 0 .484.875l.485.874.007-.003.046-.024a8.423 8.423 0 0 1 .956-.403C20.142 27.216 21 27 21.9 27H23v2.146h-1.8c-1.61 0-3.065.53-4.088 1.028a11.915 11.915 0 0 0-1.584.932l-.097.07-.028.022-.009.006-.003.003h-.001c0 .001-.001.002.61.793s.611.792.61.792l.014-.01.065-.047a9.941 9.941 0 0 1 1.3-.763c.876-.428 2.02-.825 3.211-.825H23v3.017a6.9 6.9 0 0 0-2.273 1.134 5.536 5.536 0 0 0-1.166 1.162c-.297.413-.561.947-.561 1.54h-5a1 1 0 0 1-1-1V22Zm13.97 15.899A.39.39 0 0 1 27 38h-6c0-.002.002-.034.028-.1.028-.07.077-.162.158-.274.163-.227.416-.483.744-.73.658-.495 1.46-.84 2.104-.896.553.013 1.325.328 2.002.845.332.253.595.521.766.761.085.119.138.218.168.293Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgRadiology;