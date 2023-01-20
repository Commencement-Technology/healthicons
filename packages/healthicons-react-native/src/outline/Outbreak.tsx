import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgOutbreak = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
  const context = React.useContext(HealthIconsContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 48 48"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.083 5.183C23.103 4.916 24 5.72 24 6.681c0 .703-.46 1.273-1.055 1.49a6 6 0 1 0 4.11 0A1.593 1.593 0 0 1 26 6.681c0-.96.897-1.765 1.918-1.498C32.545 6.395 36 10.443 36 15.31c0 1.415-.294 2.766-.825 3.998.868.148 1.728.413 2.56.8 4.411 2.058 6.619 6.9 5.762 11.605-.19 1.039-1.297 1.511-2.167 1.105a1.593 1.593 0 0 1-.905-1.586 6 6 0 1 0-1.737 3.726 1.593 1.593 0 0 1 1.796-.327c.87.406 1.22 1.559.547 2.37-3.054 3.682-8.182 5.103-12.594 3.046A10.064 10.064 0 0 1 25 37.422a10.065 10.065 0 0 1-3.437 2.625c-4.411 2.057-9.54.636-12.594-3.045-.674-.812-.324-1.965.547-2.37a1.593 1.593 0 0 1 1.796.326 6 6 0 1 0-1.737-3.726c.055.63-.267 1.29-.904 1.587-.87.405-1.979-.067-2.168-1.106-.857-4.706 1.351-9.547 5.762-11.604a10.068 10.068 0 0 1 2.56-.802A10.06 10.06 0 0 1 14 15.31c0-4.867 3.455-8.915 8.083-10.127Zm-4.134 4.844C16.725 11.484 16 13.323 16 15.31c0 1.578.454 3.054 1.25 4.323a1 1 0 0 1-.834 1.53 8.065 8.065 0 0 0-3.306.758c-1.8.84-3.16 2.275-3.964 4a8.003 8.003 0 0 1 11.856-1.07 3.999 3.999 0 0 1 1.971-3.3 8.003 8.003 0 0 1-5.024-11.524Zm9.078 11.524a3.999 3.999 0 0 1 1.97 3.3 8.003 8.003 0 0 1 11.857 1.07c-.803-1.725-2.164-3.16-3.964-4a8.065 8.065 0 0 0-3.306-.757 1 1 0 0 1-.833-1.531A8.101 8.101 0 0 0 34 15.31c0-1.987-.726-3.826-1.95-5.283a8.003 8.003 0 0 1-5.024 11.523Zm-.302 7.059c-.522.25-1.107.39-1.725.39-.618 0-1.203-.14-1.725-.39a8.002 8.002 0 0 1-8.169 10.09c1.837.494 3.811.374 5.612-.465a8.105 8.105 0 0 0 3.437-3.034 1 1 0 0 1 1.69 0 8.105 8.105 0 0 0 3.438 3.034c1.8.84 3.774.96 5.61.466a8.002 8.002 0 0 1-8.169-10.091ZM25 23a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.476 31.599a5.03 5.03 0 0 1-.763 1.89 10.11 10.11 0 0 1-1.589-1.228 9.996 9.996 0 0 1-3.027-5.865 9.995 9.995 0 0 1-.07-.658 4.959 4.959 0 0 1 2.028.204 7.998 7.998 0 0 0 3.42 5.657Zm14.172-5.884a5.003 5.003 0 0 0-1.703.227 7.997 7.997 0 0 1-3.42 5.657 5.027 5.027 0 0 0 .762 1.89 9.99 9.99 0 0 0 1.589-1.228 9.996 9.996 0 0 0 3.027-5.866c.03-.216.054-.436.07-.657a4.959 4.959 0 0 0-.325-.023ZM22.417 15.337a9.924 9.924 0 0 0-1.887.715 5.02 5.02 0 0 0 1.28 1.609 7.968 7.968 0 0 1 3.34-.66 7.968 7.968 0 0 1 3.04.66c.53-.44.968-.987 1.28-1.609A9.93 9.93 0 0 0 25 15c-.893 0-1.76.117-2.583.337Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOutbreak);
export default ForwardRef;
