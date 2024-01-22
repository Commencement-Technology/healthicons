import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSynergistInsecticideBioassays = (
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
        d="M14 24a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 0 1 2.708 4.293l-4.001-4c.391-.188.83-.293 1.293-.293Zm-2.708 1.707a3 3 0 0 0 4.001 4.001l-4-4.001Z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 6a1 1 0 0 0-1 1v3.333a1 1 0 0 0 1 1h2V13H9a1 1 0 1 0 0 2h.063l-2.895 6.617a2 2 0 0 0-.168.801V41a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V22.418a2 2 0 0 0-.168-.801L18.937 15H19a1 1 0 1 0 0-2h-4v-1.667h2a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-6Zm.245 9L8 22.418V40h12V22.418L16.755 15h-5.51ZM14 10a1.333 1.333 0 1 0 0-2.667A1.333 1.333 0 0 0 14 10Z"
        fill="#000"
      />
      <path
        d="M36.677 31.486a1 1 0 1 0-1.781-.91l-1.29 2.523a1.5 1.5 0 0 0 .586 1.982l1.436.828-.134 2.222a8.854 8.854 0 0 0-.432.086.996.996 0 0 0-.243-.683l-2.225-2.577a1.5 1.5 0 0 0-1.135-.52h-.937l-1.65-2.928a1 1 0 1 0-1.743.982l1.866 3.31a1.25 1.25 0 0 0 1.089.636h1.146l2.066 2.393a4.194 4.194 0 0 0-.957.625c-.268-.86-1.509-1.316-2.841-1.026-.968.211-1.727.76-2.027 1.387a1.037 1.037 0 0 0-.04.026c-.291.202-.6.197-.814.059C26.404 39.761 26 39.3 26 38a1 1 0 1 0-2 0c0 1.667.528 2.93 1.53 3.58.903.584 1.96.515 2.778.068.525.216 1.208.273 1.917.119.834-.182 1.512-.614 1.876-1.131C32.403 41.429 33.505 42 37 42c4.375 0 5-.895 5-2 0-.388-.758-1.002-1.936-1.447l1.13-1.043a1.5 1.5 0 0 0 .271-1.868l-.928-1.562 1.21-2.151a1 1 0 0 0-1.744-.98l-1.422 2.528c-.22.39-.214.867.015 1.252l.943 1.587-1.853 1.711a8.852 8.852 0 0 0-.181-.012l.137-2.295a1.502 1.502 0 0 0-.747-1.389l-1.291-.745 1.073-2.1Z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M41 19.8c.616.338 1 .985 1 1.69V26H32v-4.51c0-.705.384-1.352 1-1.69v-7.6c-.616-.338-1-.985-1-1.69V6h10v4.51c0 .705-.384 1.352-1 1.69v7.6Zm-6-7.644c0-.705-.384-1.352-1-1.69v-.695h6v.696c-.616.337-1 .984-1 1.689v7.688c0 .705.384 1.352 1 1.69v.695h-6v-.696c.616-.337 1-.984 1-1.689v-7.688Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgSynergistInsecticideBioassays);
export default ForwardRef;
