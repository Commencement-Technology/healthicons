import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgOutpatientDepartment = (
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
        d="M6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9Zm9.08 18.602c.243-1.961.832-3.73 1.495-5.15l.577 2.197a1.5 1.5 0 0 0 1.45 1.119h4.064a1.5 1.5 0 1 0 0-3H19.76l-1.174-4.467a1.5 1.5 0 0 0-1.45-1.119c-2.111 0-3.801 1.261-4.896 2.82-1.1 1.565-1.74 3.601-1.74 5.613 0 .578.143 1.168.299 1.658.162.508.37 1.01.569 1.44a19.364 19.364 0 0 0 .712 1.394v6.348a1.5 1.5 0 0 0 3 0v-8.853Zm4.82-11.238c1.464 0 2.695-.973 3.055-2.293-.99.159-1.904.221-2.832.097-1.108-.148-2.165-.552-3.361-1.254a3.046 3.046 0 0 0-.021.359c0 1.707 1.414 3.09 3.16 3.09Zm0-6.182c-.884 0-1.684.356-2.258.929 1.102.663 1.94.967 2.747 1.075.715.096 1.46.046 2.422-.12a3.163 3.163 0 0 0-2.91-1.884Zm5.531 2.704c0 1.067-.53 1.932-1.185 1.932-.654 0-1.185-.865-1.185-1.932 0-1.066.53-1.931 1.185-1.931s1.185.864 1.185 1.931Zm11.851 3.478c0 1.707-1.414 3.09-3.16 3.09-1.745 0-3.16-1.383-3.16-3.09 0-1.707 1.415-3.091 3.16-3.091 1.746 0 3.16 1.384 3.16 3.09Zm-6.244 10.723-.605-1.317a6.38 6.38 0 0 0-.258.818c-.175.725-.238 1.539-.191 2.605.622.2 1.24.369 1.746.5l.388.1.343.09c.093.024.19.05.272.075.04.012.096.03.154.051h.002c.023.01.201.072.38.2.155.11.262.232.281.254l.003.003c.039.044.074.088.1.12.053.069.11.148.168.228.117.163.265.378.43.62.33.486.748 1.117 1.157 1.737a416.55 416.55 0 0 1 1.473 2.257l.137.211-2.519 1.63-.135-.208a441.686 441.686 0 0 0-1.463-2.24 153.25 153.25 0 0 0-1.133-1.703l-.264-.385-.118-.03-.413-.107a37.509 37.509 0 0 1-1.591-.448V38h-1.58v-5.409H19.11V38h-1.58v-7.727h8.02a3.3 3.3 0 0 1-.213-.227c-.309-.361-.617-.895-.617-1.576 0-3.634 1.003-5.883 2.214-7.244a5.893 5.893 0 0 1 1.695-1.334 4.606 4.606 0 0 1 .825-.33l.074-.018.029-.007.012-.002.005-.002h.003c.001 0 .003 0 .312 1.467l-.31-1.468a1.5 1.5 0 0 1 1.672.841l2.11 4.587h3.13a1.5 1.5 0 1 1 0 3h-4.091a1.5 1.5 0 0 1-1.363-.873Zm5.98 8.552a1.5 1.5 0 0 1-2.519 1.63l2.52-1.63Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutpatientDepartment);
export default ForwardRef;
