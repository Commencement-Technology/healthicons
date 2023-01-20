import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgCardiology = (
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
        d="m33.489 19.491.784.377.361-1.072c.186-.55.39-.99.616-1.475l.006-.013c.223-.479.469-1.005.692-1.668l.31-.92-.911-.337c-2.426-.897-4.46-1.065-6.145-.768a6.636 6.636 0 0 0-.702-.736v-1.346a1 1 0 0 0-1-1h-3.993a1 1 0 0 0-1 1v1.018l-.495-.667a1 1 0 0 0-1.37-.228l-3.21 2.21a1 1 0 0 0-.27 1.368l1.035 1.595a9.822 9.822 0 0 0-1.587-1.04 15.583 15.583 0 0 0-2.601-1.09l-.049-.015-.014-.005h-.004l-.002-.001-.283.958.282-.959a1 1 0 0 0-.983.247l.7.713c-.7-.713-.703-.712-.703-.712l-.002.002-.004.005-.007.008-.016.016a1.096 1.096 0 0 0-.094.114 2.04 2.04 0 0 0-.13.203 4.79 4.79 0 0 0-.313.695c-.233.628-.535 1.679-.87 3.446a1 1 0 0 0 .825 1.173c.75.12 1.334.484 1.743.838a3.954 3.954 0 0 1 .484.498c-.455.99-.631 2.081-.594 3.19.064 1.89.743 3.876 1.75 5.66 1.01 1.788 2.383 3.437 3.91 4.65 1.514 1.2 3.27 2.044 5.032 2.044 1.756 0 3.556-.838 5.124-2.044 1.584-1.218 3.03-2.885 4.09-4.718 2.034-3.518 2.864-8.144-.392-11.214Zm-15.977-.38c-.48.167-.94.409-1.357.75a19.07 19.07 0 0 0-.486.305 5.702 5.702 0 0 0-2.005-1.288c.205-.955.384-1.588.522-1.998.42.162.95.389 1.48.673.587.314 1.14.68 1.55 1.08.156.15.282.297.38.438l-.084.04Zm-.184 2.377c.285-.17.604-.348.945-.521a4.193 4.193 0 0 1 1.21-.163c.915-.004 1.936.21 2.923.52a19.695 19.695 0 0 1 2.692 1.087l-.607 2.179-2.185.988-2.58-.607-.458 1.946 1.784.42-.567 1.434 1.86.735.844-2.132.602-.273-.045.163.915 2.114.176 2.582 1.995-.136-.123-1.802 1.91-.222-.231-1.986-2.119.245-.407-.94 1.163-4.173.075-.124.144-.17.004-.004.015-.018.066-.074a18.37 18.37 0 0 1 1.152-1.186c.624-.586 1.32-1.144 1.933-1.462.246.133.454.234.625.318.075.037.144.07.205.102.262.132.458.247.741.498 2.354 2.085 2.088 5.552.165 8.878-.937 1.62-2.213 3.084-3.579 4.134-1.38 1.062-2.757 1.629-3.904 1.629-1.14 0-2.467-.563-3.788-1.611-1.307-1.037-2.518-2.481-3.413-4.067-.897-1.59-1.442-3.26-1.492-4.744-.049-1.453.373-2.675 1.354-3.557Zm8.921-.963-.084.108a54.788 54.788 0 0 0-1.457-.781c.319-.841.972-2.074 2.105-3.011 1.333-1.103 3.464-1.908 6.872-.905-.08.18-.162.356-.248.54l-.006.013c-.105.226-.216.463-.326.719-2.09-.515-3.924.497-5.152 1.53a12.042 12.042 0 0 0-1.704 1.787Zm-5.88-3.03a1.537 1.537 0 0 0-.019.083c-.035.179-.08.524-.1 1.142.121.017.252.02.507.02.462 0 1.068.002 2.08.169.466-1.159 1.226-2.284 2.084-3.176.578-.603 1.268-1.168 2.008-1.55a1 1 0 0 1-.429-.821v-.829h-1.993v1.21a1 1 0 0 1-.178.57l-.657.946a1 1 0 0 1-1.624.027l-1.066-1.435-1.613 1.11.97 1.495a1 1 0 0 1 .03 1.04Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48 0H0v48h48V0ZM6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgCardiology);
export default ForwardRef;
