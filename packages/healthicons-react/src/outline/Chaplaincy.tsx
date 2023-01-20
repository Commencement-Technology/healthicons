import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgChaplaincy = (
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
        d="M39 8H9a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1ZM9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Z"
        fill="#333"
      />
      <path
        d="m18.058 36.5 1.563 1.007a1 1 0 0 0 1.542-.84v-3.908a1 1 0 0 0-.383-.787l-6.687-5.244a1 1 0 0 0-1.418.188l-2.076 2.782a1 1 0 0 0 .204 1.4l7.255 5.402ZM30.107 36.5l-1.564 1.007a1 1 0 0 1-1.541-.84v-3.908a1 1 0 0 1 .382-.787l6.687-5.244a1 1 0 0 1 1.418.188l2.076 2.782a1 1 0 0 1-.204 1.4L30.107 36.5ZM32.43 23.275c-.09.641-.177 1.277-.158 1.996l.23.729-5.055 4-.729-.858A18.436 18.436 0 0 1 25.5 27c-.5-1-.5-2-.5-2v-5.934c0-1.066 1.152-.724 1.746-.218.594.506.657.947.657.947l.586 3.094s-.005-2.794-.144-3.823c-.07-.521-.604-1.315-1.099-2.22-.547-1.002-.889-1.513-1.246-2.346-1.36-3.173.423-2.82 1.22-2.356.798.464 4.68 4.497 5.188 5.267.398.602.47 1.412.553 2.325.023.253.047.514.078.78.125 1.062.007 1.915-.11 2.759ZM15.735 23.275c.089.641.177 1.277.157 1.996l-.23.729 5.055 4 .729-.858c.474-.733.718-1.142 1.218-2.142s.5-2 .5-2v-5.934c0-1.066-1.152-.724-1.746-.218-.594.506-.657.947-.657.947l-.586 3.094s.005-2.794.144-3.823c.07-.521.604-1.315 1.1-2.22.546-1.002.888-1.513 1.245-2.346 1.36-3.173-.423-2.82-1.22-2.356-.798.464-4.68 4.497-5.188 5.267-.398.602-.47 1.412-.553 2.325-.023.253-.046.514-.078.78-.124 1.062-.007 1.915.11 2.759Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgChaplaincy);
export default ForwardRef;
