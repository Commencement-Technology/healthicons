import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlinePrisoner = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M19.301 6.563C18.006 6.8 16.918 7 16 7a1 1 0 0 0-1 1v10a9 9 0 1 0 18 0V8a1 1 0 0 0-1-1c-.823 0-1.838-.186-3.085-.415l-.374-.069C27.171 6.266 25.601 6 24 6c-1.547 0-3.085.267-4.446.516l-.253.047Zm.302 1.978c-.872.16-1.763.324-2.603.406v1.505c.692-.069 1.461-.194 2.316-.334l.257-.042c1.362-.221 2.89-.457 4.427-.457 1.59 0 3.151.235 4.522.457l.376.062c.786.128 1.484.242 2.102.309V8.942c-.768-.08-1.595-.233-2.415-.384h-.002l-.401-.074C26.812 8.234 25.402 8 24 8c-1.343 0-2.716.233-4.086.484l-.31.057ZM24 25a7 7 0 0 0 7-7v-2.163c-.759-.071-1.578-.205-2.396-.34l-.403-.066C26.831 15.21 25.412 15 24 15c-1.355 0-2.736.209-4.106.431l-.308.05c-.871.143-1.755.288-2.586.36V18a7 7 0 0 0 7 7Zm4.898-11.481c.786.128 1.484.242 2.102.308v-1.371c-.759-.071-1.578-.205-2.396-.34h-.001l-.402-.065c-1.37-.223-2.789-.432-4.201-.432-1.355 0-2.736.209-4.106.431l-.308.05c-.871.143-1.755.288-2.586.36v1.373c.692-.069 1.461-.194 2.316-.334l.257-.042C20.935 13.236 22.463 13 24 13c1.59 0 3.151.235 4.522.457l.376.062ZM23.47 29.005C31.077 28.87 42 31.642 42 36.04V42H6v-5.96c0-4.398 10.258-6.908 17.47-7.035ZM39.999 36c-.016-.22-.175-.683-1.04-1.346A8.493 8.493 0 0 0 37.95 34H10v-.02c-.4.225-.747.456-1.038.688-.788.628-.946 1.079-.96 1.332h31.996Zm-16.492-4.996c2.749-.048 5.976.31 8.888.996H15.543a39.58 39.58 0 0 1 7.963-.996ZM40 38v2H8v-2h32Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOutlinePrisoner);
export default ForwardRef;
