import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMaleAndFemale = (
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
        d="M14.5 13a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm5.148 7c.05.352.094.729.132 1.122C20 23.367 20 25.8 20 26.5a1.5 1.5 0 1 0 3 0v-.007c0-.707 0-3.264-.234-5.662-.115-1.19-.296-2.43-.597-3.406-.147-.479-.355-1.002-.67-1.436-.317-.434-.91-.989-1.81-.989H9.31c-.901 0-1.494.555-1.81.99-.316.433-.524.956-.67 1.435-.301.976-.482 2.217-.598 3.406C6 23.229 6 25.786 6 26.493v.007a1.5 1.5 0 0 0 3 0c0-.7 0-3.133.22-5.378.037-.393.081-.77.131-1.122H10v20.5a1.5 1.5 0 0 0 2.995.12l.85-10.62h1.31l.85 10.62A1.5 1.5 0 0 0 19 40.5V20h.648ZM37 9.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm.867 5.546a1.5 1.5 0 0 0-.367-.045h-8.002c-.123 0-.245.016-.364.046-1.114.28-1.863.959-2.333 1.885-.413.812-.614 1.82-.78 2.823l-1 6a1.5 1.5 0 1 0 2.959.493l1-6c.092-.557.178-.982.265-1.31L29.5 22c0 1.87-1.694 10.408-2.293 13.37a.989.989 0 0 0 .823 1.177c4.122.614 6.818.595 10.939-.004a.99.99 0 0 0 .829-1.173C39.203 32.36 37.5 23.606 37.5 22l.255-3.062c.087.328.173.752.265 1.31l1 6a1.5 1.5 0 0 0 2.96-.494l-1-6c-.167-1.002-.368-2.011-.78-2.822-.472-.927-1.22-1.605-2.334-1.886Zm-7.86 26.078-.376-3.013c1.06.13 2.067.215 3.059.253l-.72 2.879a1 1 0 0 1-1.962-.119Zm5.023.118-.714-2.857c.997-.012 1.998-.07 3.04-.174l-.364 2.913a1 1 0 0 1-1.962.118Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgMaleAndFemale);
export default ForwardRef;
