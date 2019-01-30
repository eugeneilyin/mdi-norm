import { createThemedIcon } from './utils/createThemedIcon'
import { FilledHealing } from './FilledHealing'
import { OutlineHealing } from './OutlineHealing'
import { RoundHealing } from './RoundHealing'
import { SharpHealing } from './SharpHealing'
import { TwoToneHealing } from './TwoToneHealing'

export const Healing = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledHealing, OutlineHealing, RoundHealing, SharpHealing, TwoToneHealing)
