import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPainManagment = (
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
        d="M9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Zm20.536 4.868c.068-.402-.19-.786-.577-.857a.714.714 0 0 0-.823.6l-.698 4.115-2.567-1.709L23.416 19a.742.742 0 0 0 .514.897c.38.1.767-.14.864-.535l.97-3.994 2.703 1.799 1.068-6.3Zm-16.142 2.258a.695.695 0 0 1 .976-.248l5.662 3.574-2.827 2.146 3.602 2.666c.32.237.395.698.167 1.03a.693.693 0 0 1-.99.174l-5.21-3.855 2.698-2.048-3.84-2.423a.756.756 0 0 1-.238-1.016Zm-3.03 13.926a.755.755 0 0 0-.274 1.006.696.696 0 0 0 .967.285l3.784-2.2.372 3.351 5.655-2.744a.752.752 0 0 0 .344-.982.7.7 0 0 0-.945-.358l-3.868 1.878-.39-3.517-5.645 3.281Zm9.039 10.141c-.036.407.252.766.643.804a.719.719 0 0 0 .772-.668l.375-4.235 2.733 1.504.986-6.158c.064-.403-.198-.783-.585-.85a.714.714 0 0 0-.818.607l-.66 4.135-2.876-1.582-.57 6.443Zm18.51-16.815a.755.755 0 0 1-.282 1.004l-5.412 3.087-.344-3.332-3.622 1.722a.7.7 0 0 1-.942-.365.752.752 0 0 1 .351-.98l5.416-2.574.327 3.167 3.542-2.021a.697.697 0 0 1 .965.292Zm-4.665 13.647c.335.211.772.1.976-.249a.756.756 0 0 0-.239-1.015l-3.52-2.223 2.512-1.907-4.913-3.637a.693.693 0 0 0-.991.174.758.758 0 0 0 .166 1.03l3.307 2.448-2.642 2.006 5.344 3.373Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPainManagment);
export default ForwardRef;
