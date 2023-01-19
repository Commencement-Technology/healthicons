import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineMan = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M28.5 8.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM19.977 15c-1.16 0-2.313.262-3.352.892-1.037.627-1.783 1.51-2.303 2.478-.985 1.83-1.26 4.146-1.26 6.456v.088c0 .03.001.059.004.088l.008.088c.006.075.011.327.005.92l-.005.416v.002c-.005.452-.012.99-.012 1.572A3 3 0 0 0 17 30.85V41a3 3 0 0 0 5.988.272L23.83 32h.338l.843 9.272A3 3 0 0 0 31 41V30.83A3 3 0 0 0 35 28c0-.58-.007-1.118-.012-1.57v-.004l-.005-.416c-.006-.593-.002-.845.005-.92l.008-.088a.992.992 0 0 0 .004-.088v-.088c0-2.31-.276-4.625-1.26-6.456-.52-.967-1.266-1.851-2.303-2.478-1.04-.63-2.192-.892-3.353-.892h-8.107Zm-3.915 14a1 1 0 0 0 .938-.652V21.5h2V41a1 1 0 0 0 1.996.09l.926-10.18a1 1 0 0 1 .995-.91h2.166a1 1 0 0 1 .996.91l.925 10.18A1 1 0 0 0 29 41V21.5h2v6.523A1 1 0 0 0 33 28c0-.569-.007-1.096-.012-1.55v-.012a283.623 283.623 0 0 0-.005-.407 14.39 14.39 0 0 1 .013-1.117L33 24.87v-.044c0-2.212-.275-4.121-1.022-5.509-.382-.711-.899-1.304-1.577-1.714-.678-.411-1.46-.603-2.317-.603h-8.107c-.856 0-1.638.192-2.317.603-.678.41-1.194 1.003-1.577 1.714-.746 1.388-1.021 3.297-1.021 5.51v.043l.004.044c.017.195.019.56.013 1.117l-.005.419c-.005.453-.012.981-.012 1.55a1 1 0 0 0 1 1Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineMan);
export default ForwardRef;
