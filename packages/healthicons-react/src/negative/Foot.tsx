import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgFoot = (
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
      <g clipPath="url(#foot_svg__a)" fill="#000">
        <path d="M35.5 24a1 1 0 0 1 1 1h-1 1v.022l-.001.04c0 .031-.003.074-.006.127a7.383 7.383 0 0 1-.357 1.814c-.36 1.084-1.104 2.444-2.622 3.355a1 1 0 0 1-1.029-1.716c.983-.589 1.49-1.479 1.754-2.27a5.38 5.38 0 0 0 .258-1.297l.003-.068v-.012a1 1 0 0 1 1-.995Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0Zm-8.549 9a1 1 0 0 1 1 1v12.395c0 1.844.627 3.673 1.422 5.544.6 1.411 1.127 3.154 1.127 4.876 0 2.415-1.065 4.017-2.478 4.976-1.359.92-2.974 1.209-4.13 1.209-1.394 0-2.31-.302-3.084-.688-.24-.12-.486-.259-.702-.38l-.001-.001a23.759 23.759 0 0 0-.263-.148 5.291 5.291 0 0 0-.86-.392c-.28-.095-.887-.161-1.736-.174a34.74 34.74 0 0 0-2.498.07c-.868.05-1.639.366-2.584.753-.272.112-.56.23-.868.348-.97.375-2.262.612-4.227.612-2.022 0-2.988-.119-3.65-.407-.274-.12-.499-.276-.633-.369l-.07-.047a2.237 2.237 0 0 0-.122-.077 3.381 3.381 0 0 1-.958.464c-.836.266-2.2.436-4.763.436-.876 0-1.624-.214-2.205-.661-.582-.449-.897-1.054-1.047-1.651-.286-1.142-.013-2.402.274-3.182a1 1 0 0 1 .939-.654h3.723l.67-.545c1.168-.951 2.502-1.617 3.855-2.109 1.767-.641 4.011-1.626 6.046-2.939 1.991-1.283 3.693-2.822 4.61-4.578l.997-10.654V10a1 1 0 0 1 1-1h11.216Z"
        />
      </g>
      <defs>
        <clipPath id="foot_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFoot);
export default ForwardRef;
