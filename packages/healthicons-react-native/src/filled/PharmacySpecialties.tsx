import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPharmacySpecialties = (passedProps: SvgProps) => {
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
      fill="currentColor"
      color="currentColor"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.5 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3h-30a3 3 0 0 1-3-3V9Zm13.7 7.113c-.04-1.153-.006-2.323.376-3.22.196-.46.473-.817.863-1.068.395-.253.983-.447 1.885-.447.988 0 1.818.359 2.418.74a5.256 5.256 0 0 1 .854.677l.036.037.005.005a1 1 0 0 0 1.493-1.33l-.749.663c.749-.663.748-.664.748-.664l-.002-.002-.002-.003-.008-.008-.023-.025a5.787 5.787 0 0 0-.332-.323 7.262 7.262 0 0 0-.948-.715c-.81-.515-2.01-1.052-3.49-1.052-1.192 0-2.178.26-2.965.764-.79.507-1.3 1.211-1.623 1.967-.553 1.298-.578 2.829-.537 4.004h-3.236c-.552 0-1.008.451-.92.997.585 3.65 4.345 6.523 9.039 6.857V29h2v-5.045a12.197 12.197 0 0 0 2.909-.603c.006.069.009.141.009.218 0 .344-.305.883-1.165 1.408-.26.158-.543.297-.835.412v2.11a7.687 7.687 0 0 0 1.877-.815C28.92 26.048 30 24.985 30 23.57c0-.356-.04-.712-.132-1.057 2.202-1.25 3.734-3.182 4.09-5.403.087-.546-.368-.997-.92-.997H20.2Zm8.415 18.16c0 .784-.223 1.487-.636 2.066h1.757v2H18.264v-2h4.818V34h2v1.907c.416-.092.738-.243.97-.422.354-.275.563-.661.563-1.212 0-.552-.21-.938-.563-1.212-.383-.296-1.011-.516-1.898-.516-1.055 0-2.274-.08-3.257-.51-.509-.223-.997-.557-1.355-1.06-.364-.512-.542-1.127-.542-1.816 0-.69.178-1.304.542-1.815.358-.504.846-.838 1.355-1.061.344-.151.718-.259 1.103-.335v2.057c-.108.033-.208.07-.3.11-.27.118-.432.252-.528.388-.09.127-.172.323-.172.656s.081.529.172.656c.096.136.257.27.527.388.575.252 1.433.342 2.455.342 1.19 0 2.292.292 3.121.934.858.663 1.34 1.64 1.34 2.794Z"
      />
    </Svg>
  );
};
export default SvgPharmacySpecialties;
