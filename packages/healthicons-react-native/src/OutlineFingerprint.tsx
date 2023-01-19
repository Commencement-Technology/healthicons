import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineFingerprint = (
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
        d="M24 6c-2 0-3.882.488-5.538 1.351a1 1 0 0 1-.924-1.773A13.944 13.944 0 0 1 24 4c3.086 0 5.942 1 8.257 2.693a1 1 0 1 1-1.181 1.614A11.941 11.941 0 0 0 24 6Zm9.632 3.212a1 1 0 0 1 1.404.172 13.96 13.96 0 0 1 2.425 4.758 1 1 0 0 1-1.922.55 11.96 11.96 0 0 0-2.08-4.076 1 1 0 0 1 .173-1.404Zm-19.674.472a1 1 0 0 1 .239 1.394A11.94 11.94 0 0 0 12 18v12a1 1 0 1 1-2 0V18c0-3.007.95-5.795 2.564-8.078a1 1 0 0 1 1.394-.238ZM37 17a1 1 0 0 1 1 1v12a13.95 13.95 0 0 1-3.231 8.947 1 1 0 0 1-1.538-1.28A11.95 11.95 0 0 0 36 30V18.001a1 1 0 0 1 1-1ZM12.902 36.847a1 1 0 0 1 1.398.219 12.031 12.031 0 0 0 5.79 4.283A11.98 11.98 0 0 0 24 42a1 1 0 1 1 0 2 13.99 13.99 0 0 1-4.562-.76 14.032 14.032 0 0 1-6.754-4.995 1 1 0 0 1 .218-1.398Zm18.875 3.62a1 1 0 0 1-.312 1.379 13.927 13.927 0 0 1-4.235 1.78 1 1 0 0 1-.46-1.947 11.928 11.928 0 0 0 3.628-1.525 1 1 0 0 1 1.379.312ZM14 18.235C14 12.765 19.014 9 24 9s10 3.765 10 9.235v10.309c0 .878-.17 1.813-.65 2.562-.514.802-1.351 1.327-2.46 1.327-1.083 0-1.964-.5-2.548-1.255-.569-.734-.842-1.683-.842-2.634v-9.307a3.68 3.68 0 0 0-1.034-2.568A3.442 3.442 0 0 0 24 15.62c-.92 0-1.807.374-2.466 1.05a3.68 3.68 0 0 0-1.034 2.568v11.616c0 2.67 1.336 5.14 4.328 6.205a1 1 0 0 1-.671 1.884c-3.9-1.388-5.657-4.696-5.657-8.09V19.238a5.68 5.68 0 0 1 1.602-3.964A5.442 5.442 0 0 1 24 13.62c1.467 0 2.869.598 3.898 1.654a5.68 5.68 0 0 1 1.602 3.964v9.307c0 .588.172 1.084.423 1.41.236.305.55.479.968.479.392 0 .61-.15.775-.407.2-.31.334-.82.334-1.482v-10.31C32 14.124 28.153 11 24 11c-4.153 0-8 3.123-8 7.235v12.549c0 1.063.159 2.123.465 3.01.312.901.743 1.535 1.223 1.875A1 1 0 1 1 16.53 37.3c-.946-.67-1.569-1.732-1.956-2.852-.391-1.133-.575-2.419-.575-3.665V18.236Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M24 18a1 1 0 0 1 1 1v9.787c0 2.258.548 3.766 1.468 4.713.914.942 2.36 1.5 4.532 1.5a1 1 0 1 1 0 2c-2.495 0-4.549-.645-5.968-2.107C23.62 33.437 23 31.338 23 28.787V19a1 1 0 0 1 1-1Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineFingerprint);
export default ForwardRef;
