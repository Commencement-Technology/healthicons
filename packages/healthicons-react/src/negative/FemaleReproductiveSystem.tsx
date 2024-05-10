import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgFemaleReproductiveSystem = (
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
      <g clipPath="url(#female_reproductive_system_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM6.816 14.724c-.8.729-1.051 1.617-.56 2.404a15.322 15.322 0 0 0 1.622 2.139c-.55.074-1.035.285-1.405.642-.13.125-.24.263-.332.412a17.113 17.113 0 0 1-1.582-2.134c-1.202-1.926-.284-3.855.911-4.942.608-.553 1.36-.973 2.125-1.152.757-.176 1.663-.139 2.388.442 1.58 1.266 2.385 1.434 2.918 1.48.1.01.214.012.342.014.564.012 1.384.03 2.297.616l-1.08 1.683c-.409-.262-.602-.268-1.046-.282a11.598 11.598 0 0 1-.688-.038c-1.019-.09-2.188-.464-3.994-1.912-.082-.066-.284-.148-.683-.055-.39.091-.843.328-1.233.683Zm6.079 7.419c1.68 1.549 2.149 3.665 1.047 4.728-1.103 1.062-3.358.668-5.039-.881-1.68-1.549-2.149-3.666-1.047-4.728 1.103-1.062 3.358-.668 5.039.88Zm28.289-7.419c.8.729 1.051 1.617.56 2.404a15.37 15.37 0 0 1-1.674 2.196c.526.077.991.284 1.348.627.144.14.264.294.36.463a17.182 17.182 0 0 0 1.663-2.227c1.202-1.926.283-3.855-.911-4.942-.608-.553-1.36-.973-2.126-1.152-.756-.176-1.663-.139-2.387.442-1.58 1.266-2.385 1.434-2.918 1.48a5.45 5.45 0 0 1-.342.014c-.564.012-1.384.03-2.297.616l1.08 1.683c.408-.262.601-.268 1.046-.282a11.6 11.6 0 0 0 .687-.038c1.02-.09 2.189-.464 3.995-1.912.081-.066.283-.148.683-.055.39.091.843.328 1.233.683Zm-6.142 7.419c-1.68 1.549-2.149 3.665-1.046 4.728 1.102 1.062 3.358.668 5.038-.881 1.68-1.549 2.149-3.666 1.047-4.728-1.103-1.062-3.358-.668-5.039.88Zm-15.699 1.719C17.316 21.66 13.583 13 24.01 13c10.426 0 6.825 7.956 4.148 10.862-1.558 1.69-1.557 5.31-1.556 8.9 0 2.58 0 5.144-.578 6.962-.185.582-.596.135-1.043-.35-.33-.36-.68-.74-.971-.74-.28 0-.654.353-1.022.7-.53.5-1.046.988-1.254.39-.683-1.964-.823-4.943-.958-7.821-.164-3.492-.321-6.835-1.433-8.041Z"
        />
      </g>
      <defs>
        <clipPath id="female_reproductive_system_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFemaleReproductiveSystem);
export default ForwardRef;
