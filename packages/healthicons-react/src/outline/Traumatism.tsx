import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgTraumatism = (
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
        d="M21.57 13a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM11.808 16.945C13.083 15.206 15.228 15 16.57 15h10c3.734 0 6.223 1.602 7.76 3.62 1.208 1.583 1.757 3.37 2 4.16l.006.019c.035.114.06.194.08.252a3.001 3.001 0 0 1-.992 3.308A3 3 0 0 1 37 29v14a1 1 0 1 1-2 0V29a1 1 0 1 0-2 0v.667a1 1 0 1 1-2 0V29c0-.957.448-1.81 1.147-2.36a2.99 2.99 0 0 1-1.422-1.691c-.046-.137-.09-.276-.133-.411l.013.034-.024-.069c-.264-.829-.509-1.574-1.022-2.247a2.882 2.882 0 0 0-.988-.847v19.742a3 3 0 0 1-5.986.293L21.855 34h-.568l-.73 7.444a3 3 0 0 1-5.986-.293V26.6c-.24-.308-.47-.61-.689-.905-.935-1.257-1.799-2.551-2.319-3.764-.434-1.014-1.124-3.121.245-4.987ZM16.57 17c-1.285 0-2.497.237-3.15 1.127-.683.93-.418 2.087-.02 3.017.424.988 1.17 2.128 2.086 3.359.271.365.562.744.87 1.136l.049.062 1.695-1.777a34.31 34.31 0 0 0-1.785-2.268 1 1 0 0 1 1.51-1.312 34.353 34.353 0 0 1 1.677 2.111L24.712 17h-8.14Zm10.845.034a1.006 1.006 0 0 1-.122.157L20.7 24.099c.49.672.982 1.334 1.528 2.001a3 3 0 1 1-4.644 3.8c-.32-.392-.66-.783-1.013-1.183V41.15a1 1 0 0 0 1.995.097L19.474 32h4.194l.907 9.248a1 1 0 0 0 1.996-.097V18.91l1.145.169c1.742.256 2.77 1.092 3.434 1.964.738.968 1.07 2.014 1.323 2.81l.014.043c.047.149.09.287.135.42a1 1 0 0 0 1.897-.633c-.027-.084-.059-.186-.09-.289l-.003-.008c-.24-.777-.705-2.269-1.685-3.556-1.067-1.4-2.736-2.585-5.325-2.797Zm-8.12 8.535-1.474 1.544c.447.503.893 1.011 1.31 1.52a1 1 0 1 0 1.548-1.266 42.748 42.748 0 0 1-1.383-1.799Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgTraumatism);
export default ForwardRef;
