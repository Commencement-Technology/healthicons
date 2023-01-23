import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgJoints = (passedProps: SvgProps) => {
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
        d="M20 4a1 1 0 0 1 1 1v8.343a5 5 0 0 1-1.465 3.536l-.503.504a2.287 2.287 0 0 0 2.64 3.663l.242-.121a4.663 4.663 0 0 1 4.171 0l.243.12a2.287 2.287 0 0 0 2.64-3.662l-.503-.504A5 5 0 0 1 27 13.343V5a1 1 0 1 1 2 0v1.704C36.509 8.87 42 15.794 42 24s-5.491 15.13-13 17.297V43a1 1 0 1 1-2 0v-8.343a5 5 0 0 1 1.465-3.536l.503-.504a2.287 2.287 0 0 0-2.64-3.663l-.242.121a4.663 4.663 0 0 1-4.171 0l-.243-.12a2.287 2.287 0 0 0-2.64 3.662l.503.504A5 5 0 0 1 21 34.657V43a1 1 0 1 1-2 0v-1.703C11.491 39.13 6 32.207 6 24c0-8.206 5.491-15.13 13-17.296V5a1 1 0 0 1 1-1Zm-1 4.797C12.612 10.897 8 16.91 8 24s4.612 13.104 11 15.203v-4.546a3 3 0 0 0-.879-2.121l-.504-.504a4.288 4.288 0 0 1 4.95-6.867l.242.121c.75.375 1.632.375 2.382 0l.242-.12a4.288 4.288 0 0 1 4.95 6.866l-.504.504a3 3 0 0 0-.879 2.12v4.547c6.388-2.1 11-8.113 11-15.203S35.388 10.896 29 8.797v4.546a3 3 0 0 0 .879 2.121l.504.504a4.288 4.288 0 0 1-4.95 6.867l-.242-.121a2.663 2.663 0 0 0-2.382 0l-.242.12a4.288 4.288 0 0 1-4.95-6.866l.504-.504a3 3 0 0 0 .879-2.12V8.796Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgJoints;
