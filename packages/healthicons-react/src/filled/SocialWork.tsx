import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSocialWork = (
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
        d="M9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h5v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3h7v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3h6a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Zm24.99 28.635c.547-.555 1.1-1.115 1.61-1.95.128-.21.258-.411.384-.607.456-.705.86-1.33.934-1.97.096-.817.156-5.717-.108-6.459-.265-.741-1.79-1.157-2.317.503-.26.819-.342 1.872-.416 2.828-.077.98-.145 1.858-.39 2.272-.483.818-2.038 2.853-2.038 2.853l1.342-2.547s.204-.352.097-1.021c-.108-.67-.917-1.606-1.297-.862-.38.743-1.045 1.414-1.045 1.414l-2.348 2.829s-.765.992-.786 1.536c-.007.182-.12.586-.25 1.043-.145.516-.31 1.1-.362 1.51V37h5.773v-.993c.388-.533.801-.95 1.217-1.372Zm-19.813 1.372c-.389-.533-.803-.95-1.22-1.372-.55-.555-1.104-1.115-1.616-1.95-.128-.21-.259-.411-.385-.607-.457-.705-.862-1.33-.938-1.97-.096-.817.203-5.717.468-6.459.266-.741 1.796-1.157 2.325.503.26.819.343 1.872.418 2.828.076.98.145 1.858.39 2.272.485.818 2.045 2.853 2.045 2.853l-1.346-2.547s-.205-.352-.097-1.021c.108-.67.92-1.606 1.301-.862.382.743 1.049 1.414 1.049 1.414l2.355 2.829s.768.992.789 1.536c.015.387.187 1.78.285 2.553V37h-5.823v-.993ZM19.781 11C17.018 11 15 13.986 15 17.207 15 24.397 24 29 24 29s9-4.9 9-11.793C33 13.987 30.982 11 28.219 11c-1.918 0-3.34 1.34-4.219 3.24-.878-1.9-2.301-3.24-4.219-3.24Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgSocialWork);
export default ForwardRef;
