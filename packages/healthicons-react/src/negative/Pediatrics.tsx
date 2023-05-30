import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPediatrics = (
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
      <g clipPath="url(#pediatrics_svg__a)" fill="#333">
        <path d="M23.778 18.555a4.278 4.278 0 1 0 0-8.555 4.278 4.278 0 0 0 0 8.555Z" />
        <path d="M32.036 22.431c-1.579.391-3.008.685-4.37.879v1.468H19.89V23.29c-1.357-.196-2.78-.484-4.348-.853a2 2 0 1 1 .918-3.894c2.968.7 5.172 1.039 7.326 1.047 2.15.008 4.346-.313 7.29-1.041a2 2 0 1 1 .96 3.883ZM19.889 27.842v-1.509h7.778v1.51c0 .492-.444 1.757-1.805 2.363-.156.07-.331.156-.488.235l-.093.045c-.194.096-.38.186-.57.267-.395.167-.702.247-.933.247-.231 0-.539-.08-.933-.247-.19-.08-.377-.171-.57-.267l-.093-.046c-.157-.078-.332-.165-.488-.234-1.361-.606-1.805-1.871-1.805-2.364ZM19.096 29.988c-1.207 1.05-1.871 2.372-1.871 4.115 0 .695.148 1.738.535 2.584.396.865.927 1.313 1.599 1.313.72 0 1.33-.552 1.33-1.262 0-.315-.133-.614-.345-1.058l-.014-.03c-.191-.4-.444-.931-.444-1.547 0-.675.334-1.39.724-1.97.124-.185.256-.337.395-.467-.92-.418-1.537-1.05-1.909-1.678ZM28.46 29.988c-.372.628-.99 1.26-1.909 1.678.138.13.27.281.395.467.389.58.723 1.295.723 1.97 0 .615-.253 1.146-.444 1.547l-.014.03c-.211.444-.345.742-.345 1.058 0 .71.61 1.261 1.33 1.261.672 0 1.204-.447 1.6-1.313.386-.845.535-1.889.535-2.584 0-1.743-.665-3.064-1.872-4.114Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9Z"
        />
      </g>
      <defs>
        <clipPath id="pediatrics_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPediatrics);
export default ForwardRef;
