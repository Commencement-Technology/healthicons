import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMalariaPvMicroscope = (
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
        d="M24 42c9.941 0 18-8.059 18-18S33.941 6 24 6 6 14.059 6 24s8.059 18 18 18Zm0 2c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20ZM12.442 20.729c1.03-.205 2.382-.811 3.727-1.85 1.344-1.04 2.271-2.194 2.73-3.14.309-.637.324-.97.312-1.1-.123-.044-.45-.114-1.144.024-1.03.205-2.382.811-3.726 1.85-1.345 1.04-2.272 2.194-2.73 3.14-.31.637-.324.97-.313 1.1.124.045.45.114 1.144-.024Zm-2.75 1.265c1.18 1.527 4.628.84 7.7-1.533 3.071-2.374 4.605-5.536 3.425-7.063-1.18-1.527-4.628-.84-7.7 1.533-3.07 2.374-4.604 5.536-3.424 7.063Zm20.661 7.254c1.437.867 2.476 1.894 3.03 2.768.362.567.421.887.428 1.02-.121.057-.432.152-1.102.097-1.032-.084-2.424-.525-3.86-1.393-1.437-.867-2.476-1.894-3.032-2.768-.36-.567-.42-.887-.427-1.02.122-.057.432-.152 1.102-.097 1.032.084 2.425.525 3.861 1.393Zm1.034-1.713c3.287 1.985 5.151 4.918 4.165 6.552-.987 1.634-4.451 1.35-7.738-.635-3.286-1.984-5.15-4.917-4.164-6.551.986-1.634 4.45-1.35 7.737.634Zm.199-6.955c.025-1.051-.271-2.503-.992-4.044-.72-1.54-1.645-2.698-2.468-3.353-.556-.441-.878-.528-1.008-.546-.07.111-.21.414-.227 1.124-.025 1.051.271 2.503.992 4.043.72 1.54 1.645 2.699 2.468 3.353.556.442.878.529 1.008.546.07-.11.21-.414.227-1.123Zm.632 2.96c1.75-.817 1.833-4.333.188-7.851-1.646-3.519-4.398-5.707-6.148-4.89-1.749.819-1.832 4.334-.187 7.853 1.646 3.518 4.398 5.707 6.147 4.889Zm-13.437 7.977c.783 1.558 1.13 3.041 1.135 4.125.004.784-.152 1.099-.22 1.202-.124-.006-.47-.07-1.098-.54-.866-.65-1.85-1.813-2.633-3.372-.784-1.559-1.13-3.041-1.135-4.125-.004-.784.152-1.1.22-1.202.124.006.47.07 1.098.54.866.65 1.85 1.813 2.633 3.372Zm1.787-.899c1.784 3.55 1.8 7.146.035 8.033-1.764.887-4.64-1.272-6.425-4.82-1.784-3.55-1.8-7.146-.036-8.033 1.765-.887 4.642 1.271 6.426 4.82Zm-6.069-11.67a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm.18-1.2a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm1.36.609a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm15.29 14.207a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-1.455-1.907a.453.453 0 1 1-.906 0 .453.453 0 0 1 .906 0Zm-.49-11.8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm2.011 1.027a.7.7 0 1 1-1.4 0 .7.7 0 0 1 1.4 0Zm-13.61 14.592a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm.463-2.921a.453.453 0 1 1-.906 0 .453.453 0 0 1 .906 0Zm.747 4.408a.7.7 0 1 0 0-1.4.7.7 0 0 0 0 1.4Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgMalariaPvMicroscope);
export default ForwardRef;
