import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSkull = (
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
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.97 7.557C10.361 9.822 9 12.98 9 16.5c0 3.431.799 5.584 1.606 7.197.183.367.366.705.531 1.01l.035.063c.177.327.328.608.455.877.252.531.373.939.373 1.353v4a1 1 0 0 0 1 1h.016c.014.543.04 1.27.089 2.086.103 1.719.313 3.902.75 5.57a2.612 2.612 0 0 0 1.12 1.536C16.265 42.019 19.778 44 24 44s7.736-1.981 9.025-2.808a2.612 2.612 0 0 0 1.12-1.537c.437-1.667.647-3.85.75-5.569.05-.816.075-1.543.09-2.086H35a1 1 0 0 0 1-1v-4c0-.414.12-.822.373-1.353.127-.269.278-.55.455-.877l.034-.064c.166-.304.349-.642.532-1.009C38.201 22.084 39 19.931 39 16.5c0-3.52-1.362-6.678-3.97-8.943C32.434 5.302 28.682 4 24 4c-4.681 0-8.433 1.302-11.03 3.557Zm20.004 24.785a2.298 2.298 0 0 0-.358.196c-.398.271-.605.626-.711 1.029-.112.425-.108.896-.06 1.33.024.213.056.404.086.57l.008.044c.011.065.024.134.033.193.009.055.028.175.028.296 0 .855-.724 1.611-1.85 2.104-1.18.516-3.087.896-6.15.896s-4.97-.38-6.15-.896C16.723 37.61 16 36.854 16 36c0-.12.02-.24.028-.296l.033-.193.008-.044c.03-.166.062-.357.086-.57.048-.434.052-.905-.06-1.33a1.708 1.708 0 0 0-.711-1.029 2.298 2.298 0 0 0-.358-.196c.015.463.039 1.019.075 1.624.102 1.699.304 3.716.69 5.18a.612.612 0 0 0 .264.362C17.234 40.264 20.352 42 24 42c3.648 0 6.766-1.736 7.945-2.492a.612.612 0 0 0 .265-.361c.385-1.465.587-3.482.689-5.18.036-.606.06-1.162.075-1.625Zm-3.625 3.93C28.53 36.63 26.937 37 24 37c-2.937 0-4.53-.37-5.35-.729-.378-.165-.55-.305-.625-.381l.013-.074c.032-.176.073-.418.104-.698.061-.55.088-1.298-.112-2.06-.207-.784-.656-1.586-1.523-2.174-.65-.442-1.48-.725-2.507-.834V27c0-.836-.254-1.553-.565-2.21a20.36 20.36 0 0 0-.505-.974l-.032-.058c-.167-.308-.335-.619-.504-.955C11.701 21.416 11 19.569 11 16.5c0-2.98 1.138-5.572 3.28-7.432C16.434 7.198 19.682 6 24 6c4.319 0 7.567 1.198 9.72 3.068C35.861 10.928 37 13.52 37 16.5c0 3.069-.701 4.916-1.394 6.303-.169.336-.337.647-.504.955l-.032.058c-.174.322-.351.65-.505.975-.31.656-.565 1.373-.565 2.209v3.05c-1.028.109-1.857.392-2.507.834-.867.588-1.316 1.39-1.523 2.174-.2.762-.173 1.51-.112 2.06.03.28.072.522.104.698l.013.074c-.075.076-.247.216-.626.381ZM19 29c-2.21 0-4-2.239-4-5s1.79-5 4-5 4 2.239 4 5-1.79 5-4 5Zm14-5c0 2.761-1.79 5-4 5s-4-2.239-4-5 1.79-5 4-5 4 2.239 4 5Zm-9 5-.018.008c-.25.117-2.982 1.44-2.982 3.268 0 .83.58 1.604 1.4 1.711.063.009.128.013.194.013.639 0 1.113-.372 1.406-.9.293.528.767.9 1.406.9.066 0 .131-.004.195-.013.82-.107 1.399-.88 1.399-1.711 0-1.907-2.982-3.268-2.982-3.268L24 29Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgSkull);
export default ForwardRef;
