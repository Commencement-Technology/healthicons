import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgHappy = (passedProps: SvgProps) => {
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
        d="M24 40c8.837 0 16-7.163 16-16S32.837 8 24 8 8 15.163 8 24s7.163 16 16 16Zm0 2c9.941 0 18-8.059 18-18S33.941 6 24 6 6 14.059 6 24s8.059 18 18 18Z"
        fill="#000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.695 28c1.555 3.832 4.42 6 7.305 6 2.886 0 5.75-2.168 7.305-6h-14.61ZM24 36c-4.038 0-7.538-3.048-9.258-7.5a17.99 17.99 0 0 1-.05-.129C14.246 27.18 15.2 26 16.473 26h15.055c1.273 0 2.228 1.18 1.78 2.371a17.99 17.99 0 0 1-.049.129C31.538 32.952 28.038 36 24 36Z"
        fill="#000"
      />
      <Path
        d="M21.302 22.442c.13-.358.091-.795-.016-1.193a4.172 4.172 0 0 0-.61-1.28c-.581-.829-1.544-1.59-2.845-1.646-1.347-.056-2.353.799-2.973 1.706a5.56 5.56 0 0 0-.695 1.416c-.143.446-.219.902-.169 1.267a.5.5 0 0 0 .766.352c.4-.256.819-.607 1.207-.931.176-.148.347-.29.505-.415.562-.444 1-.697 1.362-.715.345-.017.743.18 1.245.556.18.134.354.276.534.424l.195.159c.244.197.504.399.766.557a.5.5 0 0 0 .728-.257ZM26.613 22.442c-.13-.358-.09-.795.017-1.193.112-.416.319-.863.61-1.28.58-.829 1.544-1.59 2.845-1.646 1.346-.056 2.353.799 2.973 1.706.314.46.548.958.695 1.416.142.446.218.902.168 1.267a.5.5 0 0 1-.765.352c-.4-.256-.82-.607-1.207-.931-.177-.148-.347-.29-.505-.415-.563-.444-1-.697-1.363-.715-.345-.017-.743.18-1.244.556-.18.134-.354.276-.534.424l-.196.159c-.244.197-.503.399-.765.557a.5.5 0 0 1-.729-.257Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgHappy;
