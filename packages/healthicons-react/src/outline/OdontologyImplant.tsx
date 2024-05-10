import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgOdontologyImplant = (
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
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.59 10.165c4.362-4.812 9.73-5.841 15.91-1.031 0 0 9.716-6.702 16.078 0 4.12 4.341 2.14 8.877.233 13.242-1.036 2.373-2.05 4.696-2.05 6.91-.483.846-4.652 1.296-9.663 1.433l-12.65 4.554-.4-1.73 7.748-2.79a134.21 134.21 0 0 1-5.42-.174l-2.78 1.001-.03-.13a1.987 1.987 0 0 1 .042-1.06c-3.027-.256-5.17-.634-5.383-1.104 0-2.564-.855-5.232-1.685-7.82-1.368-4.263-2.665-8.307.05-11.301Zm14.682.547c.055.043.112.083.17.12l6.46 4.712a1 1 0 1 0 1.178-1.616l-4.833-3.526c.215-.126.481-.275.79-.435.923-.478 2.194-1.04 3.62-1.41 2.866-.746 5.996-.653 8.47 1.954 1.29 1.359 1.764 2.636 1.856 3.864.097 1.296-.22 2.701-.807 4.303-.29.794-.632 1.598-.998 2.438-.063.148-.128.296-.194.446l-.001.003c-.302.69-.615 1.408-.9 2.117-.54 1.342-1.047 2.815-1.24 4.34a6.952 6.952 0 0 1-.088.02c-.715.165-1.752.311-3.053.427-2.585.23-5.97.321-9.373.29-3.402-.03-6.765-.183-9.302-.43-1.208-.116-2.18-.25-2.865-.39-.139-1.51-.487-2.988-.882-4.375-.257-.904-.544-1.8-.818-2.652l-.013-.043c-.272-.848-.53-1.65-.755-2.435-.954-3.331-1.012-5.393.378-6.926 1.963-2.166 3.969-3.281 5.984-3.476 2.006-.194 4.397.486 7.216 2.68Zm14.205 17.105s-.01.007-.037.02a.284.284 0 0 1 .037-.02Zm-26.072-.08.006.002-.006-.003Z"
      />
      <path d="M33.095 32.92 16.3 38.966l-.4-1.73 17.585-6.33c.008.177-.008.36-.05.544l-.34 1.47ZM17.013 40.835l15.547-5.597-.471 2.044-13.05 4.698a3 3 0 0 1-2.026-1.145ZM31.554 39.6 24.889 42h3.724a3 3 0 0 0 2.924-2.325l.017-.074Z" />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOdontologyImplant);
export default ForwardRef;
