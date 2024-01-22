import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgEndocrinology = (
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
        d="M6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3h-.005v-4.183a8.072 8.072 0 0 0-.586-3.303 8.465 8.465 0 0 0-1.892-2.834 9.07 9.07 0 0 0-2.907-1.93 9.588 9.588 0 0 0-3.472-.726h-1.28v-1.183h.535c.253 0 .503-.027.746-.078l.025-.005a3.495 3.495 0 0 0 1.629-.849 3.113 3.113 0 0 0 1.003-2.254v-2.093c0 .087.55.035.815.01.068-.005.117-.01.133-.01a.98.98 0 0 0 .599-.327.875.875 0 0 0 .213-.619l-.001-.008a2.902 2.902 0 0 0-.347-.957l-.464-1.11a84.445 84.445 0 0 1-.967-2.313s-.194-1.82-.368-2.44c-.539-1.664-1.629-3.123-3.11-4.165A9.043 9.043 0 0 0 24.171 9a8.957 8.957 0 0 0-4.993 1.497c-1.458.976-2.555 2.357-3.14 3.949a7.633 7.633 0 0 0-.115 4.931c.508 1.615 1.539 3.04 2.95 4.077v5.57H17.27c-2.151.006-4.217.798-5.76 2.21-1.554 1.422-2.455 3.36-2.511 5.4V42a3 3 0 0 1-3-3V9Zm30.995 28.817V42H25v-7a1 1 0 1 0-2 0v7H11v-5.337c.047-1.47.699-2.89 1.86-3.953 1.173-1.073 2.769-1.69 4.45-1.686h1.563a2 2 0 0 0 2-2v-5.57a2 2 0 0 0-.816-1.612c-1.08-.793-1.85-1.87-2.226-3.065a5.632 5.632 0 0 1 .087-3.643c.433-1.18 1.254-2.226 2.374-2.976A6.957 6.957 0 0 1 24.162 11a7.042 7.042 0 0 1 3.986 1.26c1.127.791 1.938 1.88 2.344 3.1.042.17.113.608.183 1.142a43.89 43.89 0 0 1 .105.866l.006.055.002.016c.02.18.063.356.129.524.32.81.659 1.598.984 2.355l.001.003.16.38a2 2 0 0 0-1.266 1.86v2.087c-.003.276-.12.567-.37.8a1.515 1.515 0 0 1-1.033.393h-.536a2 2 0 0 0-2 2v1.183a2 2 0 0 0 2 2h1.261c.942.021 1.868.216 2.724.573a7.07 7.07 0 0 1 2.266 1.502 6.466 6.466 0 0 1 1.447 2.164 6.073 6.073 0 0 1 .44 2.554ZM23 33c.552 0 1-1.12 1-2.5 0 1.38.448 2.5 1 2.5s1-1.12 1-2.5-.448-2.5-1-2.5-1 1.12-1 2.5c0-1.38-.448-2.5-1-2.5s-1 1.12-1 2.5.448 2.5 1 2.5Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgEndocrinology);
export default ForwardRef;
