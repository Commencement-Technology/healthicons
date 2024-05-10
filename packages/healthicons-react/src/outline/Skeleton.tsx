import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSkeleton = (
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
        d="M18 14a3 3 0 0 1 5.939-.606 3.108 3.108 0 1 1-.024 1.319A3.001 3.001 0 0 1 18 14Zm3-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm4.856 1.11a1.107 1.107 0 1 1 2.214-.002 1.107 1.107 0 0 1-2.214.001Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.615 17.348c0 2.035 1.385 2.487 1.847 2.487.461 0 .615 1.356.615 2.26 0 .776 1.921.887 3.923.902V24.5h-6.5c-2.892 0-4.268 2.146-4.883 3.923a11.705 11.705 0 0 0-.54 2.447 12.397 12.397 0 0 0-.077 1.1V32a1 1 0 0 0 2 0v-.05l.008-.18c.007-.16.023-.391.056-.671a9.72 9.72 0 0 1 .444-2.022c.51-1.474 1.384-2.577 2.992-2.577H23v1.209c-.834.047-1.65.156-2.365.33-.5.121-.98.282-1.392.495-.401.206-.82.502-1.091.936a1 1 0 0 0 1.696 1.06s.015-.023.066-.065c.052-.042.13-.095.244-.153a4.42 4.42 0 0 1 .95-.33c.548-.133 1.2-.225 1.892-.27v1.997c-.834.047-1.65.156-2.365.33-.5.121-.98.282-1.392.495-.401.206-.82.502-1.091.936a1 1 0 0 0 1.696 1.06s.015-.023.066-.065c.052-.042.13-.095.244-.153a4.42 4.42 0 0 1 .95-.33c.548-.133 1.2-.225 1.892-.27V36h-4c-1.108 0-1.939.527-2.513 1.24-.549.68-.876 1.538-1.08 2.32C15 41.122 15 42.723 15 42.996V43a1 1 0 1 0 2 0c0-.241.002-1.63.343-2.935.17-.656.406-1.204.701-1.57.27-.335.564-.495.956-.495h10c.392 0 .686.16.956.495.295.366.53.914.701 1.57.34 1.305.343 2.694.343 2.935a1 1 0 1 0 2 0v-.004c0-.273 0-1.874-.407-3.436-.204-.782-.531-1.64-1.08-2.32C30.939 36.527 30.108 36 29 36h-4v-2.287c.692.044 1.344.136 1.892.27.403.097.722.212.95.33.113.057.192.11.244.152.05.042.066.065.066.065a1 1 0 0 0 1.696-1.06c-.271-.434-.69-.73-1.09-.936a6.37 6.37 0 0 0-1.393-.495 13.404 13.404 0 0 0-2.365-.33v-1.996c.692.044 1.344.136 1.892.27.403.097.722.212.95.33.113.057.192.11.244.152.05.042.066.065.066.065a1 1 0 0 0 1.696-1.06c-.271-.434-.69-.73-1.09-.936a6.37 6.37 0 0 0-1.393-.495 13.404 13.404 0 0 0-2.365-.33V26.5h6.5c1.608 0 2.482 1.104 2.992 2.577a9.72 9.72 0 0 1 .444 2.022 10.33 10.33 0 0 1 .064.893V32.002A1 1 0 0 0 37 32h-1c1 0 1-.002 1-.002v-.028l-.001-.051v-.015a12.397 12.397 0 0 0-.076-1.034 11.705 11.705 0 0 0-.54-2.447c-.615-1.776-1.99-3.923-4.883-3.923H25v-1.503c2.002-.015 3.923-.126 3.923-.901 0-.905.577-2.261.616-2.261.038 0 1.846-.453 1.846-2.487 0-.805.252-1.186.558-1.646C32.41 15 33 14.112 33 11.243c0-9.657-18-9.657-18 0 0 2.87.59 3.757 1.057 4.46.306.46.558.84.558 1.645Zm2.08.498a.302.302 0 0 1-.01-.021c-.023-.054-.07-.198-.07-.477 0-1.484-.657-2.43-.968-2.877-.051-.074-.093-.135-.12-.181-.174-.292-.527-.931-.527-3.047 0-1.701.756-2.933 1.976-3.806C20.256 6.522 22.074 6 24 6c1.926 0 3.745.522 5.024 1.437C30.244 8.31 31 9.542 31 11.243c0 2.116-.353 2.755-.526 3.047-.028.046-.07.107-.121.18-.31.447-.968 1.394-.968 2.878 0 .2-.042.293-.06.327a.374.374 0 0 1-.103.12.703.703 0 0 1-.16.096l-.006.003a1.996 1.996 0 0 0-1.042.644 2.102 2.102 0 0 0-.301.461 4.89 4.89 0 0 0-.13.286 9.756 9.756 0 0 0-.517 1.619c-.795.093-1.882.096-3.066.096-1.146 0-2.201-.003-2.99-.087a7.516 7.516 0 0 0-.111-.703 4.04 4.04 0 0 0-.403-1.128c-.171-.306-.722-1.13-1.802-1.236Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgSkeleton);
export default ForwardRef;
