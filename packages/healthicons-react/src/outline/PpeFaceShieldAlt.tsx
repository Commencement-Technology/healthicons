import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPpeFaceShieldAlt = (
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
        d="M24.807 6.323c-9.003-1.812-18.034 4.219-18.76 13.373a.999.999 0 0 0-.03.486 14.952 14.952 0 0 0 1.25 6.746c.792 1.8 1.93 3.422 3.35 4.775V41a1 1 0 1 0 2 0v-9.735a1 1 0 0 0-.333-.744 12.885 12.885 0 0 1-3.187-4.399A12.951 12.951 0 0 1 8 21h14v5.215c0 3.116 1.2 6.11 3.347 8.323C27.494 36.75 30.413 38 33.463 38H42V19.163a7.26 7.26 0 0 0-2.033-5.054A6.89 6.89 0 0 0 35.02 12h-2.235c-.663-1.11-1.435-2.11-2.373-2.96-1.462-1.325-3.28-2.248-5.606-2.717Zm4.262 4.199c.482.436.92.93 1.322 1.478H11.717c3.138-3.118 7.879-4.686 12.695-3.716 2.006.404 3.487 1.176 4.657 2.238ZM8.14 19a12.293 12.293 0 0 1 1.932-5H22v5H8.14Zm23.826-4.253a20.776 20.776 0 0 0-.36-.747H24v12.215c0 2.605 1.004 5.097 2.782 6.93C28.56 34.977 30.963 36 33.463 36H40V19.163a5.26 5.26 0 0 0-1.469-3.662 4.89 4.89 0 0 0-3.51-1.5h-1.2c.217.51.328 1.06.325 1.615v3.045l.257.488c.232.446.559 1.076.932 1.812.745 1.47 1.684 3.374 2.446 5.089a2.549 2.549 0 0 1-1.109 3.268 2.527 2.527 0 0 1-1.211.306h-1.303v2.093a1 1 0 0 1-2 0v-3.093a1 1 0 0 1 1-1h2.307a.527.527 0 0 0 .447-.244.547.547 0 0 0 .041-.52c-.74-1.668-1.662-3.536-2.402-4.994a171.224 171.224 0 0 0-1.191-2.305l-.072-.136-.024-.045a1.003 1.003 0 0 1-.118-.471v-3.302a2.07 2.07 0 0 0-.181-.86Zm0 0 .002.003.908-.417-.911.41.001.004Z"
        fill="#000"
      />
      <path
        d="M28 38a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPpeFaceShieldAlt);
export default ForwardRef;
