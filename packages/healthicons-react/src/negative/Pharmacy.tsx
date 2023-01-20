import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPharmacy = (
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
        d="M48 0H0v48h48V0ZM23.058 6c1.261 0 2.524.008 3.474.275.462.13.754.298.925.475.145.15.26.363.26.75a1 1 0 1 0 2 0c0-.863-.288-1.588-.822-2.14-.509-.527-1.173-.828-1.821-1.01C25.83 4 24.302 4 23.13 4h-.072c-1.945 0-3.43.513-4.513 1.442-1.073.92-1.639 2.155-1.936 3.393-.295 1.232-.34 2.535-.318 3.678.003.165.008.327.013.487H11c-.552 0-1.006.45-.943.998.616 5.38 6.16 9.642 13.058 9.98V32h2v-8.034a16.981 16.981 0 0 0 4.87-1.02c.01.115.015.234.015.357 0 1.036-.333 1.803-1.112 2.359-.594.423-1.512.77-2.888.94v2.013c1.72-.183 3.062-.62 4.05-1.325 1.408-1.004 1.95-2.442 1.95-3.987 0-.414-.039-.819-.123-1.208 3.367-1.804 5.68-4.732 6.066-8.097.063-.548-.39-.998-.943-.998H18.305a30.353 30.353 0 0 1-.014-.525c-.02-1.082.026-2.186.263-3.174.236-.983.643-1.783 1.293-2.341.64-.55 1.626-.96 3.21-.96ZM16 42h7.115v-6h2v6H26v-1.158l.03-.009c.445-.135.828-.356 1.103-.698.268-.334.505-.873.505-1.782 0-.908-.237-1.474-.519-1.842-.288-.376-.688-.627-1.14-.79a4.523 4.523 0 0 0-1.3-.244 4.884 4.884 0 0 0-.548.005l-.023.002h-.002l-.05.006h-.163c-1.668 0-3.55 0-5.013-.473-.774-.25-1.515-.656-2.058-1.333-.553-.69-.822-1.56-.822-2.588 0-1.027.27-1.896.823-2.583.543-.675 1.284-1.08 2.058-1.329.926-.298 2.018-.408 3.119-.448v2.002c-.967.037-1.818.128-2.506.35-.539.173-.891.403-1.113.679-.213.264-.381.664-.381 1.329 0 .668.168 1.07.382 1.336.222.277.575.508 1.113.682 1.12.362 2.673.376 4.459.376l.02-.002c.044-.003.106-.008.182-.01.152-.007.364-.01.615.001a6.519 6.519 0 0 1 1.888.36c.707.256 1.467.698 2.048 1.456.588.767.93 1.778.93 3.058 0 1.279-.342 2.283-.944 3.033-.19.238-.4.44-.62.614H32v2H16v-2Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPharmacy);
export default ForwardRef;
