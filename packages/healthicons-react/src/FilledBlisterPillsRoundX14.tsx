import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledBlisterPillsRoundX14 = (
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
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path
        fill="#333"
        fillRule="evenodd"
        d="M16 4a4 4 0 0 0-4 4v32a4 4 0 0 0 4 4h8.585a.598.598 0 0 1-.585-.597c0-.33.269-.597.6-.597A.597.597 0 0 1 24.615 44H32a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4H16Zm8.6 0c.331 0 .6.267.6.597 0 .33-.269.597-.6.597a.598.598 0 0 1-.6-.597c0-.33.269-.597.6-.597Zm0 35.821a.6.6 0 0 1 .6.597c0 .33-.269.597-.6.597a.598.598 0 0 1-.6-.597c0-.33.269-.597.6-.597Zm.6-2.388a.599.599 0 0 0-.6-.597c-.331 0-.6.267-.6.597 0 .33.269.597.6.597.331 0 .6-.267.6-.597Zm-.6-3.582c.331 0 .6.267.6.597 0 .33-.269.597-.6.597a.598.598 0 0 1-.6-.597c0-.33.269-.597.6-.597Zm.6-2.388a.598.598 0 0 0-.6-.597c-.331 0-.6.267-.6.597a.6.6 0 0 0 1.2 0Zm-.6-3.582c.331 0 .6.267.6.597 0 .33-.269.597-.6.597a.598.598 0 0 1-.6-.597c0-.33.269-.597.6-.597Zm.6-2.389a.598.598 0 0 0-.6-.597.598.598 0 1 0 0 1.194c.331 0 .6-.267.6-.596Zm-.6-3.581c.331 0 .6.267.6.597 0 .33-.269.597-.6.597a.598.598 0 0 1-.6-.597c0-.33.269-.597.6-.597Zm.6-2.389a.598.598 0 0 0-.6-.597.6.6 0 0 0-.6.597c0 .33.269.597.6.597.331 0 .6-.267.6-.597Zm-.6-3.582a.6.6 0 0 1 .6.597.6.6 0 0 1-.6.598.599.599 0 0 1-.6-.598c0-.33.269-.597.6-.597Zm.6-2.387a.598.598 0 0 0-.6-.597c-.331 0-.6.267-.6.597a.6.6 0 0 0 1.2 0Zm-.6-3.583a.6.6 0 0 1 .6.597c0 .33-.269.597-.6.597a.598.598 0 0 1-.6-.597c0-.33.269-.597.6-.597Zm.6-2.388a.598.598 0 0 0-.6-.597.6.6 0 0 0-.6.597c0 .33.269.597.6.597.331 0 .6-.267.6-.597Zm-6.7 2.587c.828 0 1.5-.668 1.5-1.492 0-.825-.672-1.493-1.5-1.493S17 7.852 17 8.677c0 .824.672 1.492 1.5 1.492Zm1.5 3.483c0 .824-.672 1.492-1.5 1.492s-1.5-.668-1.5-1.492c0-.825.672-1.493 1.5-1.493s1.5.668 1.5 1.493Zm-1.5 6.467c.828 0 1.5-.668 1.5-1.492s-.672-1.493-1.5-1.493-1.5.669-1.5 1.493c0 .824.672 1.492 1.5 1.492Zm1.5 3.483c0 .824-.672 1.493-1.5 1.493s-1.5-.669-1.5-1.493c0-.824.672-1.492 1.5-1.492s1.5.668 1.5 1.492Zm-1.5 6.468c.828 0 1.5-.669 1.5-1.493 0-.824-.672-1.492-1.5-1.492s-1.5.668-1.5 1.492.672 1.493 1.5 1.493Zm1.5 3.482c0 .825-.672 1.493-1.5 1.493s-1.5-.668-1.5-1.493c0-.824.672-1.492 1.5-1.492s1.5.668 1.5 1.492Zm-1.5 6.468c.828 0 1.5-.668 1.5-1.493 0-.824-.672-1.492-1.5-1.492s-1.5.668-1.5 1.492c0 .825.672 1.493 1.5 1.493ZM32 8.677c0 .824-.672 1.492-1.5 1.492S29 9.501 29 8.677c0-.825.672-1.493 1.5-1.493s1.5.668 1.5 1.493Zm-1.5 6.467c.828 0 1.5-.668 1.5-1.492 0-.825-.672-1.493-1.5-1.493s-1.5.668-1.5 1.493c0 .824.672 1.492 1.5 1.492Zm1.5 3.483c0 .824-.672 1.492-1.5 1.492s-1.5-.668-1.5-1.492.672-1.493 1.5-1.493 1.5.669 1.5 1.493Zm-1.5 6.468c.828 0 1.5-.669 1.5-1.493 0-.824-.672-1.492-1.5-1.492s-1.5.668-1.5 1.492.672 1.493 1.5 1.493Zm1.5 3.482c0 .824-.672 1.493-1.5 1.493S29 29.4 29 28.577c0-.824.672-1.492 1.5-1.492s1.5.668 1.5 1.492Zm-1.5 6.468c.828 0 1.5-.668 1.5-1.493 0-.824-.672-1.492-1.5-1.492s-1.5.668-1.5 1.492c0 .825.672 1.493 1.5 1.493Zm1.5 3.482c0 .825-.672 1.493-1.5 1.493s-1.5-.668-1.5-1.493c0-.824.672-1.492 1.5-1.492s1.5.668 1.5 1.492Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFilledBlisterPillsRoundX14);
export default ForwardRef;
