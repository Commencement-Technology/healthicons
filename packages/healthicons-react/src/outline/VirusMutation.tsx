import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgVirusMutation = (
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
        d="M28.896 15a5.17 5.17 0 0 0 .788 1.902l-.584.584a1 1 0 0 0-1.407 1.421l1.4 1.4a1 1 0 0 0 1.421-1.407l.584-.584c.565.38 1.21.653 1.902.788v.942A1 1 0 0 0 33.3 22h1.4a1 1 0 0 0 .3-1.954v-.942a5.18 5.18 0 0 0 2.303-1.087l.883.883a1 1 0 0 0 1.421 1.407l1.4-1.4a1 1 0 0 0-1.407-1.421l-1.02-1.02c.244-.453.423-.946.524-1.466h.942A1 1 0 0 0 42 14.7v-1.4a1 1 0 0 0-1.954-.3h-.942a5.17 5.17 0 0 0-.788-1.902l.584-.584a1 1 0 0 0 1.407-1.421l-1.4-1.4A1 1 0 0 0 37.486 9.1l-.584.584A5.17 5.17 0 0 0 35 8.896v-.942A1 1 0 0 0 34.7 6h-1.4a1 1 0 0 0-.3 1.954v.942a5.17 5.17 0 0 0-1.902.788l-.584-.584a1 1 0 0 0-1.421-1.407l-1.4 1.4a1 1 0 0 0 1.407 1.421l.584.584A5.17 5.17 0 0 0 28.896 13h-.942a1 1 0 0 0-1.954.3v1.4a1 1 0 0 0 1.954.3h.942Zm1.904-1a3.2 3.2 0 1 1 6.4 0 3.2 3.2 0 0 1-6.4 0ZM10.07 32a6.965 6.965 0 0 0 1.324 3.192L10 36.586l-.293-.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414-1.414L11.414 38l1.394-1.394A6.965 6.965 0 0 0 16 37.93V40a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2v-2.07a6.975 6.975 0 0 0 3.738-1.777L23.586 38l-.293.293a1 1 0 0 0 1.414 1.414l2-2a1 1 0 0 0-1.414-1.414l-.293.293-1.992-1.992c.467-.78.787-1.657.921-2.594H26a1 1 0 1 0 2 0v-2a1 1 0 1 0-2 0h-2.07a6.965 6.965 0 0 0-1.324-3.192L24 25.414l.293.293a1 1 0 0 0 1.414-1.414l-2-2a1 1 0 0 0-1.414 1.414l.293.293-1.394 1.394A6.965 6.965 0 0 0 18 24.07V22a1 1 0 1 0 0-2h-2a1 1 0 1 0 0 2v2.07a6.965 6.965 0 0 0-3.192 1.324L11.414 24l.293-.293a1 1 0 0 0-1.414-1.414l-2 2a1 1 0 1 0 1.414 1.414l.293-.293 1.394 1.394A6.965 6.965 0 0 0 10.07 30H8a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0h2.07ZM17 26a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z"
      />
      <path d="M29.5 40h5.643c.46 0 .923-.2 1.28-.593.36-.396.577-.952.577-1.549v-5.444l-1.293 1.293a1 1 0 0 1-1.414-1.414l2.998-2.998a.997.997 0 0 1 1.416-.002l3 3a1 1 0 0 1-1.414 1.414L39 32.414v5.444c0 1.07-.385 2.112-1.097 2.895C37.19 41.537 36.2 42 35.143 42H29.5a1 1 0 1 1 0-2ZM11.577 8.593c.357-.393.82-.593 1.28-.593H22.5a1 1 0 1 0 0-2h-9.643c-1.055 0-2.046.462-2.76 1.248A4.308 4.308 0 0 0 9 10.142v5.444l-1.293-1.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0-1.414-1.414L11 15.586v-5.444c0-.597.217-1.153.577-1.549Z" />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgVirusMutation);
export default ForwardRef;
