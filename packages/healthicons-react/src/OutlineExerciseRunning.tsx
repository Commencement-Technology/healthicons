import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineExerciseRunning = (
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
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M27.68 22.212c.162.151.325.294.492.427 1.29 1.035 2.669 1.48 3.982 1.55 2.21.118 4.176-.868 4.975-1.27l.225-.11a2 2 0 0 0-1.706-3.618l-.334.16c-.884.427-1.867.901-2.947.844-.525-.029-1.091-.194-1.692-.676-.625-.502-1.372-1.415-2.094-3.072-.585-1.342-1.457-2.382-2.695-2.973-1.186-.566-2.448-.59-3.573-.456-3.015.358-5.306 2.106-6.864 3.73-1.283 1.336-2.24 2.786-2.71 3.497-.095.145-.17.259-.224.335a2 2 0 0 0 3.27 2.303c.112-.158.235-.343.372-.55.5-.752 1.185-1.782 2.178-2.816.782-.815 1.658-1.52 2.622-1.983l-.733 2.022c-.74 2.046-1.563 4.34-1.696 4.8a2.2 2.2 0 0 0-.056.957c.031.202.085.373.128.493.085.238.198.464.298.646.204.376.484.809.785 1.248.61.891 1.432 1.986 2.247 3.046.72.935 1.453 1.866 2.056 2.632l.241.307c.324.411.595.756.794 1.015.09.116.15.198.19.25.039.133.088.326.147.579.117.503.251 1.157.393 1.876.092.462.187.955.28 1.442.19.983.375 1.943.517 2.585a2 2 0 1 0 3.906-.864c-.13-.59-.297-1.45-.478-2.392-.097-.502-.198-1.027-.3-1.546a65.216 65.216 0 0 0-.422-2.007 15.3 15.3 0 0 0-.202-.79c-.05-.168-.152-.518-.326-.823a8.15 8.15 0 0 0-.526-.738l-.01-.012c-.214-.279-.498-.64-.82-1.049l-.243-.309h0a294.163 294.163 0 0 1-2.258-2.897l2.812-5.793ZM20.607 34.33l-2.855-3.967-.82 2.359-4.974-1.169a2 2 0 1 0-.915 3.894l6.728 1.581a2 2 0 0 0 2.346-1.29l.49-1.407Z"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M32.001 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 2a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineExerciseRunning);
export default ForwardRef;
