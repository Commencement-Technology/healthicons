import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgVirusLabResearchSyringe = (
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
        d="M6.818 14.5a1.157 1.157 0 0 1 0-1.636l6.546-6.546A1.157 1.157 0 1 1 15 7.955l-.818.817 4.09 4.09 3.273-3.272a1.157 1.157 0 1 1 1.637 1.636l-1.637 1.637 13.91 13.91a5.787 5.787 0 0 1 1.295 6.205l1.159 1.159c.605.605.805 1.463.6 2.235l2.673 2.673a1.157 1.157 0 1 1-1.637 1.637l-2.673-2.673a2.313 2.313 0 0 1-2.236-.6l-1.158-1.158a5.787 5.787 0 0 1-6.205-1.296l-.394-.394a10.069 10.069 0 0 0-.055-3.438l5.076-5.076-11.77-11.77-5.353 5.354 3.443 3.443a10.109 10.109 0 0 0-2.781.047l-2.076-2.076-1.636 1.636a1.157 1.157 0 1 1-1.636-1.636l3.273-3.273-4.09-4.09-.82.818a1.157 1.157 0 0 1-1.636 0Zm28.637 20.455c-.075.075-.151.147-.229.216l.824.824a.314.314 0 0 0 .445-.444l-.824-.824c-.07.078-.142.154-.216.228Zm-1.415-6.768a3.787 3.787 0 0 1 .848 4.062l-2.14 2.14a3.786 3.786 0 0 1-4.061-.848l-.504-.504 5.353-5.354.504.504ZM16.86 14.277l-2.081 2.08-4.09-4.09 2.08-2.08 4.09 4.09Zm2.898 22.895A4.97 4.97 0 0 1 18 37.9V39a1 1 0 1 1 0 2h-2a1 1 0 0 1 0-2v-1.1a4.97 4.97 0 0 1-1.757-.728l-.829.828A1 1 0 0 1 12 39.414L10.586 38A1 1 0 0 1 12 36.586l.828-.828A4.973 4.973 0 0 1 12.1 34H11a1 1 0 0 1-2 0v-2a1 1 0 1 1 2 0h1.1c.13-.638.38-1.233.728-1.757L12 29.414A1 1 0 0 1 10.586 28l.697-.698.01-.009.01-.01.697-.697A1 1 0 0 1 13.414 28l.829.828A4.972 4.972 0 0 1 16 28.1V27a1 1 0 0 1 0-2h2a1 1 0 1 1 0 2v1.1c.638.13 1.233.38 1.757.728l.829-.828A1 1 0 0 1 22 26.586L23.414 28A1 1 0 0 1 22 29.414l-.828.829c.347.524.598 1.119.728 1.757H23a1 1 0 1 1 2 0v2a1 1 0 0 1-2 0h-1.1a4.973 4.973 0 0 1-.728 1.758l.828.828A1 1 0 0 1 23.414 38L22 39.414A1 1 0 1 1 20.586 38l-.829-.828Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgVirusLabResearchSyringe);
export default ForwardRef;
