import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const Svg4X4 = (
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
      <g clipPath="url(#4x4_svg__a)" fill="#333">
        <path d="M19.892 8.39a1 1 0 0 0-1.224.707l-1.553 5.795 18.352 4.918 1.553-5.796a1 1 0 0 0-.707-1.225l-16.42-4.4ZM15.268 23.715a1.5 1.5 0 1 0 .777-2.898 1.5 1.5 0 0 0-.777 2.898ZM34.492 27.313a1.5 1.5 0 1 1-2.898-.776 1.5 1.5 0 0 1 2.898.776Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0v48h48V0H0Zm13.682 36.172C14.526 36.922 15 37.939 15 39v1a3 3 0 0 1 6 0 2 2 0 0 1 4 0h9.5a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1v-2c0-1.06.474-2.078 1.318-2.828C8.162 35.422 9.307 35 10.5 35c1.194 0 2.338.421 3.182 1.172Zm3.054-27.593a3 3 0 0 1 3.674-2.121l16.42 4.4a3 3 0 0 1 2.122 3.674l-.13.483 2.214.593a1 1 0 0 1 .707 1.224l-.906 3.381a1 1 0 0 1-1.225.707l-2.213-.593-.416 1.555c.04.073.076.148.108.227l.858 2.14c.16.402.187.844.075 1.262l-1.23 4.59a2 2 0 0 1-2.449 1.414l-5.743-1.539 1.449-5.406a1 1 0 0 0-.707-1.225l-8.694-2.33a1 1 0 0 0-1.225.708l-1.448 5.406-6.235-1.67a2 2 0 0 1-1.414-2.45l1.197-4.47a2 2 0 0 1 .876-1.18l2.292-1.426.085-.05.405-1.509-2.314-.62a1 1 0 0 1-.707-1.224l.906-3.381a1 1 0 0 1 1.225-.707l2.313.62.13-.483Zm.909 20.366-5.796-1.552-.76 2.835a1 1 0 0 0 .707 1.225l3.864 1.035a1 1 0 0 0 1.225-.707l.76-2.835Zm10.8 2.941 5.796 1.553-.748 2.792a1 1 0 0 1-1.225.707l-3.864-1.035a1 1 0 0 1-.707-1.225l.748-2.792Zm-8.382-4.816 1.036-3.864 2.515.675-1.127 3.839-2.424-.65Zm4.357 1.168 1.127-3.84 2.313.62-1.035 3.864-2.405-.645Z"
        />
      </g>
      <defs>
        <clipPath id="4x4_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(Svg4X4);
export default ForwardRef;
