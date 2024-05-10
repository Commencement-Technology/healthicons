import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgNeurology = (
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
        d="M29.584 22.873c1.16 0 2.292-.315 3.25-.904.972.588 2.12.896 3.29.884l3.72-1.22c1.047-.779 1.767-1.858 2.037-3.058.27-1.2.076-2.446-.552-3.532-.627-1.085-1.65-1.944-2.895-2.431-.285-1.162-1.001-2.2-2.031-2.944l-3.63-1.145h-.41c-.807-1.062-2.019-1.82-3.406-2.129L21.174 6c-1.294.097-2.514.583-3.463 1.38a6.772 6.772 0 0 0-1.37-.147 6.25 6.25 0 0 0-3.144.845c-.935.549-1.675 1.33-2.128 2.25L8.11 12.216c-.736.899-1.132 1.987-1.13 3.103a4.33 4.33 0 0 0 .204 1.382c-.775.907-1.193 2.022-1.185 3.168-.002 1.329.561 2.607 1.574 3.573.081.951.45 1.864 1.066 2.64a5.733 5.733 0 0 0 2.428 1.762 8.473 8.473 0 0 1 2.777 2.492 7.484 7.484 0 0 1 1.31 3.329h7.636v-5.526a4.872 4.872 0 0 1 .877-2.776 5.655 5.655 0 0 1 2.373-1.94c.55-.188.684-.443.85-.756.11-.208.234-.442.503-.698.233.143.414.27.571.381.487.343.743.523 1.62.523Zm4.448-2.528a4.246 4.246 0 0 0 1.79.496l3.056-1.002c.558-.485.912-1.087 1.052-1.71a2.877 2.877 0 0 0-.332-2.09c-.385-.666-1.04-1.236-1.893-1.57l-.967-.379-.247-1.008c-.145-.59-.492-1.162-1.032-1.62l-2.994-.945h-1.093l-.6-.79c-.476-.625-1.21-1.119-2.1-1.35l-7.462-.378a4.085 4.085 0 0 0-2.213.908l-.748.627-.954-.203a4.771 4.771 0 0 0-.957-.103c-.77.002-1.51.206-2.129.569s-1.076.862-1.347 1.41l-.247.5-3.125 1.996c-.342.5-.51 1.057-.509 1.607v.035c-.004.249.033.499.11.744l.338 1.06-.723.846c-.478.558-.71 1.212-.706 1.855v.016c0 .75.315 1.513.954 2.123l.548.523.064.753c.047.545.26 1.088.64 1.568.384.483.926.885 1.585 1.14l.135.053.126.071c.147.083.29.169.432.258l-.006.004c2.719 1.659 3.872 4.073 4.264 5.307h.612v-7.293l-2.203-1.959-1.496 1.496a1 1 0 0 1-1.414-1.414l1.792-1.792-.538-2.957-2.436-1.218a1 1 0 1 1 .895-1.789l2.377 1.188 2.911-1.852-.905-2.415a1 1 0 0 1 1.872-.702l.973 2.595h1.077l.514-1.029-.815-1.902a1 1 0 1 1 1.838-.788l.702 1.638 2.788.507.011-.01L27.1 10.53a1 1 0 0 1 1.25 1.562l-1.205.963 1.335 1.717.513-1.025a1 1 0 0 1 .895-.553h2.162a1 1 0 1 1 0 2h-1.544l-.269.536 1.67.371c.08.018.157.045.23.082l1.441.72a1 1 0 1 1-.894 1.79l-1.332-.666-3.123-.694a1 1 0 0 1-.572-.363l-2.289-2.942-2.773-.504c-.04.033-.083.063-.13.09l-.587 1.177v.565h1.162a1 1 0 0 1 .447.106l2.883 1.441a1 1 0 1 1-.894 1.79l-2.672-1.337h-.926v1.523a1 1 0 0 1-2 0V15.554h-1.232l-3.151 2.005.539 2.963 2.985 2.654a1 1 0 0 1 .336.748v7.742h1.438V28.1c0-2.702 1.509-4.36 2.333-5.145.66-.628 1.65-1.157 2.063-1.344.082-.183.361-.66.824-1.097l1.125-1.067c1.238.708 2.199 1.418 2.199 1.418s1.281-.07 1.863-.304c.466-.188 1.278-.709 1.625-.946l1.208.73Z"
      />
      <path d="M15 38h8v-2h-8v2ZM23 42h-8v-2h8v2Z" />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgNeurology);
export default ForwardRef;
