import { createThemedIcon } from './utils/createThemedIcon'
import { FilledAdd } from './FilledAdd'
import { OutlineAdd } from './OutlineAdd'
import { RoundAdd } from './RoundAdd'
import { SharpAdd } from './SharpAdd'
import { TwoToneAdd } from './TwoToneAdd'

export const Add = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledAdd, OutlineAdd, RoundAdd, SharpAdd, TwoToneAdd)
