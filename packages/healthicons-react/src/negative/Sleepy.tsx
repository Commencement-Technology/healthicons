import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSleepy = (
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
        d="M0 0h48v48H0V0Zm24 6C14.059 6 6 14.059 6 24s8.059 18 18 18 18-8.059 18-18a18 18 0 0 0-.755-5.174l-1.916.575c.437 1.457.671 3 .671 4.599 0 8.837-7.163 16-16 16S8 32.837 8 24 15.163 8 24 8V6Zm-5.47 7.952a1 1 0 0 0 1 1.732l.936-.541-.451 3.75a1 1 0 0 0 1.492.986l3.002-1.733a1 1 0 1 0-1-1.732l-1.27.733.452-3.75a1 1 0 0 0-1.492-.986l-2.669 1.54Zm7.287-4.658a1 1 0 0 1 .707-1.225l3.864-1.035a1 1 0 0 1 1.187 1.338l-2.049 5.105 2.415-.647a1 1 0 0 1 .518 1.931l-4.347 1.165a1 1 0 0 1-1.187-1.338l2.049-5.104-1.932.517a1 1 0 0 1-1.225-.707ZM36.556 6a1 1 0 1 0 0 2h2.64l-4.044 6.47A1 1 0 0 0 36 16h5a1 1 0 1 0 0-2h-3.196l4.044-6.47A1 1 0 0 0 41 6h-4.444Zm-4.108 25.855c-2.251-3.084-5.587-4.715-8.707-3.879-3.12.837-5.194 3.916-5.601 7.713-.115 1.069.923 1.823 1.961 1.545l11.42-3.06c1.039-.279 1.56-1.45.927-2.319Zm-.168-9.945c.306.681.006 1.494-.54 2.094-.572.626-1.49 1.13-2.693 1.27a3.794 3.794 0 0 1-2.995-.922c-.684-.607-1.125-1.45-1.08-2.176a.5.5 0 0 1 .738-.408c2.176 1.182 4.243 1.061 5.825-.061a.5.5 0 0 1 .745.203Zm-19.392 5.196c.076.743.743 1.297 1.516 1.543.808.256 1.855.235 2.967-.247a3.794 3.794 0 0 0 2.132-2.295c.29-.868.25-1.82-.152-2.425a.5.5 0 0 0-.843.016c-1.294 2.111-3.144 3.04-5.075 2.86a.5.5 0 0 0-.545.548Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgSleepy);
export default ForwardRef;
