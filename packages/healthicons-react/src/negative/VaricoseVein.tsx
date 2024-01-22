import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgVaricoseVein = (
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
      <g clipPath="url(#varicose_vein_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM20.931 4h10.61c.077.159.158.367.242.583.1.253.203.518.31.726 1.859 3.638 4.675 9.146 2.367 17.354-1.477 5.255-2.679 11.3-2.518 12.158 2.192 1.545 2.657 4.996 2.047 5.874-.078.111-.158.238-.244.375-.592.941-1.487 2.363-4.046 2.61-1.026.098-1.636-.137-2.323-.402-1.275-.491-2.82-1.086-7.793.158-3.819.954-6.895.738-8.582-.957-1.687-1.695-.929-2.87 0-3.826.606-.625 1.428-.434 2.324-.227.478.111.976.227 1.475.227 1.435 0 9.088-3.349 9.088-3.349l-3.907-24.763.95-6.541Zm4.983 4.94a.957.957 0 0 0-1.372 1.333c.437.45.575.77.621.989.048.222.024.451-.067.783l-.01.033a7.56 7.56 0 0 1-.047.152v.001c-.115.357-.321 1-.308 1.678.018.92.398 1.89 1.387 2.883a.957.957 0 1 0 1.356-1.35c-.698-.7-.823-1.218-.83-1.57-.007-.329.07-.572.172-.9l.085-.28a2.585 2.585 0 0 1 2.476-1.033.956.956 0 1 0 .275-1.894 4.399 4.399 0 0 0-2.811.497c-.194-.446-.5-.883-.927-1.322Zm4.35 11.028a.957.957 0 0 0-1.187.649c-.083.28-.22.418-.343.504-.125.086-.245.13-.392.178a1.124 1.124 0 0 1-.233-.124 2.742 2.742 0 0 1-.704-.706.957.957 0 1 0-1.58 1.08c.193.282.427.552.682.79-.522.553-.905 1.343-.867 2.373a.957.957 0 0 0 1.912-.07c-.018-.507.169-.825.404-1.047.226-.215.506-.344.7-.4.065-.011.13-.028.195-.05l.027-.008.023-.008c.372-.118 1.58-.502 2.012-1.974a.957.957 0 0 0-.649-1.187Z"
          fill="#000"
        />
      </g>
      <defs>
        <clipPath id="varicose_vein_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgVaricoseVein);
export default ForwardRef;
