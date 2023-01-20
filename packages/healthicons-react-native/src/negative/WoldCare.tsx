import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgWoldCare = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M0 0h48v48H0V0Zm37.894 32.621c-.568.602-1.131 1.2-1.66 1.96V36H28.8v-1.419c.133-1.104.367-3.093.388-3.646.028-.778 1.073-2.196 1.073-2.196l3.204-4.04s.907-.958 1.426-2.02c.52-1.063 1.624.274 1.771 1.23.147.956-.133 1.46-.133 1.46l-1.83 3.638s2.122-2.907 2.781-4.075c.334-.592.428-1.846.532-3.247.102-1.365.214-2.87.569-4.04.719-2.37 2.8-1.777 3.162-.717.36 1.059.279 8.058.148 9.225-.103.914-.653 1.808-1.275 2.816-.172.28-.35.568-.524.867-.697 1.192-1.451 1.993-2.198 2.785ZM26 41a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1v2Zm-15.891-8.379c.567.602 1.13 1.2 1.66 1.96V36h7.433v-1.419c-.133-1.104-.367-3.093-.388-3.646-.028-.778-1.072-2.196-1.072-2.196l-3.205-4.04s-.907-.958-1.426-2.02c-.52-1.063-1.624.274-1.77 1.23-.148.956.132 1.46.132 1.46l1.83 3.638s-2.122-2.907-2.781-4.075c-.334-.592-.427-1.846-.532-3.247-.101-1.365-.213-2.87-.568-4.04-.72-2.37-2.802-1.777-3.163-.717-.36 1.059-.279 8.058-.148 9.225.103.914.654 1.808 1.275 2.816.172.28.35.568.525.867.696 1.192 1.45 1.993 2.198 2.785ZM22.002 41a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2Zm9.968-24h-2a15.664 15.664 0 0 1-.374 2.615h1.574a7.946 7.946 0 0 0 .8-2.615Zm-2.24 4.615h-.765c-.147.363-.31.708-.484 1.035.451-.303.87-.65 1.249-1.035Zm-2.964 0c-.077.149-.157.29-.238.427-.5.831-1.017 1.345-1.496 1.636v-2.063h1.734Zm.767-2h-2.501V17h2.934a13.364 13.364 0 0 1-.433 2.615Zm-4.501 0V17h-2.998c.063.939.215 1.818.433 2.615h2.565Zm0 2h-1.798c.077.149.157.29.238.427.521.869 1.064 1.39 1.56 1.674v-2.1Zm-4.628-2A15.664 15.664 0 0 1 18.03 17h-1.936c.116.93.392 1.812.8 2.615h1.51Zm-.07 2h.7c.138.338.288.66.449.966a8.042 8.042 0 0 1-1.149-.966ZM27.966 15h-2.934v-2.615h2.501c.218.797.37 1.676.433 2.615Zm-4.934 0v-2.615h-2.565c-.218.797-.37 1.676-.433 2.615h2.998Zm-1.798-4.615h1.798v-2.1c-.496.283-1.038.804-1.56 1.673a7.927 7.927 0 0 0-.238.427Zm3.798-2.063v2.063h1.734a7.927 7.927 0 0 0-.238-.427c-.5-.832-1.017-1.345-1.496-1.636Zm6.138 4.063h-1.574c.192.824.32 1.701.374 2.615h2a7.946 7.946 0 0 0-.8-2.615ZM28.481 9.35c.175.327.337.672.484 1.035h.765a8.044 8.044 0 0 0-1.249-1.035Zm-8.998.069c-.161.306-.31.628-.448.966h-.701c.351-.357.736-.68 1.149-.966ZM16.093 15c.117-.93.393-1.812.8-2.615h1.511c-.192.824-.32 1.701-.374 2.615h-1.936Zm7.939 11c5.523 0 10-4.477 10-10s-4.477-10-10-10h-.08c-5.486.043-9.92 4.504-9.92 10s4.434 9.957 9.92 10h.08Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgWoldCare);
export default ForwardRef;
