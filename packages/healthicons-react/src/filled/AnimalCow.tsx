import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgAnimalCow = (
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
        d="M22 29h5c0 .393.055.776.158 1.143a.898.898 0 0 0-.492 1.172l.039.094a1 1 0 0 0 1.304.547l.112-.046c.346.402.761.76 1.232 1.06-.261.487-.082 1.1.404 1.362a1 1 0 0 0 1.354-.408l.084-.154a7.11 7.11 0 0 0 2.023.227l.026.135a1 1 0 0 0 1.964-.38l-.019-.095a6.128 6.128 0 0 0 2.335-1.372l.31 3.729A1 1 0 0 0 38 38h3V20a6.12 6.12 0 0 0-1.27-3.754c.625.168 1.062.413 1.37.71.557.535.9 1.436.9 3.044l.387 5.42c-.235.365-.387.937-.387 1.58 0 1.105.448 2 1 2s1-.895 1-2c0-.643-.152-1.215-.387-1.58L44 20c0-1.834-.383-3.4-1.514-4.487-1.117-1.073-2.756-1.477-4.773-1.511C37.637 14 35.556 14 35.5 14v.007a5.685 5.685 0 0 0-.278-.007H20.5c-1.934 0-3.395-.288-4.62-.668l-.153-.206c.67-.17 1.345-.442 1.83-.8 1.27-.934 2.007-2.813.382-2.607-.473.06-.814.072-1.093.082-.678.023-.98.034-1.88.697a6.6 6.6 0 0 0-.951.847C12.616 10.305 10.754 9.84 7.5 10a.5.5 0 0 0 0 1h1.737c.286.184.53.356.747.52L6.4 16h-.212a2 2 0 0 0-1.916 2.575l.3 1A2 2 0 0 0 6.488 21H9.85a2 2 0 0 1 1.176.383l2.19 1.592c.066.048.134.092.203.13 1.567 4.04 3.22 7.186 5.07 8.769l.345 4.14A1 1 0 0 0 19 38h3v-9Zm9.81 0H29c0 1.33 1.434 3 4 3 .951 0 1.747-.23 2.372-.586-1.43-.57-2.538-1.418-3.561-2.414Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgAnimalCow);
export default ForwardRef;
