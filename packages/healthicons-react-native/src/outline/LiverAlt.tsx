import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgLiverAlt = (passedProps: SvgProps) => {
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
      <Path fill="#fff" d="M0 0h48v48H0z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38.948 8c-.192 0-.645.112-1.446.529a32.6 32.6 0 0 0-2.38 1.368c-.877.554-1.893 1.052-3.04 1.498-1.186.46-2.32.708-3.392.708-.44 0-.72.045-.88.097a.397.397 0 0 0-.05.02.96.96 0 0 0-.097.267 6.366 6.366 0 0 0-.025.668c0 1.349.208 2.635.621 3.865.424 1.263.93 2.253 1.498 2.998.609.799 1.211 1.403 1.8 1.836.607.445 1.007.56 1.236.56.11 0 .443-.08 1.065-.511.569-.394 1.217-1 1.942-1.848a19.795 19.795 0 0 0 2.029-2.884c.612-1.048 1.133-2.298 1.553-3.762.413-1.44.618-2.892.618-4.357 0-.437-.12-.656-.258-.79C39.59 8.114 39.36 8 38.948 8ZM36.58 6.754C37.424 6.315 38.243 6 38.948 6c.828 0 1.593.25 2.188.828.61.593.864 1.379.864 2.224 0 1.655-.233 3.292-.696 4.908-.456 1.592-1.037 3.002-1.749 4.22a21.795 21.795 0 0 1-2.235 3.175c-.792.926-1.565 1.666-2.322 2.191-.703.488-1.46.868-2.205.868-.84 0-1.657-.388-2.42-.948-.777-.571-1.511-1.323-2.206-2.235-.735-.964-1.33-2.165-1.804-3.574a14.049 14.049 0 0 1-.725-4.502c0-.353.01-.662.039-.902a2.93 2.93 0 0 1 .307-.956c.26-.522.712-.84 1.213-1.001.438-.14.949-.193 1.493-.193.765 0 1.65-.178 2.667-.573 1.054-.41 1.95-.852 2.697-1.324a34.596 34.596 0 0 1 2.526-1.452Zm-18.295 8.574c-1.897 0-3.626.423-5.206 1.261-1.587.843-2.823 1.972-3.73 3.39A8.365 8.365 0 0 0 8 24.587c0 1.436.265 2.939.81 4.514.551 1.591 1.256 3.012 2.11 4.269a29.438 29.438 0 0 0 2.79 3.52c.975 1.045 1.892 1.827 2.75 2.367.525.33.944.528 1.267.635l.03-.102c.2-.682.542-1.557 1.008-2.608a12.484 12.484 0 0 1 1.83-2.978l.01-.01c.704-.82 1.593-1.683 2.655-2.592a58.75 58.75 0 0 1 2.774-2.251 14.09 14.09 0 0 0 1.916-1.72c.405-.442.55-.73.597-.882a2.242 2.242 0 0 0-.175-.182c-.317-.297-.74-.66-1.273-1.088-.566-.455-1.03-.877-1.363-1.263l-.002-.001a15.066 15.066 0 0 1-2.402-3.777c-.602-1.366-.918-2.722-.918-4.058a.607.607 0 0 0-.079-.33c-.031-.05-.099-.13-.27-.212a5.323 5.323 0 0 0-.74-.297c-.172-.053-.464-.105-.911-.134a47.186 47.186 0 0 0-1.081-.063 27.19 27.19 0 0 0-1.048-.015Zm-6.144-.505c1.883-1 3.936-1.495 6.144-1.495.474 0 .854.005 1.131.017.27.01.648.033 1.131.065.515.034.981.1 1.366.218.334.103.675.24 1.022.408.449.217.84.534 1.109.974.255.42.37.887.37 1.37 0 1.014.24 2.095.748 3.25a13.065 13.065 0 0 0 2.086 3.276c.222.256.58.592 1.104 1.013.556.447 1.02.844 1.388 1.188a3.4 3.4 0 0 1 .543.631c.142.222.286.53.286.9 0 .86-.516 1.657-1.145 2.343a16.087 16.087 0 0 1-2.187 1.966 56.784 56.784 0 0 0-2.676 2.173c-1.008.862-1.817 1.653-2.437 2.372a10.49 10.49 0 0 0-1.53 2.5c-.454 1.02-.754 1.802-.917 2.36a6.217 6.217 0 0 1-.298.838c-.05.107-.124.25-.23.382-.07.084-.357.428-.864.428-.907 0-1.89-.423-2.89-1.051-1.043-.657-2.092-1.564-3.148-2.698a31.427 31.427 0 0 1-2.98-3.758c-.962-1.415-1.743-2.996-2.346-4.739C6.31 27.995 6 26.271 6 24.586c0-2.05.557-3.953 1.664-5.684 1.102-1.723 2.602-3.084 4.477-4.08Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgLiverAlt;