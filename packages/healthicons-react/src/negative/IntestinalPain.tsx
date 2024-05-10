import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgIntestinalPain = (
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
      <g clipPath="url(#intestinal-pain_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm42.357 8.399-6.378 3.479A1 1 0 0 1 34.5 11V9.685l-4.899 2.672-.958-1.756 6.378-3.479A1 1 0 0 1 36.5 8v1.315l4.899-2.672.958 1.756Zm-11.834 24.27-.854 1.808 4.72 2.23-1.322.956a1 1 0 0 0 .159 1.715l6.251 2.953.854-1.808-4.72-2.23 1.322-.956a1 1 0 0 0-.159-1.715l-6.251-2.953Zm6.994-11.454a1 1 0 0 1 .361.98l-.413 2.078 4.026-1.85.835 1.816-5.805 2.67a1 1 0 0 1-1.399-1.104l.413-2.079-4.026 1.85-.835-1.818 5.806-2.667a1 1 0 0 1 1.037.124ZM22.2 6h-6v3.598a29.8 29.8 0 0 0-1.606.22c-1.147.195-2.772.58-4.138 1.628C8.9 12.638 8 14.433 8 16.692c0 1.396.47 2.668 1.392 3.672.851.927 1.917 1.44 2.824 1.75 1.545.53 3.469.724 4.98.877l.492.05c1.844.193 3.103.384 3.905.74.256.115.358.202.386.23.006.021.014.06.018.12-.07.028-.164.06-.289.095-1.022.28-2.558.3-4.704.298h-.214c-1.829-.003-4.184-.007-6.09.52-1.042.289-2.248.808-3.204 1.83C6.473 27.968 6 29.357 6 30.846c0 1.262.269 2.462.88 3.525.615 1.067 1.473 1.822 2.382 2.341 1.702.972 3.715 1.19 5.184 1.265.74.038 1.472.043 2.093.047l.096.001.565.005V42h6v-6c0-.76-.228-1.531-.724-2.194a3.903 3.903 0 0 0-1.489-1.191c-.827-.386-1.727-.486-2.308-.53-.648-.05-1.369-.055-2.002-.06h-.055a42.274 42.274 0 0 1-1.868-.04c-1.331-.069-2.118-.256-2.516-.483a.679.679 0 0 1-.131-.092.124.124 0 0 1-.025-.03c-.003-.004-.071-.118-.08-.453.07-.029.167-.064.298-.1 1.02-.282 2.552-.306 4.696-.303h.235c1.823.004 4.166.008 6.06-.51 1.04-.285 2.247-.799 3.205-1.815C27.524 27.11 28 25.72 28 24.231c0-1.392-.381-2.687-1.19-3.78-.78-1.056-1.808-1.72-2.778-2.15-1.823-.812-4.064-1.054-5.72-1.227l-.324-.034c-1.756-.182-2.974-.309-3.829-.602a3.33 3.33 0 0 1-.136-.05c.016-.09.034-.13.037-.134l.005-.01a.27.27 0 0 1 .042-.037c.17-.131.596-.321 1.5-.476.42-.072.854-.123 1.344-.18l.065-.008c.437-.05.968-.112 1.45-.2.451-.085 1.217-.25 1.924-.674.865-.518 1.81-1.556 1.81-3.13V6Zm-.23 17.99c0-.001.004.003.007.015l-.007-.016Z"
        />
      </g>
      <defs>
        <clipPath id="intestinal-pain_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIntestinalPain);
export default ForwardRef;
