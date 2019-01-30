import { createThemedIcon } from './utils/createThemedIcon'
import { FilledNavigation } from './FilledNavigation'
import { OutlineNavigation } from './OutlineNavigation'
import { RoundNavigation } from './RoundNavigation'
import { SharpNavigation } from './SharpNavigation'
import { TwoToneNavigation } from './TwoToneNavigation'

export const Navigation = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledNavigation, OutlineNavigation, RoundNavigation, SharpNavigation, TwoToneNavigation)
