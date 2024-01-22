import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSpine = (passedProps: SvgProps) => {
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
        d="M14.75 7.229c0-1.274 1.166-2.205 2.393-1.97 5.198.994 8.515 1.006 13.71.003 1.227-.237 2.397.694 2.397 1.97v.414H34a2 2 0 0 1 2 2v1.528a2 2 0 0 1-2 2h-.75v.878c0 .905-.61 1.706-1.498 1.931-2.854.727-5.224 1.101-7.65 1.1-2.424 0-4.856-.376-7.834-1.103a1.993 1.993 0 0 1-1.518-1.937v-.869H14a2 2 0 0 1-2-2V9.646a2 2 0 0 1 2-2h.75V7.23Zm2 0v.417a2 2 0 0 1-2 2H14v1.528h.75a2 2 0 0 1 2 2v.865c2.886.704 5.147 1.044 7.353 1.044 2.203.001 4.397-.336 7.147-1.035v-.874a2 2 0 0 1 2-2H34V9.646h-.75a2 2 0 0 1-2-2v-.414l-.002-.002a.023.023 0 0 0-.008-.004h-.008c-5.448 1.052-9.022 1.039-14.465-.003h-.008a.02.02 0 0 0-.007.004l-.002.002Z"
        fill="#000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 9a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1ZM14.75 20.229c0-1.274 1.166-2.205 2.393-1.97 5.198.994 8.515 1.006 13.71.003 1.227-.237 2.397.694 2.397 1.97v.414H34a2 2 0 0 1 2 2v1.528a2 2 0 0 1-2 2h-.75v.878c0 .905-.61 1.706-1.498 1.931-2.854.727-5.224 1.101-7.65 1.1-2.424 0-4.856-.376-7.834-1.103a1.993 1.993 0 0 1-1.518-1.936v-.87H14a2 2 0 0 1-2-2v-1.528a2 2 0 0 1 2-2h.75v-.417Zm2 0v.417a2 2 0 0 1-2 2H14v1.528h.75a2 2 0 0 1 2 2v.865c2.886.704 5.147 1.044 7.353 1.044 2.203.001 4.397-.336 7.147-1.035v-.874a2 2 0 0 1 2-2H34v-1.528h-.75a2 2 0 0 1-2-2v-.414l-.002-.002a.023.023 0 0 0-.008-.004h-.008c-5.448 1.052-9.022 1.039-14.465-.003h-.008a.02.02 0 0 0-.007.004l-.002.002Z"
        fill="#000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 22a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1ZM14.75 33.229c0-1.274 1.166-2.205 2.393-1.97 5.198.994 8.515 1.006 13.71.003 1.227-.237 2.397.694 2.397 1.97v.414H34a2 2 0 0 1 2 2v1.528a2 2 0 0 1-2 2h-.75v.878c0 .905-.61 1.706-1.498 1.931-2.854.727-5.224 1.101-7.65 1.1-2.424 0-4.856-.376-7.834-1.103a1.993 1.993 0 0 1-1.518-1.936v-.87H14a2 2 0 0 1-2-2v-1.528a2 2 0 0 1 2-2h.75v-.417Zm2 0v.417a2 2 0 0 1-2 2H14v1.528h.75a2 2 0 0 1 2 2v.865c2.886.704 5.147 1.044 7.353 1.044 2.203.001 4.397-.336 7.147-1.035v-.874a2 2 0 0 1 2-2H34v-1.528h-.75a2 2 0 0 1-2-2v-.414l-.002-.002a.023.023 0 0 0-.008-.004h-.008c-5.448 1.052-9.022 1.039-14.465-.003h-.008a.02.02 0 0 0-.007.004l-.002.002Z"
        fill="#000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 35a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgSpine;
