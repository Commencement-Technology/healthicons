import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSti = (
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
        d="M28.5 8.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM30 19a1 1 0 0 0-1 1v5a1 1 0 0 0 1.005 1h.016c1.448 0 2.428-.479 3.044-1.106.626-.639.943-1.5.935-2.384a3.46 3.46 0 0 0-.981-2.401c-.627-.635-1.603-1.109-3-1.109H30Zm1.637 4.493a1.526 1.526 0 0 1-.637.372v-2.716c.291.104.477.245.595.365.25.253.401.617.405 1.015.004.396-.137.734-.363.964Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31 30v-.048c1.967-.194 3.665-.977 4.92-2.258 1.431-1.458 2.097-3.37 2.08-5.223a7.46 7.46 0 0 0-2.135-5.172C34.416 15.83 32.382 15 30.018 15H16.6a3 3 0 0 0-2.662 1.616l-2.6 5a3 3 0 0 0 .788 3.727L17 29.242V41a3 3 0 0 0 5.988.272l.66-7.272h.703l.661 7.272A3 3 0 0 0 31 41V30ZM15.713 17.539A1 1 0 0 1 16.6 17h13.419c1.88 0 3.385.652 4.423 1.704A5.46 5.46 0 0 1 36 22.49c.013 1.369-.48 2.756-1.507 3.804C33.455 27.352 31.937 28 30.02 28h-.016A1 1 0 0 0 29 29v12a1 1 0 0 1-1.996.09l-.744-8.18a.997.997 0 0 0-.182-.491 4 4 0 1 0-4.382-6.689 3.277 3.277 0 0 0-.054-.106c-.499-.923-1.484-1.692-2.572-2.446L19 23.13V20a1 1 0 0 0-1-1h-.186a1 1 0 0 0-.887.539l-1.282 2.464a1 1 0 0 0 .263 1.243l1.221.977-.02.03.821.569c1.125.78 1.711 1.307 1.953 1.753.1.187.13.342.115.508-.017.182-.095.443-.32.814a.547.547 0 0 1-.148.177c-.007.005-.01.007-.031.008-.08.004-.279-.035-.641-.245-.345-.2-.714-.482-1.12-.8l-.11-.086c-.352-.275-.746-.585-1.108-.805l-.79-.482-2.355-1.883a1 1 0 0 1-.262-1.242l2.6-5ZM19.59 30.08c-.203.01-.4-.01-.59-.049V41a1 1 0 0 0 1.996.09l.744-8.18a.996.996 0 0 1 .182-.491 4.007 4.007 0 0 1-1.8-2.432 2.073 2.073 0 0 1-.532.093ZM24 31a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgSti);
export default ForwardRef;
