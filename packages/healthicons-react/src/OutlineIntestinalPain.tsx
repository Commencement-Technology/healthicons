import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineIntestinalPain = (
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
      <path fill="#fff" d="M0 0h48v48H0z" />
      <path
        fill="#333"
        d="M17 6a1 1 0 0 1 1 1v3.09c0 .331-.063.659-.186.965a2.548 2.548 0 0 1-.536.825 2.463 2.463 0 0 1-1.778.756h-1.259a5.062 5.062 0 0 0-3.468 1.302 5.417 5.417 0 0 0-1.75 3.38 5.36 5.36 0 0 0 .232 2.133 5.23 5.23 0 0 0 1.05 1.858 5.01 5.01 0 0 0 1.68 1.25c.635.291 1.322.44 2.015.441h5a1 1 0 1 1 0 2h-6c-.693 0-1.38.15-2.016.44a5.01 5.01 0 0 0-1.679 1.251 5.23 5.23 0 0 0-1.05 1.858 5.36 5.36 0 0 0-.232 2.133 5.417 5.417 0 0 0 1.75 3.38c.407.364 1.14.708 2.036.956.877.242 1.781.357 2.432.346H15.5a2.463 2.463 0 0 1 1.778.756A2.558 2.558 0 0 1 18 37.909V41a1 1 0 1 1-2 0v-3.09a.586.586 0 0 0-.157-.397.498.498 0 0 0-.161-.112.463.463 0 0 0-.182-.037h-1.233c-.87.014-1.963-.134-2.99-.419-1.013-.28-2.094-.727-2.837-1.393a7.417 7.417 0 0 1-2.404-4.644l-.003-.024a7.36 7.36 0 0 1 .318-2.946 7.229 7.229 0 0 1 1.453-2.568 7.017 7.017 0 0 1 2.18-1.67 7.062 7.062 0 0 1-1.18-1.07 7.229 7.229 0 0 1-1.453-2.568 7.36 7.36 0 0 1-.318-2.946l.003-.024a7.417 7.417 0 0 1 2.404-4.644 7.062 7.062 0 0 1 4.827-1.812H15.5a.463.463 0 0 0 .182-.037.498.498 0 0 0 .161-.112.586.586 0 0 0 .157-.396V7a1 1 0 0 1 1-1Zm24.878 1.521a1 1 0 0 1-.4 1.357l-5.5 3A1 1 0 0 1 34.5 11V9.685l-4.021 2.193a1 1 0 0 1-.958-1.756l5.5-3A1 1 0 0 1 36.5 8v1.315l4.021-2.193a1 1 0 0 1 1.357.4ZM30.096 33.573a1 1 0 0 1 1.331-.477l5.347 2.526a1 1 0 0 1 .159 1.715l-1.322.956 3.816 1.803a1 1 0 0 1-.854 1.808l-5.347-2.526a1 1 0 0 1-.159-1.715l1.322-.956-3.816-1.803a1 1 0 0 1-.477-1.331Zm7.782-11.378a1 1 0 0 0-1.398-1.104l-4.897 2.25a1 1 0 1 0 .834 1.817l3.118-1.432-.413 2.08a1 1 0 0 0 1.399 1.103l4.897-2.252a1 1 0 1 0-.836-1.817l-3.117 1.433.413-2.078Z"
      />
      <path
        fill="#333"
        d="M24.003 6a1 1 0 0 1 1 1v4.636c0 .94-.18 1.87-.529 2.74a7.195 7.195 0 0 1-1.99 2.781c1.264.245 2.521.793 3.475 1.775A7.276 7.276 0 0 1 28 24c0 1.895-.73 3.719-2.04 5.068-.978 1.006-2.187 1.563-3.451 1.797a7.275 7.275 0 0 1 2.49 5.499V41a1 1 0 1 1-2 0v-4.636a5.276 5.276 0 0 0-1.474-3.674C20.529 31.664 19.246 31 18 31h-4a1 1 0 1 1 0-2h6.997c1.4 0 2.639-.41 3.527-1.325A5.277 5.277 0 0 0 26 24a5.277 5.277 0 0 0-1.476-3.675C23.652 19.427 22.247 19 20.815 19H16a1 1 0 1 1 0-2h1.82c.653 0 1.3-.132 1.903-.39.576-.245 1.313-.792 1.805-1.299a5.196 5.196 0 0 0 1.09-1.682 5.34 5.34 0 0 0 .385-1.992V7a1 1 0 0 1 1-1Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineIntestinalPain);
export default ForwardRef;
