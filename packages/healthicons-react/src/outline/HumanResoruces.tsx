import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgHumanResoruces = (
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
        d="M39 8H9a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1ZM9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Z"
      />
      <path d="M19 20a3 3 0 1 1-6 0 3 3 0 1 1 6 0Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.256 27.24c-.21.211-.256.369-.256.487V31h-2v-3.273c0-.788.37-1.425.837-1.896.459-.461 1.05-.807 1.637-1.064C13.642 24.257 15.028 24 16 24c.971 0 2.358.257 3.526.767.587.257 1.178.603 1.637 1.064.468.471.837 1.108.837 1.896V31h-2v-3.273c0-.118-.047-.276-.256-.486-.218-.22-.564-.442-1.019-.641-.914-.4-2.028-.6-2.725-.6-.697 0-1.81.2-2.725.6-.455.198-.8.42-1.019.64ZM28.256 27.24c-.21.211-.256.369-.256.487V31h-2v-3.273c0-.788.37-1.425.837-1.896.459-.461 1.05-.807 1.637-1.064C29.642 24.257 31.029 24 32 24c.971 0 2.358.257 3.526.767.587.257 1.178.603 1.637 1.064.468.471.837 1.108.837 1.896V31h-2v-3.273c0-.118-.047-.276-.256-.486-.218-.22-.564-.442-1.019-.641-.914-.4-2.028-.6-2.725-.6-.697 0-1.81.2-2.725.6-.455.198-.8.42-1.019.64Z"
      />
      <path d="M35 20a3 3 0 1 1-6 0 3 3 0 1 1 6 0ZM27 18a3 3 0 1 1-6 0 3 3 0 1 1 6 0Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.697 24.995c-.283.028-.38.092-.451.171l-1.492-1.332c.525-.588 1.18-.774 1.748-.83.344-.033.77-.021 1.12-.012.142.004.272.008.378.008.106 0 .236-.004.379-.008.349-.01.775-.02 1.118.013.57.055 1.224.241 1.749.829l-1.492 1.332c-.07-.079-.168-.143-.451-.17a4.776 4.776 0 0 0-.554-.012l-.202.005c-.17.005-.363.011-.547.011-.184 0-.377-.006-.547-.01l-.202-.006a4.776 4.776 0 0 0-.554.011Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgHumanResoruces);
export default ForwardRef;
