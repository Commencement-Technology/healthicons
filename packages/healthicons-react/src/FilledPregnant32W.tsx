import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledPregnant32W = (
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
        d="M16.4 40.317a1 1 0 0 0 .844-1.813 16 16 0 0 1-3.208-27.023l.413.533c.116.149.229.293.335.432.419.545.758 1.018.985 1.449.228.434.287.724.268.922-.015.156-.088.38-.45.678l-.747.615c-.59.485-.96 1.1-1.063 1.775-.101.67.076 1.316.432 1.838.714 1.047 2.113 1.577 3.607 1.18.133-.036.23-.057.299-.07.04.066.09.153.162.28l.574 1.273-3.244 1.061a2 2 0 1 0 1.244 3.802l1.732-.567 1.502 3.443a2 2 0 0 0 1.733 1.198c3.077.154 5.456-.974 6.954-2.572.736-.784 1.265-1.69 1.542-2.61.268-.89.347-1.965-.076-2.956a2 2 0 0 0-2.133-1.193l-1.48.22-.726-2.226a2 2 0 1 0-3.802 1.241l1.25 3.83a2 2 0 0 0 2.04 1.376c-.518.39-1.234.724-2.178.85l-1.687-3.867a2.01 2.01 0 0 0-.109-.214l-1.35-2.993-.042-.074c-.098-.174-.21-.373-.329-.54a1.855 1.855 0 0 0-.626-.58c-.602-.326-1.264-.179-1.765-.045-.756.201-1.25-.095-1.44-.374a.57.57 0 0 1-.106-.412c.018-.122.093-.314.355-.53l.748-.614c.683-.562 1.095-1.244 1.17-2.036.07-.75-.178-1.449-.49-2.04-.312-.596-.745-1.186-1.168-1.737l-.371-.478-.322-.414a15.998 15.998 0 0 1 20.115 2.85 16 16 0 0 1 2.712 17.57 1 1 0 1 0 1.813.845A18 18 0 1 0 16.4 40.317Z"
      />
      <path
        fill="#333"
        d="M29.787 21.418a3.819 3.819 0 1 0 3.547-6.764 3.819 3.819 0 0 0-3.547 6.764Zm5.423 14.714a.8.8 0 0 1 1.58-.264l.463 2.785.552-.967a.8.8 0 0 1 1.39 0l.552.967.464-2.785a.8.8 0 0 1 1.578.264l-.833 5a.8.8 0 0 1-1.484.265l-.972-1.701-.972 1.7a.8.8 0 0 1-1.484-.264l-.833-5Zm-10.164.854c.124.102.154.2.154.264 0 .065-.03.163-.154.264a.92.92 0 0 1-.579.186h-1.021a.8.8 0 0 0 0 1.6h1.021a.92.92 0 0 1 .579.186c.124.102.154.2.154.264 0 .065-.03.163-.154.264a.92.92 0 0 1-.579.186h-1.021c-.416 0-.653-.215-.712-.351a.8.8 0 1 0-1.468.636c.362.834 1.26 1.315 2.18 1.315h1.021c1.128 0 2.333-.773 2.333-2.05 0-.499-.184-.921-.475-1.25.291-.329.475-.751.475-1.25 0-1.277-1.205-2.05-2.333-2.05h-1.021c-.92 0-1.818.48-2.18 1.315a.8.8 0 0 0 1.468.636c.06-.136.296-.351.711-.351h1.022a.92.92 0 0 1 .579.186Zm7.002-.006c.12.1.152.198.152.27 0 .076-.038.186-.178.29a1.044 1.044 0 0 0-.024.019l-3.5 2.818A.8.8 0 0 0 29 41.8h4a.8.8 0 0 0 0-1.6h-1.73l1.722-1.387c.466-.353.808-.905.808-1.563 0-1.263-1.172-2.05-2.3-2.05h-1c-.915 0-1.798.489-2.151 1.321a.8.8 0 1 0 1.473.625c.059-.14.287-.346.678-.346h1a.86.86 0 0 1 .548.18Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFilledPregnant32W);
export default ForwardRef;
