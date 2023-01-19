import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledAgriculture = (
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
        d="M19.176 21.647a1 1 0 0 0-.33 1.376c.919 1.498 1.7 2.985 2.22 4.336a1 1 0 0 0 1.867-.718c-.578-1.504-1.426-3.105-2.382-4.664a1 1 0 0 0-1.375-.33Zm10.414-.954a1 1 0 0 1 .217 1.397c-1.157 1.583-2.176 3.7-2.893 5.316a1 1 0 1 1-1.828-.812c.724-1.63 1.814-3.916 3.107-5.684a1 1 0 0 1 1.397-.217Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M27.24 12.037C29.58 9.359 42.105 6 42.105 6s-2.129 13.395-4.002 15.537c-1.395 1.596-5.84.599-8.018-.014 1.628-2.497 3.515-4.936 5.174-6.872a1 1 0 0 0-1.518-1.302c-1.673 1.952-3.612 4.45-5.31 7.047-.954-1.776-3.043-6.242-1.191-8.36ZM11 30H6v12h5v-2.043c1.02-.042 2.526-.096 3.047-.075 1.787.073 3.12.499 4.47.93 1.258.401 2.529.807 4.192.934.418.032.825.073 1.22.112 1.423.144 2.686.272 3.73-.112 1.332-.49 8.946-4.217 9.898-5.198.952-.98.476-3.628-2.475-3.138-1.456.242-3.143.938-4.674 1.569-1.571.647-2.977 1.227-3.797 1.177-1.618-.098-5.9-.882-5.9-.882l4.917.06s.695.036 1.65-.649 1.808-2.648.38-2.648c-1.427 0-2.95-.49-2.95-.49l-6.092-1.373s-2.094-.392-2.95 0c-.706.323-3.648 1.377-4.666 1.74V30ZM8.878 9.67s10.335 2.772 12.267 4.981c1.493 1.707-.116 5.262-.926 6.792a58.114 58.114 0 0 0-3.434-4.829 1 1 0 1 0-1.57 1.239 56.058 56.058 0 0 1 3.336 4.695c-1.868.506-5.27 1.203-6.37-.056-1.546-1.768-3.303-12.823-3.303-12.823Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFilledAgriculture);
export default ForwardRef;
