import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineAnimalCow = (
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
        d="M28 29h-2c0 2.762 2.686 5 6 5 1.748 0 3.322-.623 4.419-1.618l-1.876-1.071c-.648.415-1.502.69-2.543.69-2.566 0-4-1.67-4-3Z"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M19.466 12.876c.635-.56 1.157-1.316 1.337-2.038.102-.41.15-1.059-.303-1.583-.463-.537-1.148-.596-1.687-.528a10.039 10.039 0 0 1-1.044.076c-.31.01-.68.023-1.088.155-.425.138-.827.38-1.308.735a7.816 7.816 0 0 0-.887.759C12.857 9.292 10.76 8.839 7.469 9a1.5 1.5 0 0 0 .03 3h1.438c.086.059.168.116.245.171l-2.27 2.84a3 3 0 0 0-2.635 3.822l.29 1A3 3 0 0 0 7.447 22h3.122a1 1 0 0 1 .603.202l1.943 1.468c.17.128.348.235.532.323 1.157 3.13 2.402 5.796 3.812 7.572l.32 3.85A2 2 0 0 0 19 39h3a1 1 0 0 0 1-1v-8h7.412c1.361 1.266 2.937 2.312 5.155 2.831l.215 2.583A2 2 0 0 0 37 39h3a1 1 0 0 0 1-1V21c0-2.92-.77-4.955-2.037-6.26-1.267-1.304-2.895-1.74-4.328-1.74H21.5c-.75 0-1.423-.046-2.034-.125Zm-8.322-1.697c.04.034.077.068.114.102a1 1 0 0 1 .107 1.363l-3.184 3.98A1 1 0 0 1 7.4 17h-.24a1 1 0 0 0-.961 1.278l.288 1a1 1 0 0 0 .961.722h3.122a3 3 0 0 1 1.808.606l1.943 1.468c.118.088.238.144.357.174a1 1 0 0 1 .691.628c1.248 3.446 2.51 6.094 3.826 7.651a1 1 0 0 1 .232.563l.404 4.84A1 1 0 0 1 19 37h2v-8a1 1 0 0 1 1-1h8.81a1 1 0 0 1 .698.284c1.38 1.343 2.862 2.344 5.158 2.73a1 1 0 0 1 .83.903l.335 4.014A1 1 0 0 1 37 37h2V21c0-2.58-.676-4.046-1.472-4.866-.796-.82-1.85-1.134-2.893-1.134H21.5c-2.29 0-3.97-.383-5.374-.862a1 1 0 0 1 .112-1.924c.683-.147 1.33-.401 1.725-.692a2.914 2.914 0 0 0 .713-.768c-.326.03-.584.039-.792.046h-.003c-.36.013-.465.022-.583.06-.12.04-.319.134-.739.443-.512.377-.896.778-1.12 1.109a1 1 0 0 1-1.514.163c-.691-.653-1.512-1.138-2.78-1.396Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        d="M44 26c0 1.105-.448 2-1 2s-1-.895-1-2 .448-2 1-2 1 .895 1 2Z"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M32.5 15v-2c.055 0 5.137 0 5.213.002 2.017.034 3.656.438 4.773 1.511C43.617 15.6 44 17.166 44 19h-2c0-1.608-.343-2.509-.9-3.044-.572-.55-1.584-.923-3.42-.954h-.224L32.5 15Z"
        clipRule="evenodd"
      />
      <Path fill="#333" d="M42 19h2l-.5 7h-1l-.5-7Z" />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="m25.326 30.483 1.748-.714.757 1.85-1.747.716-.758-1.852Zm2.55 3.375 1.059-1.97 1.762.948-1.06 1.97-1.76-.948Zm4.558 1.256-.425-2.196 1.964-.38.424 2.196-1.963.38Zm-2.108-6.83A.96.96 0 0 0 30 29h2c0 .164-.042.511-.35.783a1.042 1.042 0 0 1-.797.253 1.331 1.331 0 0 1-.54-.19l-.003-.002a4.877 4.877 0 0 1-.61-.46 28.254 28.254 0 0 1-1.56-1.474c-1.13-1.137-2.443-2.573-2.968-3.35l1.656-1.12c.407.601 1.594 1.916 2.73 3.06a26.4 26.4 0 0 0 1.44 1.363c.183.155.29.233.331.26a.814.814 0 0 0-.274-.076.959.959 0 0 0-.729.237Zm1.01-.157Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineAnimalCow);
export default ForwardRef;
