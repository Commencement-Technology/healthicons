import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMaleAndFemale = (
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
        d="M14.5 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM9.37 16.841c.992-.596 2.085-.841 3.176-.841h3.908c1.09 0 2.184.245 3.176.841.989.595 1.699 1.433 2.191 2.343.93 1.717 1.179 3.864 1.179 5.96v.088c0 .03-.001.06-.004.089l-.008.088v.013l-.002.044a30.655 30.655 0 0 0-.001.74c0 .115.002.24.004.372v.004c.005.407.011.893.011 1.418a3 3 0 0 1-3.5 2.958V39.5a2.5 2.5 0 0 1-4.982.298l-.018-.148-.018.148A2.5 2.5 0 0 1 9.5 39.5v-8.542A3 3 0 0 1 6 28c0-.526.006-1.012.011-1.42v-.001l.004-.373a31.155 31.155 0 0 0 0-.74l-.002-.044-.001-.013-.008-.088A1 1 0 0 1 6 25.232v-.088c0-2.096.25-4.243 1.179-5.96.492-.91 1.202-1.748 2.191-2.343ZM20 29a.991.991 0 0 1-.5-.133V23h-2v16.5a.5.5 0 0 1-.996.06l-1.011-8.423a1 1 0 0 0-1.986 0l-1.01 8.423a.5.5 0 0 1-.997-.06V23h-2v5.867A1 1 0 0 1 8 28c0-.512.006-.989.01-1.398.003-.132.004-.258.005-.375.006-.503.004-.826-.011-.995L8 25.188v-.044c0-1.996.25-3.736.938-5.008.353-.654.832-1.201 1.463-1.58.631-.38 1.356-.556 2.145-.556h3.908c.789 0 1.514.176 2.145.555.63.38 1.11.927 1.463 1.58.689 1.273.938 3.013.938 5.008v.045l-.004.044c-.015.17-.016.492-.011.995 0 .115.002.24.004.371v.005c.005.409.011.884.011 1.397a1 1 0 0 1-1 1ZM38 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-2 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM37.446 16.444A4.35 4.35 0 0 0 35.48 16H31.52c-.43 0-1.18.048-1.967.444-1.33.67-2.09 1.767-2.541 2.736-.432.928-.68 1.954-.865 2.808-.175.811-.18.832-.28 1.345-.095.49-.281 1.45-.809 4.077a3 3 0 0 0 3.122 3.585l-.539 3.1c-.15.86.284 1.797 1.21 2.127.907.324 2.552.778 4.648.778 2.095 0 3.74-.454 4.648-.778.926-.33 1.359-1.268 1.21-2.126l-.54-3.1a3.005 3.005 0 0 0 3.123-3.587c-.528-2.627-.714-3.587-.81-4.077-.1-.512-.103-.533-.279-1.344-.184-.854-.433-1.88-.864-2.808-.452-.969-1.211-2.066-2.542-2.736ZM34.998 18h.48c.285 0 .68.034 1.069.23.793.4 1.29 1.07 1.627 1.794.33.71.542 1.547.723 2.387.173.797.175.81.269 1.291l.002.012c.096.495.284 1.457.812 4.09a1 1 0 0 1-1.489 1.057l-1.186-6.524-1.968.358.626 3.44-.024-.026 1.437 8.264A12.07 12.07 0 0 1 33.5 35c-1.733 0-3.103-.36-3.876-.627l1.437-8.26-.025.027.627-3.445-1.968-.358-1.186 6.524a1 1 0 0 1-1.489-1.058c.528-2.632.716-3.594.812-4.089l.002-.011c.094-.483.096-.495.269-1.292.181-.84.393-1.677.723-2.387.337-.724.834-1.395 1.627-1.794.39-.196.784-.23 1.069-.23h3.476Z"
      />
      <path d="M30.285 41.913A1.5 1.5 0 0 1 29 40.43V38c1.305.18 2.507.29 3.682.335l-.744 2.518a1.5 1.5 0 0 1-1.653 1.06ZM34.265 38.354l.806 2.53A1.5 1.5 0 0 0 38 40.428v-2.336c-1.31.157-2.527.245-3.735.262Z" />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgMaleAndFemale);
export default ForwardRef;
