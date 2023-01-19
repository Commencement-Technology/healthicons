import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlinePalmBranchesRoof = (
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
        d="M11 27h2v12.257c.113.05.28.11.51.172.664.179 1.594.307 2.58.396a46.577 46.577 0 0 0 2.91.16V36c0-2.4 2.078-5 5-5s5 2.6 5 5v3.984l.22-.006a46.572 46.572 0 0 0 2.69-.153c.986-.089 1.916-.217 2.58-.396.23-.062.397-.122.51-.172V27h2v12.566c0 .702-.496 1.122-.812 1.32-.344.216-.768.364-1.178.475-.836.224-1.906.365-2.92.456a54.039 54.039 0 0 1-3.994.183H28v-1h-1v-5c0-1.424-1.307-3-3-3s-3 1.576-3 3v5h-1v1h-.096l-.26-.003a54.039 54.039 0 0 1-3.733-.18c-1.015-.091-2.085-.232-2.92-.456-.411-.11-.835-.26-1.179-.475-.316-.198-.812-.618-.812-1.32V27Zm9 14v1h1v-1h-1Zm8 0h-1v1h1v-1Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M24 11.02 10.072 25.018C12.282 25.493 16.43 26 24 26c7.57 0 11.718-.507 13.928-.983L24 11.02ZM7.507 26.35c-.634-.257-.653-.935-.171-1.42L22.619 9.574a1.95 1.95 0 0 1 2.762 0l15.283 15.358c.482.484.463 1.162-.171 1.42C38.856 27.013 34.634 28 24 28c-10.634 0-14.856-.986-16.493-1.65Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        d="M23.003 6.83c-.048-.447.412-.83.997-.83s1.045.383.997.83l-.409 3.755c-.025.234-.28.415-.588.415-.307 0-.563-.18-.588-.415l-.409-3.755Z"
      />
      <path
        fill="#333"
        d="M26 7.187c.177-.39.706-.508 1.145-.255.44.254.602.77.352 1.12l-2.1 2.928c-.131.183-.41.222-.64.089-.23-.134-.337-.394-.244-.599L26 7.187Zm-3.833.004c-.178-.393-.708-.512-1.147-.259-.44.254-.6.772-.35 1.123L22.78 11c.131.184.41.224.64.09.231-.133.337-.394.243-.6l-1.496-3.299Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutlinePalmBranchesRoof);
export default ForwardRef;
