import { createThemedIcon } from './utils/createThemedIcon'
import { FilledLeakAdd } from './FilledLeakAdd'
import { OutlineLeakAdd } from './OutlineLeakAdd'
import { RoundLeakAdd } from './RoundLeakAdd'
import { SharpLeakAdd } from './SharpLeakAdd'
import { TwoToneLeakAdd } from './TwoToneLeakAdd'

export const LeakAdd = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledLeakAdd, OutlineLeakAdd, RoundLeakAdd, SharpLeakAdd, TwoToneLeakAdd)
