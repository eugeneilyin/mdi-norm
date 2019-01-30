import { createThemedIcon } from './utils/createThemedIcon'
import { FilledMenu } from './FilledMenu'
import { OutlineMenu } from './OutlineMenu'
import { RoundMenu } from './RoundMenu'
import { SharpMenu } from './SharpMenu'
import { TwoToneMenu } from './TwoToneMenu'

export const Menu = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledMenu, OutlineMenu, RoundMenu, SharpMenu, TwoToneMenu)
