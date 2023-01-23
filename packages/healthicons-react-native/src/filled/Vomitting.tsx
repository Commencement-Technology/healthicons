import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgVomitting = (passedProps: SvgProps) => {
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
        d="m18.976 32.101.005-.008a.046.046 0 0 1-.005.008ZM29.024 32.101l-.005-.008.005.008Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36.093 37.333A17.954 17.954 0 0 0 42 24c0-9.941-8.059-18-18-18S6 14.059 6 24c0 5.286 2.279 10.04 5.907 13.333a3.44 3.44 0 0 0-.145.124c-.395.357-.762.875-.762 1.543 0 .986.775 1.64 1.434 2.029.726.429 1.71.78 2.838 1.063C17.544 42.659 20.63 43 24 43c3.37 0 6.456-.34 8.728-.908 1.128-.283 2.112-.634 2.838-1.063C36.225 40.639 37 39.986 37 39c0-.668-.367-1.186-.763-1.543a3.374 3.374 0 0 0-.144-.124ZM40 24c0 4.968-2.265 9.408-5.818 12.343-.89-.319-1.971-.586-3.182-.796v-.382c.637-.79 1-1.698 1-2.665 0-3.038-3.582-5.5-8-5.5s-8 2.462-8 5.5c0 .967.363 1.875 1 2.665v.383c-1.21.21-2.292.476-3.182.795A15.967 15.967 0 0 1 8 24c0-8.837 7.163-16 16-16s16 7.163 16 16Zm-15.991 7.125h-.018c-.334 0-.666.008-.991.024V37a1 1 0 1 1-2 0v-5.634a9.389 9.389 0 0 0-.857.191c-.511.142-.854.299-1.046.436a.774.774 0 0 0-.097.08v5.194l-.857.124c-1.752.253-3.157.61-4.098 1.008-.473.201-.775.39-.941.541a1.01 1.01 0 0 0-.062.06c.057.063.174.167.41.307.488.289 1.262.583 2.305.844C17.83 40.67 20.743 41 24 41c3.257 0 6.171-.331 8.243-.849 1.043-.26 1.817-.555 2.305-.844.236-.14.353-.244.41-.307a1.01 1.01 0 0 0-.062-.06c-.166-.15-.468-.34-.941-.54-.94-.4-2.346-.756-4.098-1.009L29 37.267v-5.194a.774.774 0 0 0-.097-.08c-.192-.137-.535-.294-1.046-.436a9.389 9.389 0 0 0-.857-.191V37a1 1 0 1 1-2 0v-5.85a20.22 20.22 0 0 0-.991-.025Zm-5.033.976.005-.008a.046.046 0 0 1-.005.008Zm10.048 0-.005-.008.005.008Z"
        fill="#333"
      />
      <Path
        d="M15.241 20.349a1 1 0 0 1 1.314-.181l3 2a1 1 0 0 1 0 1.664l-3 2a1 1 0 0 1-1.267-1.534c.724-.734.825-1.08.824-1.26-.002-.202-.129-.574-.85-1.363a1 1 0 0 1-.02-1.326ZM31.445 20.168a1 1 0 0 1 1.293 1.507c-.721.789-.848 1.161-.85 1.363-.001.18.1.526.824 1.26a1 1 0 0 1-1.267 1.534l-3-2a1 1 0 0 1 0-1.664l3-2Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgVomitting;
