import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgWorldCare = (
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
        d="M23.992 26h.04c5.523 0 10-4.477 10-10s-4.477-10-10-10h-.08c-5.486.043-9.92 4.504-9.92 10s4.434 9.957 9.92 10h.04Zm7.978-9h-2c-.04.69-.124 1.359-.245 2h1.726c.255-.63.432-1.301.52-2Zm-1.693 4h-1.08c-.205.59-.445 1.143-.716 1.65A8.044 8.044 0 0 0 30.277 21Zm-2.592-2c.137-.627.234-1.297.281-2h-2.934v2h2.653Zm-2.653 2h2.023a8.53 8.53 0 0 1-.527 1.042c-.5.831-1.017 1.345-1.496 1.636V21Zm-2-2v-2h-2.998c.047.703.144 1.373.281 2h2.717Zm-2.087 2h2.087v2.716c-.496-.284-1.038-.805-1.56-1.674A8.53 8.53 0 0 1 20.945 21Zm-2.67-2c-.121-.641-.204-1.31-.245-2h-1.936c.087.699.264 1.37.52 2h1.66Zm-.488 2h1.016c.195.564.424 1.094.68 1.581A8.044 8.044 0 0 1 17.787 21Zm12.183-6a15.915 15.915 0 0 0-.245-2h1.726c.255.63.432 1.301.52 2h-2Zm.307-4h-1.08a11.495 11.495 0 0 0-.716-1.65A8.045 8.045 0 0 1 30.277 11Zm-5.245 0h2.023a8.528 8.528 0 0 0-.527-1.042c-.5-.832-1.017-1.345-1.496-1.636V11Zm2.653 2h-2.653v2h2.934a13.682 13.682 0 0 0-.281-2Zm-4.653-4.716V11h-2.087c.16-.377.338-.726.527-1.042.521-.869 1.064-1.39 1.56-1.674Zm0 4.716h-2.717a13.682 13.682 0 0 0-.281 2h2.998v-2Zm-3.55-3.581a11.549 11.549 0 0 0-.68 1.581h-1.015a8.045 8.045 0 0 1 1.696-1.581ZM18.276 13h-1.662a7.946 7.946 0 0 0-.52 2h1.937c.04-.69.124-1.359.245-2Z"
      />
      <path d="M10.109 32.621c.567.602 1.13 1.2 1.66 1.96V36h7.433v-1.419c-.133-1.104-.367-3.093-.388-3.646-.028-.778-1.072-2.196-1.072-2.196l-3.205-4.04s-.907-.958-1.426-2.02c-.52-1.063-1.624.274-1.77 1.23-.148.956.132 1.46.132 1.46l1.83 3.638s-2.122-2.907-2.781-4.075c-.334-.592-.427-1.846-.532-3.247-.101-1.365-.213-2.87-.568-4.04-.72-2.37-2.802-1.777-3.163-.717-.36 1.059-.279 8.058-.148 9.225.103.914.654 1.808 1.275 2.816.172.28.35.568.525.867.696 1.192 1.45 1.993 2.198 2.785ZM36.233 34.581c.53-.76 1.093-1.358 1.66-1.96.748-.792 1.502-1.593 2.199-2.785.174-.3.352-.587.524-.866.621-1.008 1.172-1.903 1.275-2.817.131-1.167.213-8.166-.148-9.225-.361-1.06-2.443-1.653-3.163.718-.354 1.17-.466 2.674-.568 4.039-.105 1.401-.198 2.655-.532 3.247-.659 1.169-2.782 4.075-2.782 4.075l1.831-3.638s.28-.504.133-1.46c-.147-.956-1.252-2.293-1.77-1.23-.52 1.062-1.427 2.02-1.427 2.02l-3.205 4.04s-1.044 1.418-1.072 2.196c-.02.553-.255 2.542-.388 3.646V36h7.433v-1.419ZM26 41a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1v2ZM22.002 41a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2Z" />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgWorldCare);
export default ForwardRef;
