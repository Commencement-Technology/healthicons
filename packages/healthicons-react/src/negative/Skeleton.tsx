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
      <g clipPath="url(#skeleton_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM18.462 19.835c-.462 0-1.847-.453-1.847-2.487 0-.805-.252-1.186-.558-1.646C15.59 15 15 14.112 15 11.243c0-9.657 18-9.657 18 0 0 2.87-.59 3.757-1.057 4.46-.306.46-.558.84-.558 1.645 0 2.035-1.808 2.487-1.847 2.487-.038 0-.615 1.356-.615 2.26 0 .776-1.921.887-3.923.902V24.5h6.5c2.892 0 4.268 2.146 4.883 3.923.312.904.465 1.793.54 2.447A12.397 12.397 0 0 1 37 31.904v.066l.001.02v.008S37 32 36 32h1a1 1 0 0 1-2 .001V31.992a5.073 5.073 0 0 0-.008-.222 10.33 10.33 0 0 0-.056-.671 9.72 9.72 0 0 0-.444-2.022c-.51-1.474-1.384-2.577-2.992-2.577H25v1.209c.834.047 1.65.156 2.365.33.5.121.98.282 1.392.495.401.206.82.502 1.091.936a1 1 0 0 1-1.696 1.06s-.015-.023-.066-.065a1.402 1.402 0 0 0-.244-.153 4.42 4.42 0 0 0-.95-.33c-.548-.133-1.2-.225-1.892-.27v1.997c.834.047 1.65.156 2.365.33.5.121.98.282 1.392.495.401.206.82.502 1.091.936a1 1 0 0 1-1.696 1.06s-.015-.023-.066-.065a1.402 1.402 0 0 0-.244-.153 4.42 4.42 0 0 0-.95-.33c-.548-.133-1.2-.225-1.892-.27V36h4c1.108 0 1.939.527 2.513 1.24.549.68.876 1.538 1.08 2.32.407 1.562.407 3.163.407 3.436V43a1 1 0 1 1-2 0c0-.241-.002-1.63-.343-2.935-.17-.656-.406-1.204-.701-1.57-.27-.335-.564-.495-.956-.495H19c-.392 0-.686.16-.956.495-.295.366-.53.914-.701 1.57C17.003 41.37 17 42.759 17 43a1 1 0 1 1-2 0v-.004c0-.273 0-1.874.407-3.436.204-.782.531-1.64 1.08-2.32C17.061 36.527 17.892 36 19 36h4v-2.287c-.692.044-1.344.136-1.892.27a4.42 4.42 0 0 0-.95.33c-.113.057-.192.11-.244.152-.05.042-.066.065-.066.065a1 1 0 1 1-1.696-1.06c.271-.434.69-.73 1.09-.936a6.37 6.37 0 0 1 1.393-.495c.716-.174 1.53-.283 2.365-.33v-1.996c-.692.044-1.344.136-1.892.27a4.42 4.42 0 0 0-.95.33c-.113.057-.192.11-.244.152-.05.042-.066.065-.066.065a1 1 0 1 1-1.696-1.06c.271-.434.69-.73 1.09-.936a6.37 6.37 0 0 1 1.393-.495c.716-.174 1.53-.283 2.365-.33V26.5h-6.5c-1.608 0-2.482 1.104-2.992 2.577a9.72 9.72 0 0 0-.444 2.022 10.33 10.33 0 0 0-.063.851v.043L13 32A1 1 0 0 1 11 32v-.03l.001-.066c.002-.056.004-.134.009-.233.01-.196.029-.472.067-.801.075-.654.228-1.544.54-2.447.615-1.776 1.99-3.923 4.883-3.923H23v-1.503c-2.002-.015-3.923-.126-3.923-.901 0-.905-.154-2.261-.616-2.261Zm.223-2.01a.302.302 0 0 0 .01.02c1.08.107 1.63.93 1.801 1.237.225.4.339.828.403 1.128.048.228.085.466.112.703.788.084 1.843.087 2.989.087 1.184 0 2.27-.003 3.066-.096a9.756 9.756 0 0 1 .516-1.62 4.89 4.89 0 0 1 .13-.285 2.102 2.102 0 0 1 .611-.754c.074-.056.333-.252.733-.351l.006-.003a.703.703 0 0 0 .16-.095.374.374 0 0 0 .103-.12c.018-.035.06-.128.06-.328 0-1.484.657-2.43.968-2.878.051-.073.093-.134.12-.18.174-.292.527-.931.527-3.047 0-1.701-.756-2.933-1.976-3.806C27.744 6.522 25.926 6 24 6c-1.926 0-3.745.522-5.024 1.437C17.756 8.31 17 9.542 17 11.243c0 2.116.353 2.755.526 3.047.028.046.07.107.121.18.31.447.968 1.394.968 2.878 0 .28.047.423.07.477ZM23 14a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        />
      </g>
      <defs>
        <clipPath id="skeleton_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgSkeleton);
export default ForwardRef;
