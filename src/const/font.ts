import { css, FlattenSimpleInterpolation } from "styled-components"

import { pxToRem } from "src/utils/pxToRem"

export type TextSize = "10px" | "11px" | "12px" | "13px" | "14px" | "16px" | "18px" | "20px" | "25px"

export const fontStyles: Record<TextSize, FlattenSimpleInterpolation> = {
  "10px": css`
    font-size: ${pxToRem(10)};
    line-height: ${pxToRem(14)};
  `,
  "11px": css`
    font-size: ${pxToRem(11)};
    line-height: ${pxToRem(15)};
  `,
  "12px": css`
    font-size: ${pxToRem(12)};
    line-height: ${pxToRem(17)};
  `,
  "13px": css`
    font-size: ${pxToRem(13)};
    line-height: ${pxToRem(20)};
  `,
  "14px": css`
    font-size: ${pxToRem(14)};
    line-height: ${pxToRem(20)};
  `,
  "16px": css`
    font-size: ${pxToRem(16)};
    line-height: ${pxToRem(22)};
  `,
  "18px": css`
    font-size: ${pxToRem(18)};
    line-height: ${pxToRem(22)};
  `,
  "20px": css`
    font-size: ${pxToRem(20)};
    line-height: ${pxToRem(24)};
  `,
  "25px": css`
    font-size: ${pxToRem(25)};
    line-height: ${pxToRem(30)};
  `,
}
