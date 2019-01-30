import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPersonAdd } from './FilledPersonAdd'
import { OutlinePersonAdd } from './OutlinePersonAdd'
import { RoundPersonAdd } from './RoundPersonAdd'
import { SharpPersonAdd } from './SharpPersonAdd'
import { TwoTonePersonAdd } from './TwoTonePersonAdd'

export const PersonAdd = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPersonAdd, OutlinePersonAdd, RoundPersonAdd, SharpPersonAdd, TwoTonePersonAdd)
