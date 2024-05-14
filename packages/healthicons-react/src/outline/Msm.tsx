import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMsm = (
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 10.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM37 10.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM36.15 41.995A2.5 2.5 0 0 0 38.5 39.5v-8.542A3 3 0 0 0 42 28c0-.521-.006-1.004-.01-1.41l-.001-.01v-.003l-.004-.371a30.656 30.656 0 0 1 0-.74l.001-.014.001-.03v-.006l.001-.007.008-.088a.967.967 0 0 0 .004-.089v-.088c0-2.096-.25-4.243-1.179-5.96-.492-.91-1.202-1.748-2.191-2.343-.992-.596-2.085-.841-3.176-.841h-3.908c-3.381 0-5.957 2.228-7.546 4.304C22.411 18.228 19.835 16 16.454 16h-3.908c-1.09 0-2.184.245-3.176.841-.989.595-1.699 1.433-2.191 2.343C6.249 20.9 6 23.048 6 25.144v.088a1 1 0 0 0 .004.089l.008.088v.013l.002.044a31.157 31.157 0 0 1 .001.74c0 .115-.002.24-.004.373v.002C6.006 26.988 6 27.474 6 28a3 3 0 0 0 3.5 2.958V39.5a2.5 2.5 0 0 0 4.985.276l.015-.138.015.138A2.5 2.5 0 0 0 19.5 39.5v-9.477l.243-5.34c.372.593.663 1.192.872 1.736.28.73.385 1.293.385 1.581a3 3 0 1 0 6 0c0-.288.105-.85.385-1.58.21-.545.5-1.144.872-1.736l.243 5.339V39.5a2.5 2.5 0 0 0 4.982.298l.018-.148.018.148a2.5 2.5 0 0 0 2.631 2.197ZM11.5 39.5a.5.5 0 0 0 .997.055l1.01-9.082a1 1 0 0 1 1.987 0l1.01 9.082a.5.5 0 0 0 .996-.055V30l.001-.045.36-7.92a1 1 0 0 1 1.653-.712 9.639 9.639 0 0 1 1.488 1.652 12.17 12.17 0 0 1 1.48 2.728c.323.841.518 1.663.518 2.297a1 1 0 1 0 2 0c0-1.76-.943-4.211-2.377-6.196C21.195 19.827 19.048 18 16.454 18h-3.908c-.789 0-1.514.176-2.145.555-.63.38-1.11.927-1.463 1.58C8.249 21.409 8 23.149 8 25.144v.045l.004.044c.015.17.017.492.011.995 0 .117-.002.243-.004.375C8.006 27.011 8 27.488 8 28a1 1 0 0 0 1.5.867V23h2v16.5Zm13.877-17.696c-.067.093-.134.188-.199.283.394.691.742 1.416 1.024 2.147.232-.42.497-.844.796-1.259.47-.65.97-1.204 1.488-1.652a1 1 0 0 1 1.653.711l.36 7.92.001.046v9.5a.5.5 0 0 0 .996.06l1.011-8.423a1 1 0 0 1 1.986 0l1.01 8.423a.5.5 0 0 0 .997-.06V23h2v5.866A1 1 0 0 0 40 28c0-.512-.006-.988-.01-1.396V26.6l-.001-.01-.004-.364c-.006-.503-.004-.826.011-.995l.004-.044v-.044c0-1.996-.25-3.736-.938-5.008-.353-.654-.832-1.201-1.463-1.58-.631-.38-1.356-.556-2.145-.556h-3.908c-2.594 0-4.741 1.827-6.17 3.804Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgMsm);
export default ForwardRef;
