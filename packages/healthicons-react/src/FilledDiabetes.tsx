import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledDiabetes = (
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
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path
        fill="#333"
        d="M43 29.143c0 1.6-1.32 2.857-3 2.857s-3-1.257-3-2.857c0-1.6 3-5.143 3-5.143s3 3.657 3 5.143Z"
      />
      <path
        fill="#333"
        d="M24.153 17.783h17.719a2.128 2.128 0 0 1 0 4.256h-.004c.086-.167.133-.349.133-.539 0-.828-.896-1.5-2.001-1.498-1.105 0-2 .673-1.999 1.501 0 .19.047.37.132.537H25.111v1.064H32a2 2 0 0 1 2 2v.256a2 2 0 0 1-2 2h-6.889v1.064h5.778a2 2 0 0 1 2 2v.256a2 2 0 0 1-2 2h-8v1.064H27a2 2 0 0 1 2 2V36a2 2 0 0 1-2 2H15.456C9.13 38 4 32.871 4 26.544c0-4.655 2.816-8.847 7.125-10.606l12.887-5.262a2.308 2.308 0 0 1 1.832 4.236l-2.107.962c-.977.446-.659 1.91.416 1.91Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFilledDiabetes);
export default ForwardRef;
