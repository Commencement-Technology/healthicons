import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBabyFemale0203M = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
      ref={ref}
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 11a5.002 5.002 0 0 1-4 4.9V18h2a1 1 0 1 1 0 2h-2v3a1 1 0 1 1-2 0v-3H8a1 1 0 1 1 0-2h2v-2.1A5.002 5.002 0 0 1 11 6a5 5 0 0 1 5 5Zm-2 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        fill="#333"
      />
      <Path
        d="M30 17a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11ZM40.48 21.429a2 2 0 0 0-.96-3.883c-3.813.943-6.687 1.367-9.513 1.356-2.831-.01-5.713-.458-9.549-1.361a2 2 0 1 0-.916 3.893c1.974.465 3.76.827 5.458 1.075V24h10v-1.464c1.702-.247 3.496-.616 5.48-1.107ZM25 28v-2h10v2H25ZM26.435 33.856c-1.182-.537-1.976-1.349-2.454-2.157-1.552 1.351-2.406 3.05-2.406 5.29 0 .894.191 2.236.688 3.323.509 1.113 1.192 1.688 2.056 1.688.926 0 1.71-.71 1.71-1.622 0-.406-.171-.79-.443-1.36l-.018-.038c-.246-.516-.571-1.198-.571-1.99 0-.867.43-1.787.93-2.532.16-.24.33-.434.508-.602ZM33.565 33.856c1.182-.537 1.977-1.35 2.454-2.157 1.552 1.351 2.406 3.05 2.406 5.29 0 .894-.191 2.236-.688 3.323C37.228 41.425 36.545 42 35.681 42c-.926 0-1.71-.71-1.71-1.622 0-.406.171-.79.443-1.36l.018-.038c.246-.516.572-1.198.572-1.99 0-.867-.43-1.787-.93-2.532a3.51 3.51 0 0 0-.509-.602ZM27.32 31.98A4.042 4.042 0 0 1 25.285 30h9.432a4.042 4.042 0 0 1-2.037 1.98c-.2.089-.425.2-.627.301l-.12.06c-.248.122-.489.238-.732.341-.508.215-.903.318-1.2.318-.297 0-.692-.103-1.2-.318-.243-.103-.484-.219-.733-.342l-.119-.059c-.202-.1-.427-.212-.627-.301Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgBabyFemale0203M);
export default ForwardRef;
