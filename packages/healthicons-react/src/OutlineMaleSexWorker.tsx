import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineMaleSexWorker = (
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
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path
        fill="#333"
        fillRule="evenodd"
        d="M14.5 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM27 18a4 4 0 0 0 4 4h1v2h2v-2h1a4 4 0 0 0 0-8h-1v-4h1a2 2 0 0 1 2 2h2a4 4 0 0 0-4-4h-1V6h-2v2h-1a4 4 0 0 0 0 8h1v4h-1a2 2 0 0 1-2-2h-2Zm10 0a2 2 0 0 0-2-2h-1v4h1a2 2 0 0 0 2-2Zm-8-6a2 2 0 0 0 2 2h1v-4h-1a2 2 0 0 0-2 2Zm-5 23c0-1.306.835-2.417 2-2.83V26h2v1h10v-1h2v6.17c1.165.413 2 1.524 2 2.83v7h-2v-3H26v3h-2v-7Zm10-6h-2v3h2v-3Zm-7 5a1 1 0 0 0-1 1v2h14v-2a1 1 0 0 0-1-1H27Zm9-5v3h2v-3h-2Zm-6 0h-2v3h2v-3ZM12.546 16c-1.09 0-2.184.245-3.176.841-.989.595-1.699 1.433-2.191 2.343C6.249 20.9 6 23.048 6 25.144v.088a1 1 0 0 0 .004.089l.008.088v.013l.002.044a31.157 31.157 0 0 1 .001.74c0 .115-.002.24-.004.373v.002C6.006 26.988 6 27.474 6 28a3 3 0 0 0 3.5 2.958V39.5a2.5 2.5 0 0 0 4.982.298l.018-.148.018.148A2.5 2.5 0 0 0 19.5 39.5v-8.542A3 3 0 0 0 23 28c0-.525-.006-1.01-.011-1.418v-.004l-.004-.372a30.656 30.656 0 0 1 0-.74l.002-.044.001-.013.008-.088a.897.897 0 0 0 .004-.089v-.088c0-2.096-.25-4.243-1.179-5.96-.492-.91-1.202-1.748-2.191-2.343-.992-.596-2.085-.841-3.176-.841h-3.908Zm4.484 24a.5.5 0 0 0 .47-.5V23h2v5.866A1 1 0 0 0 21 28c0-.512-.006-.988-.01-1.397l-.002-.074a171.75 171.75 0 0 1-.003-.302c-.005-.503-.004-.826.011-.995l.004-.044v-.044c0-1.996-.25-3.736-.938-5.008-.353-.654-.832-1.201-1.463-1.58-.631-.38-1.356-.556-2.145-.556h-3.908c-.789 0-1.514.176-2.145.555-.63.38-1.11.927-1.463 1.58C8.249 21.409 8 23.149 8 25.144v.045l.004.044c.015.17.017.492.011.995 0 .117-.002.243-.004.375C8.006 27.011 8 27.488 8 28a1 1 0 0 0 1.5.867V23h2v16.5a.5.5 0 0 0 .996.06l1.011-8.423a1 1 0 0 1 1.986 0l1.01 8.423a.5.5 0 0 0 .527.44Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineMaleSexWorker);
export default ForwardRef;
