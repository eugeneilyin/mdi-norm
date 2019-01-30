import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPool } from './FilledPool'
import { OutlinePool } from './OutlinePool'
import { RoundPool } from './RoundPool'
import { SharpPool } from './SharpPool'
import { TwoTonePool } from './TwoTonePool'

export const Pool = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPool, OutlinePool, RoundPool, SharpPool, TwoTonePool)
