import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineGroupDiscussionMeeting = (
  passedProps: SvgProps,
  ref: Ref<SVGSVGElement>
) => {
  const context = React.useContext(HealthIconsContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M13.2 21s.816-.11 2-.426c3.122-.833 8.8-3.094 8.8-8.532A6.042 6.042 0 0 0 17.958 6h-5.916a6.042 6.042 0 1 0 0 12.083H13.2V21Zm2-4.917h-3.158a4.042 4.042 0 1 1 0-8.083h5.916A4.042 4.042 0 0 1 22 12.042c0 2.583-1.808 4.303-4.269 5.49a17.1 17.1 0 0 1-2.531.965v-2.414ZM14.5 32c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Zm2-4a1.999 1.999 0 1 1-4 0 1.999 1.999 0 1 1 4 0ZM6 38.267C6 35.429 11.663 34 14.5 34c2.837 0 8.5 1.43 8.5 4.267V42H6v-3.733ZM8 40v-1.733c0-.01 0-.03.026-.08.032-.062.105-.171.263-.317.329-.305.88-.638 1.643-.945 1.53-.615 3.4-.925 4.568-.925 1.167 0 3.039.31 4.568.925.762.307 1.314.64 1.643.945.158.146.231.255.263.316.026.05.026.072.026.08V40H8Zm29.5-12c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4Zm-4 2a1.999 1.999 0 1 0 0-4 1.999 1.999 0 1 0 0 4ZM25 38.267C25 35.429 30.663 34 33.5 34c2.837 0 8.5 1.43 8.5 4.267V42H25v-3.733ZM27 40v-1.733c0-.01 0-.03.026-.08.032-.062.105-.171.262-.317.33-.305.882-.638 1.644-.945 1.53-.615 3.4-.925 4.568-.925 1.167 0 3.039.31 4.568.925.762.307 1.314.64 1.644.945.157.146.23.255.262.316.026.05.026.072.026.08V40H27Zm6.6-18.494c1.17.368 2 .494 2 .494v-2.917h.358a6.042 6.042 0 1 0 0-12.083h-3.916A6.042 6.042 0 0 0 26 13.042c0 5.296 4.787 7.58 7.6 8.464Zm2.358-4.423H33.6v2.313a13.48 13.48 0 0 1-1.846-.82C29.67 17.445 28 15.748 28 13.041A4.042 4.042 0 0 1 32.042 9h3.916a4.042 4.042 0 1 1 0 8.083Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineGroupDiscussionMeeting);
export default ForwardRef;
