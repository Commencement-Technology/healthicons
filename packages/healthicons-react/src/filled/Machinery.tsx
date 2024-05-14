import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMachinery = (
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
      <path d="M11.988 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM13.988 8.5a4.48 4.48 0 0 1-.897 2.696c2.631.852 5.27 1.912 7.01 3.802a.26.26 0 0 0 .374.011 14.05 14.05 0 0 1 2.745-2.099.249.249 0 0 0 .065-.378c-2.35-2.672-5.77-3.82-9.341-4.665.029.207.044.418.044.633ZM10.72 12.83c-.392.11-.805.17-1.232.17-.894 0-1.727-.26-2.427-.71l-.976 11.162-.082 2.34a4 4 0 0 0 3.524 4.112l.181.022a4 4 0 0 0 3.937-1.973l2.196-3.806a.25.25 0 0 0-.275-.368l-1.774.43a.251.251 0 0 1-.076.008l-2.666-.174-1.73-.206a.25.25 0 0 1-.218-.285l1.617-10.723Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.102 13c-6.369 0-11.628 4.975-11.982 11.334l-.311 5.61A1 1 0 0 0 19.807 31h21.65a.5.5 0 0 0 .498-.541l-.59-7.084A1.5 1.5 0 0 0 39.87 22h-3.826a.05.05 0 0 1-.05-.043l-1.004-7.232A2 2 0 0 0 33.009 13h-1.907Zm.43 4.215a.48.48 0 0 0-.499-.453c-4.266.216-7.694 3.386-7.957 7.734l-.035.579a.5.5 0 0 0 .616.516l5.805-1.402c.371-.125.763-.19 1.158-.19h1.112a.25.25 0 0 0 .25-.266l-.45-6.518ZM17 37.5a4.5 4.5 0 0 1 4.5-4.5h16a4.5 4.5 0 1 1 0 9h-16a4.5 4.5 0 0 1-4.5-4.5Zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm4.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm7.5-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgMachinery);
export default ForwardRef;
