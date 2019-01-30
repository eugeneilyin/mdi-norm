import { createThemedIcon } from './utils/createThemedIcon'
import { FilledTimelapse } from './FilledTimelapse'
import { OutlineTimelapse } from './OutlineTimelapse'
import { RoundTimelapse } from './RoundTimelapse'
import { SharpTimelapse } from './SharpTimelapse'
import { TwoToneTimelapse } from './TwoToneTimelapse'

export const Timelapse = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledTimelapse, OutlineTimelapse, RoundTimelapse, SharpTimelapse, TwoToneTimelapse)
