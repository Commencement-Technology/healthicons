import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBloodPressureMonitor = (
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
        d="M35 9.5a3.5 3.5 0 1 1 7 0v6c0 1.583-1.05 2.92-2.492 3.353.008 1.054.021 2.074.035 3.06.05 3.722.092 6.95-.187 9.604-.4 3.804-1.491 6.795-4.456 8.542-3.367 1.985-8.205 2.584-12.171 2.085-1.99-.251-3.856-.79-5.255-1.644-1.015-.62-1.856-1.46-2.244-2.523-2.085-.093-4.16-.472-5.8-1.152-1.765-.732-3.43-2-3.43-3.985V13.122h.003A2.558 2.558 0 0 1 6 13c0-2.761 4.477-5 10-5s10 2.239 10 5c0 .04-.001.082-.003.122H26v5.949a6.945 6.945 0 0 1 1.232.292 7.003 7.003 0 0 1-1.233 13.566c-.046 2.015-1.657 3.29-3.434 4.014-1.449.59-3.23.92-5.054 1.022.241.286.572.563 1.006.828 1.073.657 2.635 1.136 4.462 1.366 3.668.462 8.026-.126 10.905-1.823 2.143-1.262 3.106-3.447 3.483-7.028.266-2.53.226-5.573.177-9.224v-.001c-.014-1.026-.028-2.101-.037-3.226A3.501 3.501 0 0 1 35 15.5v-6Zm-12.823 5.247C23.774 13.948 24 13.215 24 13c0-.215-.226-.948-1.823-1.747C20.699 10.515 18.518 10 16 10s-4.7.515-6.177 1.253C8.226 12.052 8 12.785 8 13c0 .215.226.948 1.823 1.747C11.301 15.485 13.482 16 16 16s4.7-.515 6.177-1.253ZM16 18c3.271 0 6.175-.785 8-2v3.07a6.945 6.945 0 0 0-1.232.293 7.003 7.003 0 0 0 1.23 13.566c-.045.778-.674 1.545-2.188 2.161-1.524.621-3.631.933-5.799.909a20.927 20.927 0 0 1-.92-.031V17.98c.3.013.603.02.909.02Zm9 3.5-1.5 5 1.5 2 1.5-2-1.5-5Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgBloodPressureMonitor);
export default ForwardRef;