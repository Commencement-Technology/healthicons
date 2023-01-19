import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineLymphNodes = (
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
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M11.316 6.051a1 1 0 0 0-.632 1.898c.434.145 1.15.474 1.888.975C11.774 9.391 10.015 10 7 10a1 1 0 1 0 0 2c3.707 0 6.033-.85 7.117-1.713.168.197.323.405.462.625-.49 1.126-.232 2.598.76 3.702.846.94 2.014 1.38 3.066 1.262.034.059.073.136.115.233.149.344.338.946.439 1.918-.08.051-.158.107-.233.168-.853.687-1.21 1.805-1.073 2.997a6.995 6.995 0 0 1-.976.021 19.015 19.015 0 0 1-1.695-.156c-.046-1.464-1.326-2.766-3.062-3.016a3.985 3.985 0 0 0-1.448.053 1.1 1.1 0 0 1-.104-.153C10.223 17.687 10 17.117 10 16a1 1 0 1 0-2 0c0 1.383.277 2.313.632 2.934.029.05.058.098.087.144a2.781 2.781 0 0 0-.431.616A13.843 13.843 0 0 0 6 19.5a1 1 0 1 0 0 2c.83 0 1.57.094 2.13.197.37 1.146 1.496 2.075 2.934 2.282 1.261.182 2.448-.236 3.179-1.013.037.01.076.018.116.024.593.085 1.434.19 2.24.222a8.95 8.95 0 0 0 1.2-.025c.158-.015.325-.038.492-.073.152.268.328.53.53.78 1.494 1.855 3.836 2.472 5.354 1.455.417.268.917.552 1.466.808.419.195.881.38 1.37.526l-.016.029a5.788 5.788 0 0 0-.54 1.331 8.222 8.222 0 0 0-2.536.675 6.96 6.96 0 0 0-1.33.779c-.84-.624-2.05-.839-3.242-.474-1.35.412-2.305 1.454-2.532 2.604-.75.032-1.657-.01-2.596-.098a36.03 36.03 0 0 1-1.691-.201 3.884 3.884 0 0 0-.75-2.024 3.89 3.89 0 0 0-1.655-1.318c.013-.06.028-.12.044-.18.13-.493.32-.88.54-1.099a1 1 0 0 0-1.414-1.414c-.58.58-.89 1.36-1.06 2.001a6.68 6.68 0 0 0-.12.547 2.641 2.641 0 0 0-.229.077c-.273-.506-.662-1.11-1.177-1.625a1 1 0 0 0-1.414 1.414c.393.393.711.912.938 1.365.062.124.115.24.159.34-.413 1.032-.247 2.346.538 3.424 1.138 1.563 3.147 2.038 4.486 1.063.241-.176.444-.387.609-.623.622.092 1.31.179 2.008.245 1.051.099 2.188.155 3.175.086.13.194.285.369.46.524-.341.46-.734.972-1.103 1.424-.252.308-.481.574-.669.772a4.365 4.365 0 0 0-1.668-.625c-2.014-.319-3.856.75-4.116 2.386-.259 1.636 1.164 3.221 3.178 3.54 2.013.32 3.856-.749 4.115-2.385a2.546 2.546 0 0 0-.184-1.41l.011-.012c.269-.27.577-.628.882-1a45.543 45.543 0 0 0 1.456-1.9 3.977 3.977 0 0 0 1.532-.16c1.718-.525 2.795-2.067 2.55-3.553a4.64 4.64 0 0 1 1.09-.666 6.178 6.178 0 0 1 1.588-.467c.158 1.047.678 1.952 1.521 2.483-.065.349-.13.786-.16 1.255-.034.552-.022 1.197.13 1.805.094.374.25.772.51 1.125-.69 1.466.19 3.376 1.999 4.3 1.838.939 3.939.504 4.692-.972a2.44 2.44 0 0 0 .2-.541c.35-.003.793-.025 1.294-.093l.017-.002c.288.265.678.594 1.122.914.573.413 1.293.854 2.03 1.1a1 1 0 1 0 .633-1.898c-.435-.145-.93-.428-1.406-.762a8.021 8.021 0 0 0 1.832-1.076 1 1 0 0 0-1.236-1.572c-1.058.831-2.276 1.18-3.261 1.314a8.05 8.05 0 0 1-1.31.072 3.745 3.745 0 0 0-.152-.27 4.35 4.35 0 0 0-1.726-1.557c-1.087-.556-2.266-.63-3.204-.293a1.54 1.54 0 0 1-.094-.274c-.082-.33-.101-.748-.073-1.196a8.36 8.36 0 0 1 .112-.918c1.419-.115 2.882-1.086 3.756-2.655 1.134-2.038.89-4.388-.487-5.575.124-1.058.401-1.734.657-2.154.832.614 1.965.92 3.16.76 2.223-.297 3.817-2.091 3.56-4.007a3.055 3.055 0 0 0-.142-.6c.437-.342.927-.767 1.388-1.24.73-.746 1.513-1.738 1.78-2.805a1 1 0 1 0-1.94-.486 2.65 2.65 0 0 1-.326.723A2.596 2.596 0 0 1 41 14a1 1 0 1 0-2 0c0 1.072.403 1.982.803 2.592-.244.223-.488.427-.713.605-.83-.601-1.951-.898-3.133-.74-1.522.203-2.748 1.108-3.289 2.274a6.41 6.41 0 0 1-1.664-.56 7.204 7.204 0 0 1-.44-.235c.209-.77.147-1.657-.226-2.492.322-.178.703-.407 1.104-.682.824-.567 1.82-1.393 2.505-2.463.101.067.207.129.317.184.77.39 1.737.498 2.704.231 1.864-.513 3.017-2.224 2.577-3.822-.44-1.597-2.307-2.476-4.17-1.962-1.864.513-3.018 2.224-2.578 3.822.029.103.063.204.103.302l-3.268 3.307c-.513-.562-1.158-.939-1.826-1.085l-.076-.375a36.404 36.404 0 0 1-.129-.663c.962-.377 1.734-1.254 1.97-2.389.364-1.74-.665-3.426-2.298-3.767-1.633-.341-3.251.792-3.615 2.531-.334 1.6.51 3.156 1.92 3.66.055.347.13.716.192 1.026l.056.277a2.57 2.57 0 0 0-.465.354c-.98.936-1.206 2.598-.457 4.052.885 1.719 2.797 2.497 4.27 1.738.083-.043.164-.09.24-.141.205.123.441.256.707.387a8.37 8.37 0 0 0 2.321.755c.016.072.035.143.056.213-.106.12-.214.257-.32.41-.433.624-.82 1.496-1.025 2.703-.9-.032-1.841.297-2.66.92-.656-.085-1.351-.318-2.009-.624-.43-.2-.822-.42-1.15-.627.363-1.274.006-2.887-1.06-4.21-.924-1.15-2.175-1.823-3.354-1.928-.124-1.015-.34-1.745-.565-2.264a4.623 4.623 0 0 0-.182-.375c.955-1.15.821-3.009-.37-4.336-1.038-1.154-2.56-1.554-3.758-1.095-1.419-1.987-3.693-3.111-4.729-3.457Zm15.05 4.371c-.437-.091-.912-.624-.75-1.4.162-.776.81-1.074 1.248-.982.438.091.912.624.75 1.4-.162.776-.81 1.074-1.248.982Zm9.856 8.017c.95-.127 1.601.214 1.949.62.026.04.055.076.086.11.117.166.185.335.205.484.075.555-.429 1.57-1.843 1.76-1.413.189-2.166-.659-2.24-1.214-.074-.555.43-1.57 1.843-1.76Zm-17.419-5.36c-.008-.339-.149-.761-.488-1.139-.34-.377-.744-.563-1.08-.607-.33-.043-.543.048-.667.16-.124.111-.238.313-.23.646.008.338.15.76.489 1.138.34.378.744.563 1.08.607.33.043.542-.048.666-.16.124-.111.238-.313.23-.646Zm17.634-2.293c-.49.135-.93.073-1.237-.071-.301-.142-.43-.334-.475-.495-.044-.16-.031-.392.155-.668.19-.28.536-.56 1.026-.694.489-.135.93-.073 1.236.071.301.142.43.334.475.495.045.16.032.391-.155.667-.189.281-.536.56-1.025.695Zm-7.793 6.59c.078-.33.048-.774-.184-1.226-.233-.45-.577-.733-.89-.86-.309-.126-.538-.091-.686-.015-.148.076-.31.243-.386.566-.079.33-.049.774.184 1.226.232.45.577.733.89.86.309.126.538.091.686.015.148-.076.31-.243.386-.567Zm-17.01 2.644c.503.073.883.306 1.105.56.22.251.262.479.238.644-.024.165-.129.372-.41.55-.285.181-.715.298-1.217.226-.503-.073-.882-.306-1.105-.56-.22-.251-.261-.479-.237-.644.023-.165.128-.372.409-.55.286-.181.715-.298 1.218-.226Zm.701 18.996c.25.278.683.545 1.265.637.582.092 1.078-.027 1.4-.215.319-.184.408-.385.428-.508.02-.123-.004-.342-.25-.616-.249-.278-.683-.544-1.265-.636-.582-.093-1.077.027-1.4.214-.318.184-.408.385-.427.508-.02.124.003.342.25.616Zm7.597-8.08c.485-.149.928-.1 1.238.036.305.134.44.322.488.481.049.16.042.391-.136.672-.181.286-.52.575-1.006.723-.486.148-.928.099-1.238-.037-.305-.133-.44-.322-.489-.481-.049-.16-.042-.391.136-.672.182-.286.521-.574 1.007-.723Zm-9.4.727c.026-.337-.072-.771-.37-1.182-.3-.41-.683-.636-1.013-.714-.323-.077-.544-.008-.68.09-.134.099-.268.288-.294.62-.027.337.07.771.37 1.182.299.41.682.636 1.012.714.324.077.544.008.68-.09.134-.099.268-.288.294-.62Zm21.615 5.818c.541.276.883.674 1.039 1.022.154.344.105.556.053.658-.052.103-.195.267-.564.343-.374.077-.896.034-1.437-.242-.542-.276-.883-.675-1.04-1.023-.154-.343-.105-.555-.052-.658.052-.102.195-.266.564-.342.373-.078.896-.035 1.437.242Zm-9.031-13.833c.303-.245.778-1.426-.4-2.889-1.177-1.462-2.432-1.25-2.736-1.006-.303.244-.778 1.425.4 2.888 1.177 1.462 2.432 1.251 2.736 1.007Zm8.69 5.743c-.939 1.687-2.342 1.782-2.843 1.503-.501-.28-1.16-1.522-.22-3.21.939-1.687 2.342-1.781 2.843-1.503.501.28 1.16 1.523.22 3.21Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineLymphNodes);
export default ForwardRef;
