import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBloodPressureMonitor = (
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
      <path d="m23.5 26.5 1.5-5 1.5 5-1.5 2-1.5-2Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39.508 18.853A3.502 3.502 0 0 0 42 15.5v-6a3.5 3.5 0 1 0-7 0v6a3.501 3.501 0 0 0 2.507 3.357c.009 1.125.023 2.2.037 3.226v.001c.049 3.651.09 6.694-.177 9.224-.377 3.58-1.34 5.766-3.483 7.028-2.88 1.697-7.237 2.285-10.905 1.823-1.827-.23-3.389-.71-4.462-1.366-.434-.265-.765-.542-1.006-.828 1.824-.103 3.605-.433 5.053-1.022 1.778-.723 3.389-1.999 3.435-4.014A7.002 7.002 0 0 0 26 19.071v-5.949h-.003C26 13.082 26 13.041 26 13c0-2.761-4.477-5-10-5S6 10.239 6 13c0 .04.001.082.003.122H6V32.84c0 1.985 1.665 3.253 3.43 3.985 1.64.68 3.715 1.06 5.8 1.152.388 1.064 1.23 1.903 2.244 2.523 1.399.855 3.264 1.393 5.255 1.644 3.966.499 8.804-.1 12.17-2.085 2.966-1.747 4.057-4.738 4.457-8.542.28-2.654.236-5.882.187-9.603-.014-.987-.027-2.007-.035-3.061ZM38.5 8A1.5 1.5 0 0 1 40 9.5v6a1.5 1.5 0 0 1-3 0v-6A1.5 1.5 0 0 1 38.5 8ZM24 13c0 .215-.226.948-1.823 1.747C20.699 15.485 18.518 16 16 16s-4.7-.515-6.177-1.253C8.226 13.948 8 13.215 8 13c0-.215.226-.948 1.823-1.747C11.301 10.515 13.482 10 16 10s4.7.515 6.177 1.253C23.774 12.052 24 12.785 24 13Zm0 3c-1.825 1.215-4.729 2-8 2-.306 0-.61-.007-.91-.02v17.988c.306.017.613.027.921.03 2.168.026 4.275-.287 5.8-.907 1.513-.617 2.142-1.384 2.186-2.162A7.001 7.001 0 0 1 24 19.07V16Zm6 10a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgBloodPressureMonitor);
export default ForwardRef;
