import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeEarsNoseAndThroat = (
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
        fillRule="evenodd"
        d="M48 0H0v48h48V0ZM9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="m28.74 22.673-.008.009.001-.002.003-.003.002-.002.001-.002ZM28 22l-.74-.673.002-.002.003-.003.007-.008.018-.019a3.461 3.461 0 0 1 .229-.213A4.629 4.629 0 0 1 30.5 20c1.82 0 3.499 1.51 3.499 4.05 0 2.133-.956 3.633-2.05 4.58a6.301 6.301 0 0 1-1.624 1.022c-.489.21-1 .348-1.417.348a1 1 0 1 1 0-2c.002 0 .018 0 .05-.005.036-.006.083-.015.142-.03.118-.03.267-.078.437-.151.34-.146.733-.375 1.103-.695.724-.627 1.359-1.602 1.359-3.069 0-1.56-.905-2.05-1.5-2.05a2.63 2.63 0 0 0-1.685.605 1.49 1.49 0 0 0-.074.067l-.01.01a1 1 0 0 1-1.47-1.355L28 22Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        d="M20.5 23C16 23 13 27 13 29c.39.028 1 0 1 0s1.465-2.5 5-2.5c2.04 0 3.826.839 4.596 2.099.369.603-.318 1.139-1.004.966-1.772-.448-4.907-.907-7.592.435v2c1.86-1.063 4.287-.855 6.15-.426 1.781.41 2.85 2.099 2.85 3.926V42h2.581V30.65c0-2.688.988-3.335 2.808-4.69a.915.915 0 0 0 .269-1.144c-.305-.61-1.168-.7-1.743-.334a4.072 4.072 0 0 1-2.217.643C24.5 25.125 23.325 23 20.5 23Z"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M21 36a2 2 0 0 0-2-2h-2c-.314 0-.482-.063-.564-.106a.586.586 0 0 1-.213-.188 1.189 1.189 0 0 1-.169-.365A1.337 1.337 0 0 1 16 33v-3a2 2 0 0 0-1.768-1.986L14 30v3c0 1 .6 3 3 3h2v8h14v-9.935c0-1.925.998-3.672 2.258-5.128.997-1.151 1.771-2.466 2.221-3.873.75-2.345.69-4.847-.172-7.159-.86-2.31-2.479-4.315-4.629-5.733-2.15-1.417-4.724-2.176-7.362-2.172-2.727.02-5.376.845-7.56 2.357-2.186 1.511-3.793 3.63-4.589 6.046-.256.899-.541 3.541-.541 3.541A123.332 123.332 0 0 1 11.2 25.3l-.685 1.612c-.255.437-.429.91-.513 1.4-.019.326.093.647.315.9.22.254.535.423.883.475.114 0 2.8.313 2.8.313l.232-1.986-.423-.05a800.511 800.511 0 0 0-1.498-.171c.016-.033.031-.066.045-.1l.68-1.602.002-.003c.481-1.102.976-2.234 1.444-3.399a2.02 2.02 0 0 0 .132-.53v-.001l.003-.025.009-.081a64.745 64.745 0 0 1 .157-1.276c.104-.78.218-1.488.298-1.79.658-1.967 1.982-3.719 3.812-4.985 1.844-1.275 4.097-1.983 6.431-2.001 2.255-.003 4.441.648 6.253 1.842 1.813 1.195 3.15 2.866 3.856 4.761a8.916 8.916 0 0 1 .14 5.852c-.357 1.119-.985 2.2-1.827 3.173C32.35 29.242 31 31.444 31 34.065V42H21v-6Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeEarsNoseAndThroat);
export default ForwardRef;
