import { createThemedIcon } from './utils/createThemedIcon'
import { FilledNearMe } from './FilledNearMe'
import { OutlineNearMe } from './OutlineNearMe'
import { RoundNearMe } from './RoundNearMe'
import { SharpNearMe } from './SharpNearMe'
import { TwoToneNearMe } from './TwoToneNearMe'

export const NearMe = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledNearMe, OutlineNearMe, RoundNearMe, SharpNearMe, TwoToneNearMe)
