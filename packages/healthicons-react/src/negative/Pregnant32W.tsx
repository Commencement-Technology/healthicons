import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPregnant32W = (
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
      <g clipPath="url(#pregnant_32w_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM25.2 37.25c0-.065-.03-.163-.154-.264a.92.92 0 0 0-.579-.186h-1.021c-.416 0-.653.215-.712.352a.8.8 0 1 1-1.468-.637c.362-.834 1.26-1.315 2.18-1.315h1.021c1.128 0 2.333.773 2.333 2.05 0 .499-.184.921-.475 1.25.291.329.475.751.475 1.25 0 1.277-1.205 2.05-2.333 2.05h-1.021c-.92 0-1.818-.48-2.18-1.315a.8.8 0 1 1 1.468-.636c.06.136.296.351.711.351h1.022a.92.92 0 0 0 .579-.186c.124-.102.154-.2.154-.264 0-.065-.03-.163-.154-.264a.92.92 0 0 0-.579-.186h-1.021a.8.8 0 0 1 0-1.6h1.021a.92.92 0 0 0 .579-.186c.124-.102.154-.2.154-.264Zm6.848-.27c.12.1.152.198.152.27 0 .076-.038.186-.178.29a1.044 1.044 0 0 0-.024.019l-3.5 2.818A.8.8 0 0 0 29 41.8h4a.8.8 0 0 0 0-1.6h-1.73l1.722-1.387c.466-.353.808-.905.808-1.563 0-1.263-1.172-2.05-2.3-2.05h-1c-.915 0-1.798.489-2.151 1.321a.8.8 0 1 0 1.473.625c.059-.14.287-.346.678-.346h1a.86.86 0 0 1 .548.18Zm3.163-.848a.8.8 0 1 1 1.578-.264l.464 2.785.552-.967a.8.8 0 0 1 1.39 0l.552.967.464-2.785a.8.8 0 0 1 1.578.264l-.833 5a.8.8 0 0 1-1.484.265l-.972-1.701-.972 1.7a.8.8 0 0 1-1.484-.264l-.833-5Zm-7.106-14.14a2 2 0 0 1 2.133 1.193c.423.991.344 2.066.076 2.956-.277.92-.806 1.826-1.541 2.61-1.5 1.598-3.878 2.726-6.955 2.572a2 2 0 0 1-1.733-1.198l-1.502-3.443-1.732.567a2 2 0 0 1-1.244-3.802l3.244-1.061-.574-1.272a9.362 9.362 0 0 0-.163-.28c-.069.012-.166.033-.298.068-1.494.398-2.893-.132-3.607-1.18a2.568 2.568 0 0 1-.432-1.837c.102-.675.473-1.29 1.063-1.775l.747-.614c.362-.299.435-.523.45-.68.019-.197-.04-.487-.268-.922-.227-.43-.566-.903-.985-1.448l-.335-.432c-.135-.173-.274-.351-.413-.533A15.996 15.996 0 0 0 8.015 23.31a16 16 0 0 0 9.23 15.195 1 1 0 1 1-.845 1.813A18 18 0 1 1 40.317 31.6a1 1 0 1 1-1.813-.844 16 16 0 0 0-22.827-20.421l.322.414c.122.157.246.316.37.478.424.55.857 1.14 1.17 1.736.311.592.56 1.291.49 2.041-.076.792-.488 1.474-1.171 2.036l-.748.615c-.262.215-.337.407-.355.53a.57.57 0 0 0 .106.41c.19.28.684.576 1.44.375.5-.134 1.163-.281 1.765.045.298.162.493.391.627.58.118.167.23.366.328.54l.02.035.022.039.018.041 1.332 2.952c.04.068.076.14.109.214l1.687 3.867c.944-.126 1.66-.46 2.179-.85a2 2 0 0 1-2.042-1.375l-1.25-3.831a2 2 0 0 1 3.803-1.24l.726 2.224 1.48-.219Zm1.682-.575a3.819 3.819 0 1 0 3.547-6.763 3.819 3.819 0 0 0-3.547 6.764Z"
        />
      </g>
      <defs>
        <clipPath id="pregnant_32w_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPregnant32W);
export default ForwardRef;
