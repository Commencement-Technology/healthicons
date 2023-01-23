import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgCommunityMeeting = (passedProps: SvgProps) => {
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
        d="M34.808 31.537c-.19-2.135-.574-4.055-1.43-5.501l3.051-3.051A6 6 0 0 0 35.87 11C35.116 8.163 31.208 6 26.5 6c-4.164 0-7.703 1.692-8.985 4.047C13.838 10.401 11 12.707 11 15.5c0 3.038 3.358 5.5 7.5 5.5 1.993 0 3.804-.57 5.148-1.5a29.415 29.415 0 0 0 2.105 3.342c.808 1.1 1.79 2.24 2.894 3.115.937.741 2.029 1.344 3.226 1.504.488 1.026.782 2.44.942 4.253C33 33.785 33 36.236 33 39v1h2v-1.035c0-2.723 0-5.26-.192-7.428Zm-2.79-14.153a2 2 0 0 0-2.481-1.75A12.44 12.44 0 0 1 26.5 16c-.378 0-.749-.016-1.111-.047a2 2 0 0 0-1.825.87C22.794 17.96 20.95 19 18.5 19c-1.69 0-3.14-.505-4.12-1.224-.982-.72-1.38-1.547-1.38-2.276 0-1.296 1.513-3.155 4.706-3.462a2 2 0 0 0 1.565-1.034C20.06 9.555 22.71 8 26.5 8c2.063 0 3.883.476 5.218 1.196 1.364.736 2.03 1.61 2.218 2.318a2 2 0 0 0 1.976 1.487L36 13a4 4 0 1 1-2.47 7.147l-.336-.296a3.983 3.983 0 0 1-1.176-2.467Zm-1.1 2.807a5.991 5.991 0 0 1-.891-2.618c-.628.159-1.289.276-1.975.347a15.055 15.055 0 0 1-2.833.026 4.83 4.83 0 0 1-.075.108c.108.208.25.476.424.787a27.419 27.419 0 0 0 1.908 2.967v-.146c1.105 0 2.265-.597 3.227-1.308.074-.054.146-.108.215-.163Zm-2.033 3.284c.326.334.66.643 1.003.914.493.39.974.682 1.44.87l2.619-2.62a5.994 5.994 0 0 1-1.694-.953c-.115.092-.236.185-.362.278-.776.572-1.822 1.205-3.006 1.511Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.002 25.5a2.5 2.5 0 1 1-5 .005 2.5 2.5 0 0 1 5-.005Zm-2 .002a.5.5 0 1 1-1 .001.5.5 0 0 1 1-.001ZM11.002 29.5a2.5 2.5 0 1 1-5 .005 2.5 2.5 0 0 1 5-.005Zm-2 .002a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM25.504 32.002a2.5 2.5 0 1 0-.004-5 2.5 2.5 0 0 0 .004 5Zm-.002-2a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
        fill="#333"
      />
      <Path
        d="M15 29a2 2 0 0 1 2 2v2h2a2 2 0 1 1 0 4h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2ZM10 35a2 2 0 1 0-4 0v5a2 2 0 0 0 2 2h4a2 2 0 1 0 0-4h-2v-3ZM26 33a2 2 0 0 0-2 2v3h-2a2 2 0 1 0 0 4h4a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgCommunityMeeting;
