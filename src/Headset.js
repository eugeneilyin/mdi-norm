import { createThemedIcon } from './utils/createThemedIcon'
import { FilledHeadset } from './FilledHeadset'
import { OutlineHeadset } from './OutlineHeadset'
import { RoundHeadset } from './RoundHeadset'
import { SharpHeadset } from './SharpHeadset'
import { TwoToneHeadset } from './TwoToneHeadset'

export const Headset = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledHeadset, OutlineHeadset, RoundHeadset, SharpHeadset, TwoToneHeadset)
