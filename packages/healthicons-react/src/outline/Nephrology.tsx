import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgNephrology = (
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
        d="M15.546 31.316c-7.901-3.778-5.026-15.951.379-17.866 2.241-.795 4.781 2.036 4.796 3.762.006.747-.332 1.468-.685 2.22-.463.987-.95 2.025-.714 3.242.417 2.143.905 5.755-.157 7.444-1.063 1.69-2.158 1.896-3.619 1.198ZM32.65 31.316c7.901-3.778 5.026-15.951-.379-17.866-2.242-.795-4.781 2.036-4.796 3.762-.006.747.332 1.468.685 2.22.463.987.95 2.025.714 3.242-.417 2.143-.905 5.755.157 7.444 1.063 1.69 2.158 1.896 3.619 1.198Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 39a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v30ZM40 9a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h12.012V27.363c0-.924-.288-1.197-.378-1.269a.492.492 0 0 0-.171-.09l-.035-.007h.01l.013.002h.019s.002 0 .03-.999c.028-1 .03-1 .03-1h.011l.016.002a1.31 1.31 0 0 1 .145.014 2.493 2.493 0 0 1 1.177.513c.665.529 1.133 1.437 1.133 2.834V40h2.172V27.363c0-1.397.468-2.305 1.133-2.834a2.491 2.491 0 0 1 1.177-.513 1.782 1.782 0 0 1 .144-.014l.016-.001h.012l.03.999c.028 1 .03 1 .03 1H27.735l.01-.001.013-.001.01-.001s-.015.002-.035.008a.492.492 0 0 0-.17.089c-.092.072-.38.345-.38 1.268V40H39a1 1 0 0 0 1-1V9Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgNephrology);
export default ForwardRef;
