import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPsychology = (
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
      <g
        clipPath="url(#psychology_svg__a)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#000"
      >
        <path d="M48 0H0v48h48V0ZM9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Z" />
        <path d="M36.404 20.882c-.022 1.457-.04 2.74.691 4.256 0 0 2.164 1.947 1.88 3.509-.286 1.562-3.104 1.992-3.104 1.992 0 8.409-10.7 4.9-10.7 4.9V42.5h-4.757c-1.168.093-2 .072-3.188.041-.747-.018-1.636-.041-2.837-.041V30.762C11.345 28.487 9 25.422 9 21.45c0-3.302 1.378-6.469 3.83-8.803C15.284 10.311 18.61 9 22.08 9a18.941 18.941 0 0 1 7.669 1.607 11.983 11.983 0 0 1 4.815 3.509 9.853 9.853 0 0 1 1.843 5.478c.01.45.004.876-.002 1.288Zm-9.53 1.351c-.13.146-.197.222-.605.222a3.264 3.264 0 0 1-1.805-.543 3.63 3.63 0 0 1-1.34.873c-.46.22-.659.544-.903.942l-.137.221c-.32.5-.488 1.077-.487 1.665v3.315h-3.43c-.087-.71-.249-1.392-.642-1.996a4.851 4.851 0 0 0-1.543-1.495 3.21 3.21 0 0 1-1.349-1.057 3.086 3.086 0 0 1-.592-1.584 3.071 3.071 0 0 1-.216-4.044 2.788 2.788 0 0 1-.113-.828 3.071 3.071 0 0 1 .627-1.862l1.643-1.133a3.152 3.152 0 0 1 1.183-1.35 3.278 3.278 0 0 1 2.508-.418 3.255 3.255 0 0 1 1.924-.828l3.49.237c.77.185 1.444.64 1.893 1.277h.227l2.017.687c.572.446.97 1.069 1.128 1.765.692.293 1.26.808 1.609 1.459.348.651.457 1.4.306 2.119a3.19 3.19 0 0 1-1.132 1.834l-2.066.732a3.277 3.277 0 0 1-1.828-.53c-.195.129-.291.236-.366.32Zm5.46 3.017a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-14.167 7.083H21.5v-2h-3.333v2Zm3.333 3.334h-3.333v-2H21.5v2ZM18.167 39H21.5v-2h-3.333v2Z" />
      </g>
      <defs>
        <clipPath id="psychology_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPsychology);
export default ForwardRef;
