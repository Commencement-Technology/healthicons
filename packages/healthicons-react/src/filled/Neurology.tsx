import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgNeurology = (
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
        d="M29.584 22.87c1.16 0 2.292-.315 3.25-.905a6.24 6.24 0 0 0 3.29.885l3.72-1.221c1.047-.78 1.767-1.862 2.037-3.063a4.892 4.892 0 0 0-.552-3.538c-.627-1.087-1.65-1.947-2.895-2.435-.285-1.163-1.001-2.204-2.031-2.949l-3.63-1.146h-.41c-.807-1.064-2.019-1.823-3.406-2.132l-7.783-.395c-1.294.097-2.514.584-3.463 1.383a6.762 6.762 0 0 0-1.37-.148 6.241 6.241 0 0 0-3.144.846c-.935.55-1.675 1.333-2.128 2.254l-2.958 1.89a4.89 4.89 0 0 0-1.13 3.109c-.007.468.062.934.204 1.384-.775.909-1.193 2.025-1.185 3.173-.002 1.33.561 2.611 1.574 3.579.081.952.45 1.867 1.066 2.644a5.734 5.734 0 0 0 2.428 1.765 8.477 8.477 0 0 1 2.777 2.496 7.503 7.503 0 0 1 1.31 3.334h2.72v-7.744l-2.643-2.348-1.787 1.788a1 1 0 0 1-1.414-1.415l2.084-2.083-.635-3.493-2.826-1.413a1 1 0 0 1 .895-1.789l2.767 1.384 3.461-2.203-1.066-2.844a1 1 0 0 1 1.872-.703l1.138 3.034h1.399l.65-1.298-.951-2.218a1 1 0 0 1 1.838-.788l.826 1.927 3.3.6a.962.962 0 0 1 .057-.05l2.046-1.636a1 1 0 0 1 1.25 1.561l-1.472 1.178 1.729 2.223.678-1.356a1 1 0 0 1 .894-.553h2.455a1 1 0 1 1 0 2h-1.837l-.419.839 2.064.458c.08.018.157.046.23.082l1.636.818a1 1 0 1 1-.894 1.79l-1.526-.764-3.562-.791a1 1 0 0 1-.572-.363l-2.63-3.38-3.263-.593a.994.994 0 0 1-.208.149l-.701 1.401v.809h1.454a1 1 0 0 1 .448.105l3.273 1.637a1 1 0 1 1-.895 1.789l-3.062-1.531h-1.218v1.864a1 1 0 1 1-2 0v-3.909h-1.572l-3.688 2.346.637 3.5 3.424 3.043a1 1 0 0 1 .335.747v8.193h2.918v-5.535a4.885 4.885 0 0 1 .876-2.78 5.657 5.657 0 0 1 2.373-1.943c.55-.19.684-.445.85-.758.11-.208.234-.442.503-.7.233.145.414.272.571.383.487.343.743.524 1.62.524ZM23 38h-8v-2h8v2ZM23 42h-8v-2h8v2Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgNeurology);
export default ForwardRef;
