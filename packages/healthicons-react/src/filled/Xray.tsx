import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgXray = (
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
        d="M28.5 8.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM30 34h-4.735l.743 8.181A2 2 0 0 0 30 42v-8Zm-7.265 0H18v8a2 2 0 0 0 3.992.181L22.735 34Zm13.22-20h.091-.09Zm-24.001 0h.09-.09ZM11 15a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V16a1 1 0 0 0-1-1H11Zm12 2v1.5h-.5c-.93 0-1.94.3-2.654.56a14.394 14.394 0 0 0-1.262.53l-.021.01-.007.004h-.002v.001L19 20.5l.447.895.002-.001.012-.006.057-.028a12.378 12.378 0 0 1 1.012-.42c.66-.24 1.4-.44 1.97-.44h.5v2h-.8c-1.197 0-2.453.636-3.293 1.145a14.512 14.512 0 0 0-1.51 1.057l-.026.02-.007.006-.003.002v.001L18 25.5l.64.768.003-.002.015-.012.069-.056a12.459 12.459 0 0 1 1.216-.843c.81-.49 1.654-.855 2.257-.855h.8v2.168a6.31 6.31 0 0 0-1.92.934c-.4.286-.771.626-1.052.999-.269.356-.528.841-.528 1.399h2v.02-.003a.763.763 0 0 1 .125-.213c.13-.173.34-.377.62-.577.56-.402 1.243-.68 1.787-.727.462.012 1.116.265 1.692.684.283.205.502.42.64.604.101.134.128.21.135.23v.002l.002.002L26.5 30h2c0-.562-.268-1.055-.536-1.413a5.046 5.046 0 0 0-1.063-1.02A5.926 5.926 0 0 0 25 26.638V24.5h1.1c.749 0 1.519.366 2.163.819a7.037 7.037 0 0 1 .986.841l.008.01.743-.67.743-.67-.002-.001-.002-.003-.007-.008-.022-.023a7.788 7.788 0 0 0-.343-.34 9.053 9.053 0 0 0-.955-.774c-.78-.547-1.96-1.181-3.312-1.181H25v-2h.75c.694 0 1.37.201 1.893.422a6.194 6.194 0 0 1 .8.408l.003.002L29 20.5l.554-.832-.001-.001-.003-.002-.007-.005-.02-.013a6.165 6.165 0 0 0-.297-.177 8.163 8.163 0 0 0-.807-.392c-.663-.28-1.613-.578-2.669-.578H25V17h-2Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgXray);
export default ForwardRef;
