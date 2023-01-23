import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgDoctorMale = (passedProps: SvgProps) => {
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
        d="m16.649 9.326.055-.24c.105-.446.277-1.102.632-1.748.362-.658.923-1.325 1.803-1.764.877-.437 1.976-.6 3.335-.42 1.5.2 4.513.696 7.175 2.05 2.677 1.362 5.185 3.705 5.185 7.607 0 2.016-.78 4.179-1.536 5.589-.363.678-.794 1.326-1.226 1.675-.099.08-.24.18-.415.25a8.004 8.004 0 0 1-15.05.738l-.024.004-.355-.431L17 22l-.772.636-.001-.002-.002-.002-.005-.007-.017-.02a6.849 6.849 0 0 1-.247-.327 13.446 13.446 0 0 1-.61-.924c-.47-.778-1.037-1.886-1.4-3.179-.362-1.293-.528-2.809-.148-4.373.37-1.522 1.243-3.02 2.824-4.358l.027-.118Zm1.68 12.638a6.003 6.003 0 0 0 11.564-.833l.113.038a2.43 2.43 0 0 1-.006-.17c0-1.655-.23-2.81-.444-3.53a6.71 6.71 0 0 0-.139-.416l-.041.002h-.04a11.485 11.485 0 0 1-2.232-.17c-1.717-.29-4.042-1.014-6.78-2.691-.06.134-.12.285-.18.453-.196.555-.357 1.214-.496 1.91-.123.613-.224 1.23-.32 1.808l-.037.228c-.103.62-.206 1.229-.326 1.67-.21.766-.424 1.31-.636 1.7Zm-1.4-1.863c-.377-.656-.789-1.51-1.056-2.465-.299-1.066-.409-2.22-.131-3.361.27-1.11.923-2.277 2.266-3.383.242-.164.352-.384.382-.443v-.001a1.91 1.91 0 0 0 .126-.337c.032-.114.067-.27.1-.41l.035-.157c.095-.403.218-.842.438-1.243.214-.388.507-.72.943-.937.438-.219 1.116-.369 2.178-.227 1.453.193 4.186.656 6.532 1.85 2.33 1.185 4.092 2.979 4.092 5.824 0 1.31-.44 2.8-.97 3.975-.1-.766-.244-1.392-.392-1.888a7.656 7.656 0 0 0-.385-1.037 4.507 4.507 0 0 0-.19-.365l-.017-.027-.006-.01-.003-.005-.002-.003-.84.54.84-.54-.37-.574-.662.133-.014.003-.097.013a5.093 5.093 0 0 1-.448.03 9.487 9.487 0 0 1-1.84-.144c-1.613-.272-3.983-1.013-6.862-2.93l-.7-.467-.579.61c-.477.502-.801 1.187-1.038 1.854-.242.685-.425 1.45-.572 2.184-.13.65-.238 1.303-.332 1.88l-.038.224c-.107.651-.194 1.148-.282 1.47-.036.132-.071.254-.106.364Zm13.881.422.004-.002-.004.002Zm.004-.002Zm0 0-.004.002.003-.002Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.914 28.855c-.212-.422-.473-.943-.914-.842-5.404 1.23-11 4.781-11 8.557V42h36v-5.43c0-2.974-3.472-5.809-7.587-7.48l-.005-.01a1.461 1.461 0 0 0-.014-.027l-.033.016c-1.093-.44-2.231-.8-3.361-1.056-.503-.115-1.023.577-1.25 1.01H18c-.028-.052-.056-.11-.086-.168Zm13.489 1.32c.437.121.872.257 1.301.407.012.342-.014.746-.07 1.158a8.092 8.092 0 0 1-.272 1.26H31a1 1 0 0 0-.894.553l-1 2A1 1 0 0 0 29 36v2a1 1 0 0 0 1 1h2v-2h-1v-.764L31.618 35h2.764L35 36.236V37h-1v2h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-.106-.447l-1-2A1 1 0 0 0 35 33h-.566a10.66 10.66 0 0 0 .248-1.609c.975.461 1.881.99 2.666 1.562C39.27 34.355 40 35.667 40 36.57V40H8v-3.43c0-.903.73-2.215 2.652-3.617.966-.705 2.119-1.343 3.355-1.871.013.31.043.624.084.928.069.5.172.998.297 1.426l.008.028a3 3 0 1 0 1.956-.444 8.092 8.092 0 0 1-.28-1.28 7.01 7.01 0 0 1-.069-1.171c.003-.084.009-.158.015-.224.12-.037.24-.073.36-.107l.415.786h14.164l.446-.848ZM16 37.016c.538 0 1-.44 1-1.015 0-.574-.462-1.015-1-1.015s-1 .44-1 1.015c0 .574.462 1.015 1 1.015Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgDoctorMale;
