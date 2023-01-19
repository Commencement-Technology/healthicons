import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledRegisterBook = (
  passedProps: SvgProps,
  ref: Ref<SVGSVGElement>
) => {
  const context = React.useContext(HealthIconsContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M29.066 10.335c-1.571.21-3.23.514-5.066.905-1.837-.39-3.495-.696-5.066-.905 1.455.536 2.93 1.202 4.494 1.938.35.165.572.517.572.903 0-.386.223-.738.572-.902 1.564-.737 3.04-1.403 4.494-1.94ZM24 36.419c0 .734-.766 1.217-1.435.915-4.82-2.182-8.883-3.358-14.331-2.364C7.6 35.086 7 34.611 7 33.967V10.773c-.72.145-1.466.31-2.243.498a.991.991 0 0 0-.757.965v25.539c0 .633.583 1.105 1.204.987 6.213-1.185 10.4-1.268 16.122-.4a3 3 0 0 0 5.348 0c5.721-.868 9.91-.785 16.122.4A1.012 1.012 0 0 0 44 37.775V12.237a.991.991 0 0 0-.757-.966A59.727 59.727 0 0 0 41 10.773v23.194c0 .644-.6 1.119-1.234 1.003-5.448-.994-9.511.182-14.33 2.364-.67.302-1.436-.18-1.436-.915Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M8 10.537v23.431l.007.007a.058.058 0 0 0 .048.012c5.73-1.047 10.013.214 14.922 2.435a.028.028 0 0 0 .008.003h.001a.026.026 0 0 0 .011-.004.026.026 0 0 0 .003-.002V13.177c-5.317-2.504-9.342-4.055-15-2.64Zm-.516-1.932c6.394-1.609 10.98.226 16.37 2.764A1.998 1.998 0 0 1 25 13.176V36.42c0 1.478-1.532 2.42-2.847 1.826-4.73-2.141-8.574-3.234-13.74-2.291C7.2 36.175 6 35.27 6 33.967V10.524c0-.885.589-1.694 1.484-1.92Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M40 10.537v23.431a.06.06 0 0 1-.029.018.058.058 0 0 1-.025 0c-5.732-1.046-10.014.215-14.923 2.437a.028.028 0 0 1-.008.002h-.001a.026.026 0 0 1-.011-.004L25 36.419V13.176c5.317-2.504 9.342-4.054 15-2.639Zm.516-1.932c-6.394-1.609-10.98.226-16.37 2.764A2 2 0 0 0 23 13.177V36.42c0 1.478 1.532 2.42 2.847 1.826 4.73-2.141 8.575-3.234 13.74-2.291C40.8 36.175 42 35.27 42 33.967V10.524c0-.885-.589-1.694-1.484-1.92ZM11.01 29.003c3.67-.038 5.717.332 9.612 1.923l.756-1.852c-4.127-1.685-6.438-2.112-10.388-2.071l.02 2Zm0-4c3.67-.038 5.717.332 9.612 1.923l.756-1.852c-4.127-1.685-6.438-2.112-10.388-2.071l.02 2Zm0-4c3.67-.038 5.717.332 9.612 1.923l.756-1.852c-4.127-1.685-6.438-2.112-10.388-2.071l.02 2ZM13.5 13v3h-2v-3h2Zm3.5 1v3h-2v-3h2Zm3.5 1v3h-2v-3h2Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M36.99 29.003c-3.67-.038-5.717.332-9.612 1.923l-.756-1.852c4.127-1.685 6.438-2.112 10.388-2.071l-.02 2Zm0-4c-3.67-.038-5.717.332-9.612 1.923l-.756-1.852c4.127-1.685 6.438-2.112 10.388-2.071l-.02 2Zm0-4c-3.67-.038-5.717.332-9.612 1.923l-.756-1.852c4.127-1.685 6.438-2.112 10.388-2.071l-.02 2ZM34.5 13v3h2v-3h-2ZM31 14v3h2v-3h-2Zm-3.5 1v3h2v-3h-2Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFilledRegisterBook);
export default ForwardRef;
