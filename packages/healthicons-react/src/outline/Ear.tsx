import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgEar = (
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
        d="M24 7c-6.543 0-11.846 4.925-11.846 11H10c0-7.18 6.268-13 14-13s14 5.82 14 13c0 4.501-2.465 8.467-6.204 10.8-2.552 1.59-4.565 3.707-4.565 6.111V35c0 4.418-3.858 8-8.616 8C13.857 43 10 39.418 10 35v-2h2.154v2c0 3.314 2.893 6 6.461 6 3.569 0 6.462-2.686 6.462-6v-.089c0-3.457 2.83-6.096 5.518-7.772 3.17-1.976 5.25-5.332 5.25-9.139 0-6.075-5.303-11-11.845-11Zm-4.911 10.02C19.472 15.315 21.052 14 23 14c2.244 0 4 1.745 4 3.82h2c0-3.248-2.721-5.82-6-5.82s-6 2.572-6 5.82c0 1.64.639 2.951 2.019 3.709.749.411 1.25.76 1.556 1.041.075.069.131.127.173.175-.184.087-.485.186-.936.273l.376 1.964c.672-.128 1.296-.32 1.769-.623.494-.317.966-.865.902-1.65-.055-.666-.49-1.206-.932-1.612-.472-.434-1.129-.873-1.946-1.322a1.72 1.72 0 0 1-.742-.744c.693.046 1.547.152 2.388.383.943.258 1.797.652 2.403 1.223.569.535.96 1.26.97 2.327-.13 1.361-.452 2.24-.82 2.81-.364.562-.801.87-1.255 1.049-.472.186-.993.243-1.517.243-.26 0-.51-.014-.75-.03l-.092-.005a9.81 9.81 0 0 0-.602-.028c-.95 0-1.43.736-1.653 1.168-.154.299-.305.707-.436 1.058-.055.148-.106.286-.152.401-.19.475-.374.82-.595 1.049-.185.19-.415.321-.817.321-.531 0-.807-.12-.947-.216a.741.741 0 0 1-.282-.376 1.727 1.727 0 0 1-.068-.733v-.003.003l-.001.003v.002s0 .002-.985-.178l-.983-.179v.002l-.001.002-.001.005-.002.014a1.98 1.98 0 0 0-.021.16c-.01.097-.02.23-.02.386 0 .308.036.745.204 1.202.17.468.483.967 1.03 1.341.545.373 1.24.565 2.077.565.968 0 1.708-.368 2.252-.928.506-.521.807-1.174 1.017-1.7.096-.239.17-.439.233-.613.1-.27.176-.477.277-.674.015-.03.03-.056.042-.077l.3.018.098.007c.249.015.55.033.878.033.65 0 1.451-.068 2.25-.382.815-.32 1.595-.887 2.201-1.824.596-.922.99-2.153 1.137-3.762.003-.03.004-.06.004-.09 0-1.658-.634-2.918-1.598-3.827-.935-.881-2.136-1.393-3.247-1.697-1.12-.306-2.225-.422-3.038-.463l-.028-.002Zm1.103 11.9-.009.01a.045.045 0 0 1 .01-.01Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgEar);
export default ForwardRef;
