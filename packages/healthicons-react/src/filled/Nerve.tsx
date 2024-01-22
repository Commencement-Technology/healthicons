import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgNerve = (
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
        d="M25.438 8.123a1 1 0 0 1-.502 1.323 5.001 5.001 0 0 0-2.948 4.544v.035a5 5 0 0 0 9.97.521 1 1 0 1 1 1.99.213 6.974 6.974 0 0 1-1.71 3.878 7 7 0 0 1 3.784 2.286 1 1 0 0 1-1.521 1.3 5 5 0 0 0-7.955 6.034l.007.008a1 1 0 0 1 .2.49c.333.042.651.203.888.476.228.264.435.533.622.807.363.53.315 1.218-.071 1.691a1.413 1.413 0 0 1 1.365.954c.21.613.372 1.212.51 1.756a1.412 1.412 0 0 1-.442 1.416c.473.068.9.373 1.101.844.185.433.362.644.526.76.264.186.444.446.533.732.223-.294.561-.5.957-.548.214-.026.453-.066.719-.124.406-.089.809.007 1.122.231a.995.995 0 0 1 .437-.35l.274-.115a2.06 2.06 0 0 0 1.073-1.21c.199-.6.182-1.47-.392-2.583a1 1 0 1 1 1.777-.917c.408.79.641 1.566.71 2.302.608-.724 1.252-1.702 1.777-2.992a1 1 0 1 1 1.853.755c-.626 1.535-1.404 2.71-2.153 3.587.487.057 1 .177 1.554.37a1 1 0 0 1-.655 1.89c-.995-.346-1.702-.36-2.391-.216-.642.133-1.273.396-2.154.765l-.187.078a4.367 4.367 0 0 1-.353.146.996.996 0 0 1-.633.023c-.137.485-.531.88-1.058.995-.342.075-.67.131-.984.169a1.413 1.413 0 0 1-1.516-.981 1.412 1.412 0 0 1-1.94.3c-.747-.528-1.193-1.255-1.493-1.957a1.413 1.413 0 0 1 .372-1.622 1.413 1.413 0 0 1-1.17-1.048 19.975 19.975 0 0 0-.445-1.54 1.411 1.411 0 0 1 .242-1.351c-.46.009-.916-.207-1.195-.615a6.161 6.161 0 0 0-.427-.553 1.411 1.411 0 0 1-.278-1.354.996.996 0 0 1-.29-.277l-.01-.017a4.99 4.99 0 0 0-3.94-1.92c-1.6 0-3.024.75-3.94 1.92a7.028 7.028 0 0 1-.211.29 4.977 4.977 0 0 0-.85 2.79c0 .953.266 1.84.727 2.597a1 1 0 0 1-1.708 1.04 6.972 6.972 0 0 1-.993-4.236 7.027 7.027 0 0 1-4.154.41 1 1 0 0 1 .403-1.959 4.991 4.991 0 0 0 4.955-1.817c.069-.099.139-.196.212-.29a5 5 0 0 0-7.854-6.148 1 1 0 0 1-1.481-1.345 6.996 6.996 0 0 1 3.644-2.127 6.976 6.976 0 0 1-1.695-3.743 1 1 0 0 1 1.984-.251 5.001 5.001 0 0 0 9.96-.618v-.035a5 5 0 0 0-2.864-4.505 1 1 0 1 1 .856-1.808 7.03 7.03 0 0 1 3.009 2.723 7.029 7.029 0 0 1 3.127-2.778 1 1 0 0 1 1.323.501Zm-4.45 15.887a1.5 1.5 0 1 0 0-2.999 1.5 1.5 0 0 0 0 3Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgNerve);
export default ForwardRef;
