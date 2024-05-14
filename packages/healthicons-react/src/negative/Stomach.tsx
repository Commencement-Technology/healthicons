import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgStomach = (
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
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <g clipPath="url(#stomach_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm23.542 17.038c-3.653-.078-5.647-.63-6.827-1.916-.641-.7-1.12-1.7-1.434-3.187-.315-1.493-.45-3.412-.45-5.887h-2c0 2.525.136 4.606.493 6.3.36 1.7.954 3.075 1.918 4.126 1.774 1.934 4.535 2.487 8.254 2.564-.115 6.76-1.42 9.456-2.927 10.585-.787.59-1.739.841-2.893.928-.785.058-1.567.04-2.413.02-.455-.012-.929-.023-1.432-.023-2.163 0-3.8.669-5 1.737-1.182 1.051-1.866 2.423-2.263 3.72-.398 1.3-.527 2.58-.559 3.524a14.968 14.968 0 0 0 .024 1.487l.007.093.003.027v.013l.996-.101.995-.101v-.001l-.002-.014a12.968 12.968 0 0 1-.024-1.335c.028-.837.142-1.93.472-3.006.33-1.078.86-2.082 1.68-2.812.79-.704 1.924-1.218 3.607-1.23 3.432.465 5.846 2.548 8.437 4.784l.112.097c2.573 2.22 5.386 4.618 9.427 4.618 3.952 0 6.592-1.668 8.19-4.22C41.488 35.35 42 32.13 42 29.049v-11c0-3.242-1.121-5.76-2.881-7.468-1.748-1.696-4.067-2.532-6.367-2.532s-4.618.836-6.366 2.532c-1.573 1.526-2.636 3.699-2.844 6.458Zm1.438 7.905c3.338-1.804 5.869-.52 8.252.69 2.208 1.122 4.289 2.179 6.768.655v-8.24c0-2.758-.94-4.74-2.274-6.032-1.344-1.305-3.15-1.968-4.974-1.968-1.824 0-3.63.663-4.974 1.968-1.333 1.293-2.273 3.274-2.273 6.032 0 2.769-.179 5.04-.525 6.895Z"
        />
      </g>
      <defs>
        <clipPath id="stomach_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgStomach);
export default ForwardRef;
