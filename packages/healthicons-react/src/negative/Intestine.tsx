import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgIntestine = (
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
      <g clipPath="url(#intestine_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM29.2 7a3 3 0 1 0-6 0v2.726l-.564.005c-.648.004-1.415.01-2.194.05-1.468.078-3.452.294-5.132 1.213-.895.49-1.764 1.21-2.394 2.25-.633 1.044-.916 2.23-.916 3.474 0 1.727.75 3.157 1.966 4.146 1.076.875 2.388 1.306 3.51 1.555 2.003.444 4.528.522 6.726.59l.7.021c2.588.085 4.674.21 6.103.644.668.202.921.398.986.461a.38.38 0 0 1 .003.02 2.04 2.04 0 0 1-.114.049c-.194.075-.47.155-.85.223-1.654.298-4.014.204-6.89.07l-.21-.01c-2.581-.12-5.623-.262-8.032.179-1.252.229-2.7.671-3.877 1.654C10.706 27.42 10 28.97 10 30.76c0 1.428.343 2.777 1.123 3.934.774 1.148 1.828 1.885 2.887 2.351 1.988.875 4.35.944 6.163.9a65.68 65.68 0 0 0 2.61-.131l.116-.008c.487-.03.918-.058 1.301-.075V41a3 3 0 1 0 6 0v-5.4c0-.868-.297-1.734-.918-2.432a4.033 4.033 0 0 0-1.71-1.115c-.9-.312-1.894-.346-2.596-.344-.777.001-1.65.057-2.46.109l-.081.005c-.818.052-1.617.104-2.408.123-1.737.042-2.925-.096-3.6-.394-.267-.117-.324-.205-.33-.213a.393.393 0 0 1-.047-.117c-.02-.07-.043-.19-.049-.374.035-.016.077-.035.128-.055.194-.076.47-.156.848-.225 1.65-.302 4.01-.21 6.884-.077l.243.011c2.572.12 5.595.261 7.99-.17 1.25-.225 2.698-.662 3.875-1.638C37.29 27.6 38 26.05 38 24.262c0-1.687-.596-3.173-1.714-4.317-1.037-1.06-2.35-1.652-3.54-2.014-2.322-.703-5.236-.818-7.648-.897l-.577-.019c-2.388-.077-4.329-.14-5.747-.454a5.183 5.183 0 0 1-.725-.208.664.664 0 0 1 .14-.095c.42-.23 1.237-.415 2.57-.485.62-.033 1.253-.038 1.918-.043h.073c.61-.004 1.288-.009 1.893-.048.564-.036 1.421-.117 2.21-.439a3.888 3.888 0 0 0 1.51-1.075c.551-.65.837-1.458.837-2.291V7Z"
          fill="#000"
        />
      </g>
      <defs>
        <clipPath id="intestine_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIntestine);
export default ForwardRef;
