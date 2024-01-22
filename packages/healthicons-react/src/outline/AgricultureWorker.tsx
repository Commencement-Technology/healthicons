import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgAgricultureWorker = (
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
        d="M31.414 12.714 30 8c0-1.105-2.988-2-6-2s-6 .895-6 2l-1.414 4.714C13.21 13.436 11 14.639 11 16c0 2.21 5.82 4 13 4s13-1.79 13-4c0-1.361-2.21-2.564-5.586-3.286Zm-3.282-3.98a4.267 4.267 0 0 0-.616-.245C26.623 8.202 25.335 8 24 8s-2.623.202-3.516.49c-.282.09-.483.176-.616.244l-.731 2.437a36.3 36.3 0 0 0 9.726 0l-.73-2.437Zm1.312 4.374a31.73 31.73 0 0 1-1.015.135 38.3 38.3 0 0 1-8.858 0c-.401-.047-.743-.094-1.015-.135l-.395 1.314-1.157.248c-1.584.338-2.756.764-3.48 1.18a4.306 4.306 0 0 0-.24.15c.42.283 1.113.61 2.112.917C17.51 17.567 20.552 18 24 18c3.448 0 6.49-.433 8.604-1.083.999-.307 1.692-.634 2.112-.918a4.306 4.306 0 0 0-.24-.148c-.724-.417-1.896-.843-3.48-1.181l-1.157-.248-.395-1.314Zm5.619 3.185-.007-.011.007.011Zm-.003-.579a.066.066 0 0 1 .011-.016s-.002.006-.01.016Zm-22.131-.016s.005.005.01.016c-.008-.01-.01-.016-.01-.016Zm.008.595.007-.011-.002.004a.033.033 0 0 0-.005.007Zm6.742-7.445a.08.08 0 0 0-.012.01l.016-.014-.004.004Zm8.638-.004.017.014c-.001 0-.007-.004-.017-.014Z"
        fill="#000"
      />
      <path
        d="M16.002 19.154a8 8 0 0 0 15.997 0 26.66 26.66 0 0 1-2.024.4 6 6 0 0 1-11.95 0 26.657 26.657 0 0 1-2.023-.4Z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.83 42c.11-.313.17-.65.17-1v-1h20v-3H30.35a17.747 17.747 0 0 1-1.578.447A20.996 20.996 0 0 1 24 38c-1.938 0-3.594-.276-4.771-.553A17.747 17.747 0 0 1 17.65 37h-2.333a6.03 6.03 0 0 0 1.88-2H18v-5.586A47.23 47.23 0 0 1 24 29c6.008 0 18 1.583 18 7v6H13.83Zm25.005-7.777C39.752 34.908 40 35.494 40 36v4h-4v-4a1 1 0 0 0-1-1v-2.521c1.632.49 2.949 1.082 3.835 1.744ZM30 31.433c1.003.138 2.017.314 3 .53V35h-3v-3.568ZM24 31a43.5 43.5 0 0 1 4 .2v4.37a19.02 19.02 0 0 1-4 .43 19.02 19.02 0 0 1-4-.43V31.2c1.467-.138 2.848-.2 4-.2Z"
        fill="#000"
      />
      <path
        d="M8 25a1 1 0 1 0-2 0v7a4 4 0 0 0 4 4v5a1 1 0 1 0 2 0v-5a4 4 0 0 0 4-4v-7a1 1 0 1 0-2 0v7a2 2 0 0 1-2 2v-9a1 1 0 1 0-2 0v9a2 2 0 0 1-2-2v-7Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgAgricultureWorker);
export default ForwardRef;
