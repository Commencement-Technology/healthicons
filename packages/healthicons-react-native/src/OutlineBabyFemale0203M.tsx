import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineBabyFemale0203M = (
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
        d="M12 15.9A5.002 5.002 0 0 0 11 6a5 5 0 0 0-1 9.9V18H8a1 1 0 1 0 0 2h2v3a1 1 0 1 0 2 0v-3h2a1 1 0 1 0 0-2h-2v-2.1Zm2-4.9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm16 6a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Zm0-2a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M24.033 29.333A2.538 2.538 0 0 1 24 28.94v-5.165a61.311 61.311 0 0 1-3.76-.873 3 3 0 0 1 1.52-5.804c3.402.89 5.869 1.306 8.252 1.316 2.374.01 4.829-.382 8.193-1.307a3 3 0 0 1 1.59 5.786c-.897.246-1.757.464-2.589.652-.408.093-.81.178-1.206.256V29a2.636 2.636 0 0 1-.033.333c1.854 1.59 3.033 3.92 3.033 6.524 0 .887-.212 2.314-.762 3.553-.532 1.201-1.563 2.59-3.35 2.59-1.744 0-3.221-1.373-3.221-3.143 0-.738.3-1.392.504-1.833l.03-.068c.238-.519.355-.813.355-1.1 0-.288-.166-.77-.527-1.323a5.31 5.31 0 0 0-.674-.835c-.468.181-.928.302-1.355.302-.427 0-.887-.12-1.355-.302a5.31 5.31 0 0 0-.674.835c-.36.552-.527 1.035-.527 1.324 0 .294.116.582.352 1.092l.03.063c.205.441.507 1.092.507 1.845 0 1.77-1.477 3.143-3.222 3.143-1.793 0-2.833-1.304-3.374-2.523-.548-1.231-.737-2.663-.737-3.62 0-2.605 1.18-4.934 3.033-6.524Zm10.796-7.348a46.635 46.635 0 0 0 4.199-.956l.134-.037.103-.028a1 1 0 0 0-.53-1.928c-3.465.952-6.111 1.39-8.731 1.378-2.623-.01-5.274-.472-8.75-1.381a1 1 0 0 0-.507 1.934c1.597.419 3.05.75 4.425.991a1 1 0 0 1 .828.985V23h8v-.03a1 1 0 0 1 .829-.985ZM34 25h-8v2h8v-2ZM23 35.857c0-1.766.71-3.38 1.885-4.584a5.053 5.053 0 0 0 1.866 1.544c-.163.2-.316.41-.455.623-.441.676-.852 1.554-.852 2.417 0 .775.307 1.436.516 1.886l.021.046c.24.52.352.794.352 1.068 0 .597-.512 1.143-1.222 1.143-.62 0-1.136-.41-1.547-1.335-.405-.911-.564-2.05-.564-2.808Zm10.704-2.417a7.424 7.424 0 0 0-.455-.623 5.054 5.054 0 0 0 1.866-1.544C36.289 32.477 37 34.09 37 35.857c0 .651-.17 1.796-.59 2.743-.437.986-.962 1.4-1.521 1.4-.71 0-1.222-.546-1.222-1.143 0-.262.11-.539.353-1.069l.022-.048c.208-.452.514-1.118.514-1.883 0-.863-.41-1.741-.852-2.417Zm-5.977-2.46C26.81 30.498 26.275 29.694 26 29h8c-.275.694-.81 1.498-1.727 1.98-.17.089-.361.2-.533.301l-.1.06c-.212.122-.416.238-.622.341-.43.215-.766.318-1.018.318s-.587-.103-1.018-.318a11.09 11.09 0 0 1-.621-.342l-.101-.059c-.172-.1-.363-.212-.533-.301Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineBabyFemale0203M);
export default ForwardRef;
