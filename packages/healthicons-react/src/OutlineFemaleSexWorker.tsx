import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineFemaleSexWorker = (
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
        fill="#333"
        fillRule="evenodd"
        d="M19 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-2 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm22 8.25a4 4 0 0 1-4 4h-1v2h-2v-2h-1a4 4 0 0 1-4-4h2a2 2 0 0 0 2 2h1v-4h-1a4 4 0 0 1 0-8h1v-2h2v2h1a4 4 0 0 1 4 4h-2a2 2 0 0 0-2-2h-1v4h1a4 4 0 0 1 4 4Zm-2 0a2 2 0 0 1-2 2h-1v-4h1a2 2 0 0 1 2 2Zm-8-6a2 2 0 0 1 2-2h1v4h-1a2 2 0 0 1-2-2Zm-3 20.17a3.001 3.001 0 0 0-2 2.83v7h2v-3h14v3h2v-7a3.001 3.001 0 0 0-2-2.83v-6.17h-2v1H28v-1h-2v6.17Zm6-3.17h2v3h-2v-3Zm-6 6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2H26v-2Zm10-3v-3h2v3h-2Zm-8-3h2v3h-2v-3ZM16.479 16c.43 0 1.18.048 1.967.444 1.33.67 2.09 1.767 2.541 2.736.432.927.68 1.954.865 2.808.175.811.18.832.28 1.344.095.49.281 1.45.81 4.077a3 3 0 0 1-3.124 3.586l.54 3.1c.149.86-.284 1.797-1.21 2.127A14.01 14.01 0 0 1 14.5 37c-2.096 0-3.74-.454-4.648-.778-.926-.33-1.36-1.268-1.21-2.126l.54-3.1A3 3 0 0 1 6.06 27.41c.527-2.628.713-3.587.809-4.077a46 46 0 0 1 .279-1.345c.185-.854.433-1.88.865-2.808.45-.969 1.21-2.066 2.541-2.736A4.349 4.349 0 0 1 12.521 16h3.958Zm0 2H12.52a2.36 2.36 0 0 0-1.068.23c-.792.4-1.29 1.07-1.627 1.794-.33.71-.542 1.548-.723 2.387-.173.797-.175.81-.269 1.292l-.002.011c-.096.495-.284 1.457-.812 4.09a1 1 0 0 0 1.489 1.058l1.186-6.525 1.968.358-.627 3.445.024-.027-1.436 8.26c.773.266 2.143.627 3.876.627s3.103-.36 3.876-.627l-1.437-8.264.024.027-.626-3.441 1.968-.358 1.186 6.524a1 1 0 0 0 1.49-1.058c-.53-2.632-.716-3.595-.813-4.089l-.002-.011a44.295 44.295 0 0 0-.269-1.292c-.181-.84-.393-1.677-.723-2.387-.337-.724-.834-1.395-1.627-1.794a2.358 2.358 0 0 0-1.069-.23Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        d="M11.285 41.913A1.5 1.5 0 0 1 10 40.43V38c1.306.18 2.507.29 3.682.335l-.744 2.518a1.5 1.5 0 0 1-1.653 1.06Zm4.785-1.029-.805-2.53A35.224 35.224 0 0 0 19 38.092v2.337a1.5 1.5 0 0 1-2.93.455Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineFemaleSexWorker);
export default ForwardRef;
