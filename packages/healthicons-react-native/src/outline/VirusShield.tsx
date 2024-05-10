import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgVirusShield = (passedProps: SvgProps) => {
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
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.3 15a1 1 0 0 0-.3 1.954v.942a5.169 5.169 0 0 0-1.902.788l-.584-.584a1 1 0 0 0-1.421-1.407l-1.4 1.4a1 1 0 0 0 1.407 1.421l.584.584A5.17 5.17 0 0 0 18.896 22h-.942a1 1 0 0 0-1.954.3v1.4a1 1 0 0 0 1.954.3h.942a5.17 5.17 0 0 0 .788 1.902l-.584.584a1 1 0 0 0-1.407 1.421l1.4 1.4a1 1 0 0 0 1.421-1.407l.584-.584c.565.38 1.21.653 1.902.788v.942A1 1 0 0 0 23.3 31h1.4a1 1 0 0 0 .3-1.954v-.942a5.18 5.18 0 0 0 2.303-1.087l.883.883a1 1 0 0 0 1.421 1.407l1.4-1.4a1 1 0 0 0-1.407-1.421l-1.02-1.02c.244-.453.423-.946.524-1.466h.942A1 1 0 0 0 32 23.7v-1.4a1 1 0 0 0-1.954-.3h-.942a5.17 5.17 0 0 0-.788-1.902l.584-.584a1 1 0 0 0 1.407-1.421l-1.4-1.4a1 1 0 0 0-1.421 1.407l-.584.584A5.169 5.169 0 0 0 25 17.896v-.942A1 1 0 0 0 24.7 15h-1.4Zm.7 11.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38.059 8.819A34.906 34.906 0 0 0 24 6 34.906 34.906 0 0 0 9.941 8.82l-.015.007a3.274 3.274 0 0 0-1.407 1.203A3.216 3.216 0 0 0 8 11.799v11.502c0 2.958.659 6.478 2.762 9.805 2.11 3.338 5.63 6.41 11.228 8.527a5.694 5.694 0 0 0 4.02 0c5.597-2.114 9.116-5.199 11.226-8.543C39.34 29.757 40 26.235 40 23.301V11.8a3.216 3.216 0 0 0-.52-1.77 3.274 3.274 0 0 0-1.406-1.203l-.015-.007ZM12.453 32.037C10.594 29.097 10 25.97 10 23.301V11.796H9l1-.007c-.002-.236.066-.47.197-.671.13-.2.317-.363.541-.465a32.906 32.906 0 0 1 13.253-2.652h.018a32.906 32.906 0 0 1 13.253 2.652c.224.102.411.264.54.464.132.202.2.435.198.672V23.3c0 2.643-.595 5.774-2.455 8.722-1.854 2.937-5.006 5.762-10.242 7.74a3.693 3.693 0 0 1-2.606 0c-5.24-1.982-8.392-4.796-10.244-7.726Z"
      />
    </Svg>
  );
};
export default SvgVirusShield;
