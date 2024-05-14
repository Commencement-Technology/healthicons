import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgVentilator = (
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
      <g clipPath="url(#ventilator_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM5.918 6.044C6.275 6.015 6.636 6 7 6c7.18 0 13 5.82 13 13v1.302l.043.05c2.922 3.44 4.47 6.828 4.492 10.17.926.08 1.697.372 2.29.907.695.625 1.012 1.46 1.159 2.267.146.802.14 1.677.109 2.484-.012.3-.027.587-.041.863-.027.51-.052.986-.052 1.457 0 .393.133.583.317.717.237.171.66.314 1.31.343 1.293.058 3.043-.356 4.6-1.066.769-.35 1.455-.758 1.989-1.183.545-.434.868-.837 1.006-1.159.118-.274.101-.467-.026-.673-.165-.266-.586-.655-1.538-1.058-1.026-.434-1.785-1.02-2.314-1.745-.526-.722-.777-1.519-.89-2.302-.112-.772-.092-1.564-.053-2.292.011-.224.025-.438.038-.646.032-.503.061-.97.061-1.436H31v-2h-5a1 1 0 1 1 0-2h1V8.5C27 7.12 29.91 6 33.5 6S40 7.12 40 8.5V22h1a1 1 0 1 1 0 2h-5v2h-1.5c0 .534-.035 1.098-.069 1.624-.012.194-.024.384-.033.565-.038.704-.047 1.332.035 1.9.08.556.244 1.019.528 1.409.282.386.728.765 1.476 1.081 1.126.476 1.982 1.077 2.459 1.847.514.83.505 1.72.164 2.515-.32.746-.922 1.396-1.599 1.935-.688.548-1.523 1.036-2.404 1.438-1.745.795-3.816 1.32-5.519 1.244-.848-.037-1.715-.229-2.396-.723C26.41 40.304 26 39.497 26 38.5c0-.52.03-1.092.058-1.636.014-.263.027-.52.037-.763.03-.786.025-1.474-.079-2.047-.103-.568-.286-.92-.529-1.139-.196-.176-.525-.35-1.122-.4-.569 3.184-2.548 6.138-5.707 8.895l-.368.32-.48-.092.19-.982-.19.982-.005-.001-.014-.003-.05-.01a34.681 34.681 0 0 1-.849-.185 35.847 35.847 0 0 1-2.114-.555 20.689 20.689 0 0 1-2.458-.883c-.756-.337-1.532-.767-2.048-1.316a1.888 1.888 0 0 1-.075-.084L10 38.517V43a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.041a1 1 0 0 1 .918-.997ZM15.5 23a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM38 8.9V22h-9V8.9a3.47 3.47 0 0 1 .622-.301C30.516 8.255 31.886 8 33.5 8c1.614 0 2.984.255 3.878.599.295.113.495.22.622.301ZM18.956 23.97c.174-.424.347-.81.506-1.146 2.294 3.043 3.236 5.831 3.05 8.41-.2 2.797-1.742 5.568-4.8 8.341a33.787 33.787 0 0 1-2.364-.607 18.707 18.707 0 0 1-2.214-.793c-.606-.27-1.043-.532-1.3-.759.037-.08.108-.204.237-.377.375-.501.983-1.093 1.73-1.821l.225-.22c.813-.793 1.732-1.709 2.446-2.68.705-.959 1.309-2.101 1.309-3.348 0-1.666.567-3.515 1.175-5ZM30 18v-2h7v2h-7Zm0-5v2h7v-2h-7Zm0 8h7v-2h-7v2Z"
        />
      </g>
      <defs>
        <clipPath id="ventilator_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgVentilator);
export default ForwardRef;
