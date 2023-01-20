import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBlisterPillsOvalX14 = (
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
      viewBox="0 0 48 48"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 8a4 4 0 0 1 4-4h8.6c-.331 0-.6.267-.6.597 0 .33.269.597.6.597.331 0 .6-.267.6-.597A.598.598 0 0 0 24.6 4H32a4 4 0 0 1 4 4v32a4 4 0 0 1-4 4h-7.385a.598.598 0 0 0 .585-.597.598.598 0 0 0-.6-.597c-.331 0-.6.267-.6.597 0 .325.26.59.585.597H16a4 4 0 0 1-4-4V8Zm13.2 32.418a.598.598 0 0 0-.6-.597c-.331 0-.6.268-.6.597 0 .33.269.597.6.597.331 0 .6-.267.6-.597Zm-.6-3.582c.331 0 .6.267.6.597 0 .33-.269.597-.6.597a.598.598 0 0 1-.6-.597c0-.33.269-.597.6-.597Zm.6-2.388a.598.598 0 0 0-.6-.597c-.331 0-.6.267-.6.597 0 .33.269.597.6.597.331 0 .6-.267.6-.597Zm-.6-3.582c.331 0 .6.267.6.597 0 .33-.269.597-.6.597a.599.599 0 0 1-.6-.597c0-.33.269-.597.6-.597Zm.6-2.388a.598.598 0 0 0-.6-.597c-.331 0-.6.267-.6.597 0 .33.269.597.6.597.331 0 .6-.267.6-.597Zm-.6-3.583a.598.598 0 1 1 0 1.194.598.598 0 0 1-.6-.596c0-.33.269-.598.6-.598Zm.6-2.387a.599.599 0 0 0-.6-.597c-.331 0-.6.267-.6.597 0 .33.269.597.6.597.331 0 .6-.268.6-.597Zm-.6-3.583c.331 0 .6.268.6.597 0 .33-.269.597-.6.597a.598.598 0 0 1-.6-.597c0-.33.269-.597.6-.597Zm.6-2.388a.598.598 0 0 0-.6-.597c-.331 0-.6.268-.6.597 0 .33.269.598.6.598.331 0 .6-.268.6-.598Zm-.6-3.581c.331 0 .6.267.6.597 0 .33-.269.597-.6.597a.598.598 0 0 1-.6-.597c0-.33.269-.597.6-.597Zm.6-2.389a.598.598 0 0 0-.6-.597c-.331 0-.6.268-.6.597 0 .33.269.597.6.597.331 0 .6-.267.6-.597Zm-.6-3.582c.331 0 .6.268.6.597 0 .33-.269.597-.6.597a.598.598 0 0 1-.6-.597c0-.33.269-.597.6-.597Zm-6.76-.15a1.182 1.182 0 1 1 1.672 1.672l-1.671 1.672a1.182 1.182 0 0 1-1.672-1.672l1.672-1.671Zm1.672 5a1.182 1.182 0 0 0-1.671 0l-1.672 1.672a1.182 1.182 0 1 0 1.672 1.672l1.671-1.672a1.182 1.182 0 0 0 0-1.671Zm-1.671 5a1.182 1.182 0 1 1 1.671 1.672l-1.671 1.672a1.182 1.182 0 0 1-1.672-1.672l1.672-1.671Zm1.671 5a1.182 1.182 0 0 0-1.671 0l-1.672 1.672a1.182 1.182 0 1 0 1.672 1.672l1.671-1.672a1.182 1.182 0 0 0 0-1.671Zm-1.671 5a1.182 1.182 0 1 1 1.671 1.672l-1.671 1.672a1.182 1.182 0 0 1-1.672-1.672l1.672-1.671Zm1.671 5a1.182 1.182 0 0 0-1.671 0l-1.672 1.672a1.182 1.182 0 1 0 1.672 1.672l1.671-1.672a1.182 1.182 0 0 0 0-1.671Zm-1.671 5a1.182 1.182 0 1 1 1.671 1.672l-1.671 1.672a1.182 1.182 0 0 1-1.672-1.672l1.672-1.671Zm13.671-30a1.182 1.182 0 0 0-1.671 0l-1.672 1.672a1.182 1.182 0 1 0 1.672 1.672l1.671-1.672a1.182 1.182 0 0 0 0-1.671Zm-1.671 5a1.182 1.182 0 1 1 1.671 1.672l-1.671 1.672a1.182 1.182 0 0 1-1.672-1.672l1.672-1.671Zm1.671 5a1.182 1.182 0 0 0-1.671 0l-1.672 1.672a1.182 1.182 0 1 0 1.672 1.672l1.671-1.672a1.182 1.182 0 0 0 0-1.671Zm-1.671 5a1.182 1.182 0 1 1 1.671 1.672l-1.671 1.672a1.182 1.182 0 0 1-1.672-1.672l1.672-1.671Zm1.671 5a1.182 1.182 0 0 0-1.671 0l-1.672 1.672a1.182 1.182 0 1 0 1.672 1.672l1.671-1.672a1.182 1.182 0 0 0 0-1.671Zm-1.671 5a1.182 1.182 0 1 1 1.671 1.672l-1.671 1.672a1.182 1.182 0 0 1-1.672-1.672l1.672-1.671Zm1.671 5a1.182 1.182 0 0 0-1.671 0l-1.672 1.672a1.182 1.182 0 1 0 1.672 1.672l1.671-1.672a1.182 1.182 0 0 0 0-1.671Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgBlisterPillsOvalX14);
export default ForwardRef;
