import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledOutpatient = (
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
        d="M21.935 10.723a4.001 4.001 0 1 1-7.86-1.494c1.525.926 2.854 1.448 4.239 1.638 1.176.16 2.34.074 3.62-.144Zm-6.989-3.306a4.002 4.002 0 0 1 6.845 1.301c-1.262.225-2.251.298-3.206.167-1.08-.148-2.192-.568-3.64-1.468ZM14.5 15c-2.736 0-4.902 1.67-6.291 3.69C6.81 20.727 6 23.368 6 25.973c0 1.391.645 3.005 1.1 4.02A25.335 25.335 0 0 0 8 31.79V40a2 2 0 1 0 4 0V28.544c.292-2.408.978-4.59 1.763-6.374l.657 2.556a2 2 0 0 0 1.937 1.503H21.5a2 2 0 1 0 0-4h-3.592l-1.47-5.727A2 2 0 0 0 14.5 15ZM37 18a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M31.222 18.045a2 2 0 0 1 2.245 1.135l2.648 5.887H40a2 2 0 1 1 0 4h-5.179a2 2 0 0 1-1.824-1.18L31.563 24.7c-.457.842-.758 1.617-.949 2.422-.2.844-.288 1.765-.272 2.887.323.135.681.27 1.064.402.884.304 1.793.558 2.536.757l.37.099h.001a63 63 0 0 1 .587.158 8.6 8.6 0 0 1 .377.111l.009.003c.061.02.328.103.575.254.322.195.546.463.592.517l.006.007c.093.11.186.23.27.345.173.231.377.526.591.845.434.644.963 1.467 1.471 2.268a275.435 275.435 0 0 1 1.817 2.907l.168.272L39.07 40l1.705-1.047a2 2 0 0 1-3.41 2.093l-.162-.265a299.559 299.559 0 0 0-1.79-2.865A102.88 102.88 0 0 0 34 35.739c-.134-.2-.251-.37-.35-.51l-.334-.089-.411-.11a42.486 42.486 0 0 1-2.803-.838L30 34.156V42h-2v-7H17v7h-2V32h11.033a4.289 4.289 0 0 1-.257-.284c-.397-.482-.776-1.176-.776-2.05 0-4.702 1.268-7.621 2.813-9.396a7.578 7.578 0 0 1 2.173-1.748c.313-.165.587-.277.799-.35a4.422 4.422 0 0 1 .406-.12l.016-.004.008-.002h.003s.004-.001.425 1.954l-.421-1.955Zm2.867 17.31s-.013-.003-.034-.011a.495.495 0 0 1 .034.012Zm-.663-.43a.34.34 0 0 1-.01-.012l.01.012Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        d="M23.5 12c.828 0 1.5-1.12 1.5-2.5S24.328 7 23.5 7 22 8.12 22 9.5s.672 2.5 1.5 2.5Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFilledOutpatient);
export default ForwardRef;
