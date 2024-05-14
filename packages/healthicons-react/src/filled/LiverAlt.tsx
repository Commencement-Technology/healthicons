import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgLiverAlt = (
  passedProps: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => {
  const context = React.useContext(HealthIconsContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 48 48"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36.58 6.754C37.424 6.315 38.243 6 38.948 6c.828 0 1.593.25 2.188.828.61.593.864 1.379.864 2.224 0 1.655-.233 3.292-.696 4.908-.456 1.592-1.037 3.002-1.749 4.22a21.795 21.795 0 0 1-2.235 3.175c-.792.926-1.565 1.666-2.322 2.191-.703.488-1.46.868-2.205.868-.84 0-1.657-.388-2.42-.948-.777-.571-1.511-1.323-2.206-2.235-.735-.964-1.33-2.165-1.804-3.574a14.049 14.049 0 0 1-.725-4.502c0-.353.01-.662.039-.902a2.93 2.93 0 0 1 .307-.956c.26-.522.712-.84 1.213-1.001.438-.14.949-.193 1.493-.193.765 0 1.65-.178 2.667-.573 1.054-.41 1.95-.852 2.697-1.324a34.596 34.596 0 0 1 2.526-1.452ZM12.14 14.823c1.883-1 3.936-1.495 6.144-1.495.474 0 .854.005 1.131.017.27.01.648.033 1.131.065.515.034.981.1 1.366.218.334.103.675.24 1.022.408.449.217.84.534 1.109.974.255.42.37.887.37 1.37 0 1.014.24 2.095.748 3.25a13.065 13.065 0 0 0 2.086 3.276c.222.256.58.592 1.104 1.013.556.447 1.02.844 1.388 1.188a3.4 3.4 0 0 1 .543.631c.142.222.286.53.286.9 0 .86-.516 1.657-1.145 2.343a16.087 16.087 0 0 1-2.187 1.966 56.784 56.784 0 0 0-2.676 2.173c-1.008.862-1.817 1.653-2.437 2.372a10.49 10.49 0 0 0-1.53 2.5c-.454 1.02-.754 1.802-.917 2.36a6.217 6.217 0 0 1-.298.838c-.05.107-.124.25-.23.382-.07.084-.357.428-.864.428-.907 0-1.89-.423-2.89-1.051-1.043-.657-2.092-1.564-3.148-2.698a31.427 31.427 0 0 1-2.98-3.758c-.962-1.415-1.743-2.996-2.346-4.739C6.31 27.995 6 26.271 6 24.586c0-2.05.557-3.953 1.664-5.684 1.102-1.723 2.602-3.084 4.477-4.08Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgLiverAlt);
export default ForwardRef;
