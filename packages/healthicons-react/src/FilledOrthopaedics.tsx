import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledOrthopaedics = (
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
        d="M9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Zm8.25 5.938a.982.982 0 0 1 1.167-.958c4.191.784 6.973.794 11.165.003a.981.981 0 0 1 1.168.956c0 .534.433.966.966.966H32a1 1 0 0 1 1 1v.874a1 1 0 0 1-1 1h-.25a1 1 0 0 0-1 1v.387a.989.989 0 0 1-.746.962c-4.465 1.116-7.327 1.115-11.998-.006a.99.99 0 0 1-.756-.965v-.378a1 1 0 0 0-1-1H16a1 1 0 0 1-1-1v-.874a1 1 0 0 1 1-1h.282a.968.968 0 0 0 .968-.967Zm2.25.8a1 1 0 0 1 1 1v2.24a1 1 0 1 1-2 0v-2.24a1 1 0 0 1 1-1Zm-1.083 7.242a.982.982 0 0 0-1.167.958.968.968 0 0 1-.968.967H16a1 1 0 0 0-1 1v.874a1 1 0 0 0 1 1h.25a1 1 0 0 1 1 1v.378a.99.99 0 0 0 .756.965c4.67 1.121 7.533 1.122 11.998.006a.989.989 0 0 0 .746-.962v-.387a1 1 0 0 1 1-1H32a1 1 0 0 0 1-1v-.874a1 1 0 0 0-1-1h-.284a.966.966 0 0 1-.966-.966.981.981 0 0 0-1.168-.956c-4.192.79-6.974.781-11.165-.003Zm2.083 2.758a1 1 0 1 0-2 0v2.24a1 1 0 1 0 2 0v-2.24Zm-3.25 7.2a.982.982 0 0 1 1.167-.958c4.191.784 6.973.794 11.165.003a.981.981 0 0 1 1.168.956c0 .534.433.966.966.966H32a1 1 0 0 1 1 1v.874a1 1 0 0 1-1 1h-.25a1 1 0 0 0-1 1v.387a.989.989 0 0 1-.746.962c-4.465 1.116-7.327 1.115-11.998-.006a.99.99 0 0 1-.756-.965v-.378a1 1 0 0 0-1-1H16a1 1 0 0 1-1-1v-.874a1 1 0 0 1 1-1h.282a.968.968 0 0 0 .968-.967Zm2.25.8a1 1 0 0 1 1 1v2.24a1 1 0 1 1-2 0v-2.24a1 1 0 0 1 1-1Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFilledOrthopaedics);
export default ForwardRef;
