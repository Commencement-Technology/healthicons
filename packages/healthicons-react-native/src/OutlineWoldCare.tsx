import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineWoldCare = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M23.952 26h.08c5.523 0 10-4.477 10-10s-4.477-10-10-10h-.08c-5.486.043-9.92 4.504-9.92 10s4.434 9.957 9.92 10Zm8.018-9h-2c-.054.913-.182 1.79-.374 2.615h1.574a7.946 7.946 0 0 0 .8-2.615Zm-2.24 4.615h-.765c-.147.363-.31.708-.484 1.035a8.04 8.04 0 0 0 1.25-1.035Zm-2.197-2c.218-.797.37-1.676.433-2.615h-2.934v2.615h2.501Zm-2.501 2h1.734c-.077.148-.156.29-.238.427-.5.831-1.017 1.345-1.496 1.636v-2.063Zm-2-2V17h-2.998c.063.939.215 1.818.433 2.615h2.565Zm-1.798 2h1.798v2.1c-.496-.283-1.038-.804-1.56-1.673a7.906 7.906 0 0 1-.238-.427Zm-2.83-2A15.688 15.688 0 0 1 18.03 17h-1.936c.116.93.392 1.812.8 2.615h1.51Zm-.07 2h.7c.138.338.288.66.449.966a8.048 8.048 0 0 1-1.15-.966ZM29.97 15a15.667 15.667 0 0 0-.374-2.615h1.574a7.93 7.93 0 0 1 .8 2.615h-2Zm-.24-4.615h-.765c-.147-.363-.31-.708-.484-1.035.451.303.87.65 1.25 1.035Zm-4.698 0h1.734a7.898 7.898 0 0 0-.238-.427c-.5-.832-1.017-1.345-1.496-1.636v2.063Zm2.501 2h-2.501V15h2.934a13.364 13.364 0 0 0-.433-2.615Zm-4.501-4.1v2.1h-1.798c.077-.148.157-.29.238-.427.521-.869 1.064-1.39 1.56-1.674Zm0 4.1h-2.565c-.218.797-.37 1.676-.433 2.615h2.998v-2.615Zm-3.55-2.966c-.16.306-.31.628-.447.966h-.701c.351-.357.736-.68 1.149-.966Zm-1.078 2.966h-1.51a7.946 7.946 0 0 0-.8 2.615h1.936c.054-.914.182-1.79.374-2.615ZM8.73 17c-1.038-.024-2.08.613-2.417 1.605-.084.248-.13.572-.163.867-.035.322-.062.709-.083 1.13A66.45 66.45 0 0 0 6 23.496c-.008 2.018.043 4.118.116 4.769.128 1.14.784 2.202 1.354 3.126l.064.103c.173.28.344.559.512.846.754 1.291 1.574 2.161 2.317 2.95l.017.017c.418.443.805.855 1.17 1.314A1.993 1.993 0 0 0 11 38v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2a2 2 0 0 0-1.86-1.995c-.135-1.136-.31-2.67-.326-3.107-.014-.376-.14-.743-.258-1.022a7.268 7.268 0 0 0-.426-.836 11.468 11.468 0 0 0-.528-.817l-.039-.054-.01-.015-.004-.005-.002-.003-.01-.014-3.244-4.09-.03-.03v-.002l-.004-.004-.024-.026a9.7 9.7 0 0 1-.43-.51 7.282 7.282 0 0 1-.796-1.23c-.228-.468-.66-.917-1.323-.95-.565-.03-1.008.27-1.266.501a3.016 3.016 0 0 0-.387.422l-.045-.602-.005-.066c-.098-1.318-.217-2.913-.604-4.19-.454-1.494-1.463-2.326-2.65-2.354Zm10.012 13.74.805-.594-.805.593Zm.383 5.26c-.13-1.1-.292-2.537-.31-3.029a.48.48 0 0 0-.019-.087 1.983 1.983 0 0 0-.083-.233 5.308 5.308 0 0 0-.309-.6 9.406 9.406 0 0 0-.433-.67l-.026-.037-3.168-3.994-.018-.02a11.761 11.761 0 0 1-.527-.626 10.269 10.269 0 0 1-.741-1.073l-.007.011c-.09.167-.14.32-.155.42-.055.354-.027.598.001.73a.83.83 0 0 0 .035.124v.003l1.832 3.638-1.701 1.039-.025-.034-.069-.095a123.131 123.131 0 0 1-1.06-1.485c-.607-.864-1.333-1.924-1.691-2.56-.268-.475-.392-1.104-.471-1.673a32.688 32.688 0 0 1-.185-1.968l-.002-.022c-.104-1.398-.212-2.78-.528-3.823-.138-.455-.316-.684-.444-.795a.52.52 0 0 0-.338-.14c-.273-.007-.454.182-.477.25-.002.006-.011.04-.024.114a5.18 5.18 0 0 0-.044.323c-.029.268-.054.612-.074 1.014a64.52 64.52 0 0 0-.063 2.802c-.009 2.039.046 4.022.104 4.538.072.645.474 1.334 1.132 2.402l.003.005c.17.276.353.573.534.883.633 1.084 1.315 1.811 2.062 2.603l.017.018c.556.59 1.16 1.23 1.73 2.047h5.542ZM13.8 25.246s-.004.001-.011.007a.053.053 0 0 0 .011-.007ZM21 40v-2h-8v2h8Zm20.687-21.395c-.338-.992-1.379-1.629-2.417-1.604-1.186.028-2.195.86-2.649 2.354-.387 1.277-.506 2.872-.604 4.19l-.005.066-.045.602c-.12-.157-.25-.3-.387-.422-.258-.23-.7-.53-1.266-.502-.663.034-1.095.483-1.323.95a7.295 7.295 0 0 1-.797 1.23 9.61 9.61 0 0 1-.43.511l-.023.026-.004.005-.03.031-3.243 4.09-.011.014-.002.003-.003.005-.011.015a11.328 11.328 0 0 0-.567.87 7.284 7.284 0 0 0-.427.837c-.117.279-.243.646-.257 1.022-.016.437-.19 1.971-.326 3.107A2 2 0 0 0 25 38v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2a2 2 0 0 0-.551-1.38c.366-.458.752-.87 1.17-1.313l.017-.018c.743-.788 1.563-1.658 2.317-2.949.168-.287.34-.565.512-.846l.064-.103c.57-.924 1.226-1.986 1.354-3.126.073-.651.124-2.751.116-4.769a66.478 66.478 0 0 0-.066-2.894 20.044 20.044 0 0 0-.083-1.13c-.032-.295-.078-.62-.163-.867ZM29.258 30.74l-.805-.593.805.593Zm5.16 5.26c.57-.817 1.173-1.457 1.73-2.047l.016-.018c.747-.792 1.43-1.52 2.062-2.603.18-.31.363-.606.534-.883l.003-.005c.659-1.068 1.06-1.757 1.132-2.402.058-.516.112-2.499.104-4.538-.004-1.006-.023-2-.063-2.802-.02-.402-.045-.746-.074-1.014a5.2 5.2 0 0 0-.044-.323 1.206 1.206 0 0 0-.024-.114c-.023-.068-.204-.257-.476-.25a.52.52 0 0 0-.339.14c-.128.11-.306.34-.444.795-.316 1.042-.424 2.425-.528 3.823l-.002.022c-.05.684-.102 1.374-.185 1.968-.078.569-.203 1.198-.47 1.674-.359.635-1.085 1.695-1.692 2.56a123.983 123.983 0 0 1-1.06 1.484l-.07.095-.024.034-1.701-1.04 1.831-3.637.001-.003a.836.836 0 0 0 .035-.124c.028-.132.056-.376.001-.73a1.382 1.382 0 0 0-.155-.42l-.007-.011c-.246.415-.517.787-.74 1.072a11.681 11.681 0 0 1-.528.627l-.019.02-3.167 3.994-.026.037a9.467 9.467 0 0 0-.433.67c-.12.204-.23.413-.309.6-.039.093-.066.17-.083.232a.499.499 0 0 0-.019.088c-.018.492-.18 1.93-.31 3.029h5.542ZM34.2 25.246s.004.001.011.007a.057.057 0 0 1-.011-.007ZM27 40v-2h8v2h-8Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineWoldCare);
export default ForwardRef;
