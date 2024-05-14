import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgAnimalBat = (
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
        d="M30.445 20.664c1.72-.396 3.28-1.037 4.384-2.408 1.031-1.281 1.472-2.968 1.662-4.99 1.48.456 2.621 1.5 3.507 3.127 1.067 1.96 1.73 4.744 1.935 8.223-5.959-.532-10.131 2.751-11.177 6.784h-4.954L24 34.765 22.198 31.4h-4.954c-1.046-4.033-5.218-7.316-11.177-6.784.204-3.479.868-6.263 1.935-8.223.886-1.628 2.027-2.671 3.507-3.128.19 2.023.631 3.71 1.662 4.99 1.1 1.368 2.654 2.009 4.368 2.405l-.256-2.134c-2.916-.858-3.77-2.512-3.895-7.526-.163 0-.324.004-.483.012a8.347 8.347 0 0 0-1.512.213C6.698 12.341 4.4 17.549 4.048 24.933A43.593 43.593 0 0 0 4 27c.696-.178 1.363-.3 2.002-.37 6.084-.679 9.498 3.24 9.498 6.77H21l3 5.6 3-5.6h5.5c0-3.53 3.414-7.449 9.498-6.77.639.07 1.306.192 2.002.37 0-.706-.016-1.396-.048-2.067-.35-7.384-2.65-12.59-7.345-13.708a8.347 8.347 0 0 0-1.512-.213 9.587 9.587 0 0 0-.483-.012c-.126 5.006-.976 6.663-3.882 7.522l-.285 2.142Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.89 12.006a1 1 0 0 1 1.104.884l1 9a1 1 0 0 1-1.988.22l-1-9a1 1 0 0 1 .884-1.104ZM29.11 12.006a1 1 0 0 0-1.104.884l-1 9a1 1 0 0 0 1.988.22l1-9a1 1 0 0 0-.884-1.104Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.005 16c-1.028.006-2.104.29-3.62.923l-.77-1.846c1.612-.674 2.97-1.07 4.38-1.077 1.412-.007 2.776.376 4.403 1.083l-.796 1.834c-1.502-.652-2.575-.922-3.597-.917Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgAnimalBat);
export default ForwardRef;