import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativePediatricSurgery = (
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
        d="M48 0H0v48h48V0ZM20.986 16.46c2.88 0 5.215-2.342 5.215-5.23 0-2.888-2.335-5.23-5.215-5.23s-5.216 2.342-5.216 5.23c0 2.888 2.335 5.23 5.216 5.23Zm-11.77-1.3-.01-.021-.011-.021a2.286 2.286 0 0 1-.194-.98c.01-.391.126-.758.448-1.081.415-.416.748-.508.996-.524.294-.018.652.067 1.066.272.01.007.08.051.22.187.158.153.342.36.579.644.095.114.199.24.31.377.403.492.906 1.105 1.465 1.681 1.49 1.537 3.655 3.119 6.915 3.119 3.26 0 5.425-1.582 6.915-3.119a26.689 26.689 0 0 0 1.465-1.681c.11-.136.215-.263.31-.377.237-.283.421-.491.579-.644.14-.136.21-.18.22-.187.414-.206.772-.29 1.066-.272.248.016.58.108.995.524.323.323.44.69.45 1.082.01.432-.116.82-.195.979l-.01.02-.01.022c-1.566 3.364-3.39 5.212-5.507 6.134l-1.048.457V25.5H15.77v-3.75l-1.048-.457c-2.117-.922-3.941-2.77-5.507-6.134ZM15.77 27.5v1.224c0 .637.596 2.27 2.427 3.054.21.09.445.202.656.303l.125.06c.26.123.511.24.766.343.53.216.945.32 1.255.32.31 0 .724-.104 1.255-.32.255-.104.506-.22.766-.344l.125-.06c.211-.1.447-.212.656-.302 1.83-.783 2.428-2.417 2.428-3.054V27.5H15.77Zm1.99 6.287a5.031 5.031 0 0 1-2.393-2.406c-1.796 1.532-2.793 3.488-2.793 6.136 0 .978.191 2.446.688 3.635.51 1.218 1.193 1.848 2.057 1.848.926 0 1.71-.776 1.71-1.775 0-.444-.171-.864-.443-1.488l-.018-.042c-.246-.565-.572-1.31-.572-2.178 0-.948.43-1.955.93-2.77a3.82 3.82 0 0 1 .835-.96Zm6.478 0a5.031 5.031 0 0 0 2.393-2.406c1.796 1.532 2.793 3.488 2.793 6.136 0 .978-.191 2.446-.688 3.635C28.228 42.37 27.545 43 26.681 43c-.926 0-1.71-.776-1.71-1.775 0-.444.171-.864.443-1.488l.018-.042c.246-.565.572-1.31.572-2.178 0-.948-.43-1.955-.93-2.77a3.816 3.816 0 0 0-.835-.96ZM36 31v7s3.114-2.336 3.847-7.006C40.018 29.902 39.105 29 38 29a2 2 0 0 0-2 2Zm.188-3.773L39 24.414V26.5a1.5 1.5 0 0 1-2.813.727ZM39 21.586v-2.172l-3 3v2.172l3-3Zm-3-2 3-3V12.5a1.5 1.5 0 0 0-3 0v7.086Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgNegativePediatricSurgery);
export default ForwardRef;
