import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgLiverAlt = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M48 0H0v48h48V0Zm-9.052 6c-.705 0-1.524.315-2.368.754-.849.44-1.69.925-2.526 1.452-.747.472-1.643.915-2.697 1.324-1.017.395-1.902.573-2.667.573-.544 0-1.055.052-1.492.193-.502.16-.953.48-1.214 1.001a2.93 2.93 0 0 0-.307.956 8.16 8.16 0 0 0-.04.902c0 1.558.242 3.06.726 4.502.474 1.41 1.069 2.61 1.804 3.574.695.912 1.429 1.664 2.207 2.235.762.56 1.58.948 2.42.948.743 0 1.5-.38 2.204-.868.757-.524 1.53-1.265 2.322-2.191a21.795 21.795 0 0 0 2.235-3.175c.712-1.218 1.293-2.628 1.75-4.22.462-1.616.695-3.253.695-4.908 0-.845-.254-1.631-.864-2.224C40.54 6.25 39.776 6 38.948 6Zm-20.663 7.328c-2.208 0-4.261.495-6.144 1.495-1.875.995-3.375 2.356-4.477 4.08A10.364 10.364 0 0 0 6 24.585c0 1.685.312 3.41.92 5.168.604 1.743 1.385 3.324 2.347 4.74a31.427 31.427 0 0 0 2.98 3.757c1.056 1.134 2.105 2.041 3.149 2.698.999.628 1.982 1.051 2.889 1.051.507 0 .795-.344.864-.428.106-.132.18-.275.23-.382.105-.225.203-.515.298-.838.163-.558.463-1.34.916-2.36a10.49 10.49 0 0 1 1.531-2.5c.62-.719 1.43-1.51 2.437-2.372a56.784 56.784 0 0 1 2.676-2.173 16.087 16.087 0 0 0 2.188-1.966c.628-.686 1.144-1.482 1.144-2.343 0-.37-.144-.678-.286-.9a3.4 3.4 0 0 0-.543-.631c-.367-.344-.832-.74-1.388-1.188-.523-.42-.882-.757-1.104-1.013a13.065 13.065 0 0 1-2.086-3.275c-.509-1.156-.748-2.237-.748-3.252a2.6 2.6 0 0 0-.37-1.37c-.268-.44-.66-.756-1.11-.973a7.306 7.306 0 0 0-1.021-.408c-.385-.118-.851-.184-1.366-.218a48.74 48.74 0 0 0-1.13-.066 28.851 28.851 0 0 0-1.133-.016Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgLiverAlt);
export default ForwardRef;
