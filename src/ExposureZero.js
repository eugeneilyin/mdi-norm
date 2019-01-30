import { createThemedIcon } from './utils/createThemedIcon'
import { FilledExposureZero } from './FilledExposureZero'
import { OutlineExposureZero } from './OutlineExposureZero'
import { RoundExposureZero } from './RoundExposureZero'
import { SharpExposureZero } from './SharpExposureZero'
import { TwoToneExposureZero } from './TwoToneExposureZero'

export const ExposureZero = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledExposureZero, OutlineExposureZero, RoundExposureZero, SharpExposureZero, TwoToneExposureZero)
