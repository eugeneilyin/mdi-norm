import { createThemedIcon } from './utils/createThemedIcon'
import { IconHealingFilled } from './IconHealingFilled'
import { IconHealingOutlined } from './IconHealingOutlined'
import { IconHealingRounded } from './IconHealingRounded'
import { IconHealingSharp } from './IconHealingSharp'
import { IconHealingTwoTone } from './IconHealingTwoTone'

export const IconHealing = /*#__PURE__*/ props =>
  createThemedIcon(props, IconHealingFilled, IconHealingOutlined, IconHealingRounded, IconHealingSharp, IconHealingTwoTone)
