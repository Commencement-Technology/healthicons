import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledMasked = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M18 30h12v2H18v-2Zm12 4H18v2h12v-2Zm-8.698-11.558c.13-.358.091-.795-.016-1.193a4.172 4.172 0 0 0-.61-1.28c-.581-.829-1.544-1.59-2.845-1.646-1.347-.056-2.353.799-2.973 1.706a5.56 5.56 0 0 0-.695 1.416c-.143.446-.219.902-.169 1.267a.5.5 0 0 0 .766.352c.4-.256.819-.607 1.207-.931.176-.148.347-.29.505-.415.562-.444 1-.697 1.363-.715.344-.017.742.18 1.244.556.18.134.353.276.534.424l.195.159c.244.197.504.399.766.557a.5.5 0 0 0 .728-.257Zm5.311 0c-.13-.358-.09-.795.017-1.193.112-.416.319-.863.61-1.28.58-.829 1.544-1.59 2.845-1.646 1.346-.056 2.353.799 2.973 1.706.314.46.548.958.695 1.416.142.446.218.902.168 1.267a.5.5 0 0 1-.765.352c-.4-.256-.82-.607-1.207-.931a24.93 24.93 0 0 0-.505-.415c-.563-.444-1-.697-1.363-.715-.345-.017-.743.18-1.244.556-.18.134-.354.276-.534.424l-.196.159a7.094 7.094 0 0 1-.765.557.5.5 0 0 1-.729-.257Z"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M41.852 26.315a17.953 17.953 0 0 1-5.335 10.62L36.5 37c-.187.162-.374.32-.564.473A17.932 17.932 0 0 1 24 42a17.92 17.92 0 0 1-10.875-3.655c-.38-.267-.755-.549-1.125-.845l-.039-.118a17.965 17.965 0 0 1-5.792-10.904c-.902-.656-1.677-1.582-1.834-2.864-.194-1.59.612-3.345 2.434-5.296a1 1 0 0 1 .203-.168C9.4 11.08 16.107 6 24 6c7.984 0 14.754 5.198 17.11 12.395 1.771 1.92 2.554 3.65 2.362 5.219-.144 1.179-.812 2.057-1.62 2.701ZM14.31 36.732c6.38 4.468 14.025 4.323 20.332-.783l.081-.073c.41-1.665.6-2.88.567-4.037-.03-1.042-.242-2.131-.755-3.531-4.117-.863-7.348-1.296-10.54-1.308-3.17-.011-6.378.393-10.444 1.279-.448 1.487-.636 2.644-.632 3.752.005 1.217.242 2.494.777 4.21.2.168.405.332.614.491Zm-3.316-3.412c-.18-1.622-.036-3.135.451-4.948a19.215 19.215 0 0 1-.913-.166c-.625-.13-1.37-.318-2.12-.588a15.925 15.925 0 0 0 2.582 5.702Zm24.524-6.848c-8.94-1.919-14.151-2.01-23.116.013a17.037 17.037 0 0 1-1.464-.237c-.91-.19-1.988-.494-2.886-.957A16.22 16.22 0 0 1 8 24c0-8.837 7.164-16 16-16 8.837 0 16 7.163 16 16 0 .398-.014.792-.043 1.183l-.012.007c-.933.52-2.1.855-3.075 1.057a17.037 17.037 0 0 1-1.353.225Zm1.138 1.852c.547 1.693.716 3.113.605 4.632a15.917 15.917 0 0 0 2.347-5.416 15.57 15.57 0 0 1-2.33.666c-.221.046-.43.085-.622.118Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFilledMasked);
export default ForwardRef;
