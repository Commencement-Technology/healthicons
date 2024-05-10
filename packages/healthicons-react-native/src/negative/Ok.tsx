import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgOk = (passedProps: SvgProps) => {
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
      <G
        clipPath="url(#ok_svg__a)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#000"
      >
        <Path d="M40 24c0 8.837-7.163 16-16 16S8 32.837 8 24 15.163 8 24 8s16 7.163 16 16Zm-18.698-.892c.13-.358.091-.795-.016-1.193a4.172 4.172 0 0 0-.61-1.28c-.581-.829-1.544-1.591-2.845-1.646-1.347-.056-2.353.799-2.973 1.706a5.56 5.56 0 0 0-.695 1.416c-.143.446-.219.902-.169 1.267a.5.5 0 0 0 .766.352c.4-.256.819-.607 1.207-.931.176-.148.347-.29.505-.415.562-.444 1-.697 1.362-.715.345-.017.743.18 1.245.556.18.134.354.276.534.424l.195.159c.244.197.504.399.765.557a.5.5 0 0 0 .73-.257Zm5.311 0c-.13-.358-.09-.795.017-1.193.112-.416.319-.863.61-1.28.58-.829 1.544-1.591 2.845-1.646 1.346-.056 2.353.799 2.973 1.706.314.46.548.958.695 1.416.142.446.218.902.168 1.267a.5.5 0 0 1-.765.352c-.4-.256-.82-.607-1.207-.93a24.08 24.08 0 0 0-.505-.416c-.563-.444-1-.697-1.363-.715-.345-.017-.743.18-1.244.556-.18.134-.354.276-.534.424l-.196.159a7.15 7.15 0 0 1-.765.557.5.5 0 0 1-.729-.257Zm4.474 7.326c-.167.394-.439.773-.772 1.12C29.022 32.9 26.757 34 24.013 34c-2.737 0-5.037-1.096-6.31-2.455a3.966 3.966 0 0 1-.753-1.102c-.16-.366-.271-.832-.151-1.306.136-.54.535-.927 1.052-1.082.453-.136.94-.082 1.388.044 2.353.614 3.5.888 4.638.893 1.135.005 2.308-.258 4.704-.894l.014-.004c.493-.123.997-.168 1.454-.05.496.13.946.462 1.135 1.016.17.498.064.994-.097 1.374Z" />
        <Path d="M48 0H0v48h48V0Zm-6 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6s18 8.059 18 18Z" />
      </G>
      <Defs>
        <ClipPath id="ok_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgOk;
