import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBloodAbN = (
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
        d="M20.388 5.535a5.018 5.018 0 0 1 7.224 0l.528.548h5.19c2.573 0 4.67 2.074 4.67 4.646V15.5h-2v-4.771a2.658 2.658 0 0 0-2.67-2.646h-5.616a1 1 0 0 1-.72-.307l-.823-.855a3.018 3.018 0 0 0-4.342 0l-.823.855a1 1 0 0 1-.72.307H15c-1.663 0-3 1.338-3 2.974V28.97a68.776 68.776 0 0 1 3.7.06l.53.02c1.284.048 2.481.093 3.652.069 2.627-.056 5.042-.466 7.61-1.981 3.118-1.84 5.758-1.288 7.583-.226.338.197.647.41.925.626V22.5h2v10.526C38 35.78 35.755 38 33 38h-3v2h-5v4h-2v-4h-5v-2h-3c-2.755 0-5-2.22-5-4.974v-21.97c0-2.752 2.245-4.973 5-4.973h4.86l.528-.548ZM15 36c-1.663 0-3-1.338-3-2.974v-2.055a66.435 66.435 0 0 1 3.627.058l.526.02c1.277.048 2.537.096 3.771.07 2.842-.06 5.627-.513 8.584-2.258 2.407-1.42 4.267-.972 5.56-.22A7.004 7.004 0 0 1 36 30.33v2.696C36 34.662 34.663 36 33 36H15Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.416 14.6a1 1 0 0 0-1.832 0l-2.616 5.98a.998.998 0 0 0-.018.04l-.866 1.98a1 1 0 0 0 1.832.8l.613-1.4h3.942l.613 1.4a1 1 0 0 0 1.832-.8l-.866-1.98a.998.998 0 0 0-.018-.04l-2.616-5.98Zm-.916 2.895L19.596 20h-2.192l1.096-2.505ZM24 15a1 1 0 0 1 1-1h3.125C29.773 14 31 15.405 31 17a3.09 3.09 0 0 1-.732 2c.46.54.732 1.249.732 2 0 1.595-1.227 3-2.875 3H25a1 1 0 0 1-1-1v-8Zm4.125 3c.423 0 .875-.386.875-1s-.452-1-.875-1H26v2h2.125ZM29 21c0 .614-.452 1-.875 1H26v-2h2.125c.423 0 .875.386.875 1Z"
        fill="#333"
      />
      <path d="M34 18a1 1 0 1 0 0 2h3a1 1 0 0 0 0-2h-3Z" fill="#333" />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgBloodAbN);
export default ForwardRef;