import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgStomach = (
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
        d="M16.715 15.122c1.18 1.286 3.174 1.838 6.827 1.916.208-2.759 1.271-4.932 2.844-6.458 1.748-1.696 4.066-2.532 6.366-2.532s4.619.836 6.367 2.532C40.879 12.287 42 14.806 42 18.048v11c0 3.082-.513 6.301-2.066 8.78-1.599 2.552-4.239 4.22-8.19 4.22-4.042 0-6.855-2.398-9.428-4.618l-.112-.097c-2.59-2.236-5.005-4.319-8.437-4.785-1.683.013-2.816.527-3.607 1.231-.82.73-1.35 1.734-1.68 2.812-.33 1.076-.444 2.17-.472 3.006a12.968 12.968 0 0 0 .019 1.27 4.8 4.8 0 0 0 .005.065l.002.014-.995.102c-.995.102-.995.101-.995.1v-.003l-.001-.009-.003-.027a10.83 10.83 0 0 1-.027-.426c-.012-.281-.02-.678-.004-1.154.032-.943.16-2.225.559-3.524.397-1.297 1.081-2.669 2.262-3.72 1.2-1.068 2.838-1.737 5.001-1.737.503 0 .977.011 1.432.022.846.02 1.628.04 2.412-.02 1.155-.086 2.107-.338 2.894-.927 1.507-1.13 2.812-3.825 2.927-10.585-3.719-.077-6.48-.63-8.254-2.564-.964-1.05-1.559-2.425-1.918-4.126-.357-1.694-.493-3.775-.493-6.3h2c0 2.475.135 4.394.45 5.887.314 1.487.793 2.487 1.434 3.187Zm6.656 20.576c-1.309-1.13-2.708-2.34-4.327-3.312.944-.183 1.876-.527 2.725-1.163 1.3-.975 2.28-2.534 2.91-4.928 1.646-1.11 3-1.345 4.188-1.215 1.272.14 2.447.703 3.743 1.36l.216.11c1.177.598 2.505 1.274 3.916 1.451A5.539 5.539 0 0 0 40 27.432v1.616c0 2.918-.496 5.699-1.761 7.719-1.22 1.948-3.21 3.28-6.496 3.28-3.197 0-5.478-1.851-8.12-4.131l-.252-.218ZM40 25.074v-7.026c0-2.758-.94-4.74-2.274-6.032-1.344-1.305-3.15-1.968-4.974-1.968-1.824 0-3.63.663-4.974 1.968-1.333 1.293-2.273 3.274-2.273 6.032 0 2.194-.112 4.076-.331 5.686 1.382-.614 2.678-.777 3.912-.642 1.682.185 3.162.922 4.429 1.564l.09.046c1.291.654 2.332 1.182 3.387 1.315.89.112 1.854-.056 3.008-.943Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgStomach);
export default ForwardRef;
