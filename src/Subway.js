import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSubway } from './FilledSubway'
import { OutlineSubway } from './OutlineSubway'
import { RoundSubway } from './RoundSubway'
import { SharpSubway } from './SharpSubway'
import { TwoToneSubway } from './TwoToneSubway'

export const Subway = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSubway, OutlineSubway, RoundSubway, SharpSubway, TwoToneSubway)
