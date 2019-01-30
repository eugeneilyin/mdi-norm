import { createThemedIcon } from './utils/createThemedIcon'
import { FilledGroupAdd } from './FilledGroupAdd'
import { OutlineGroupAdd } from './OutlineGroupAdd'
import { RoundGroupAdd } from './RoundGroupAdd'
import { SharpGroupAdd } from './SharpGroupAdd'
import { TwoToneGroupAdd } from './TwoToneGroupAdd'

export const GroupAdd = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledGroupAdd, OutlineGroupAdd, RoundGroupAdd, SharpGroupAdd, TwoToneGroupAdd)
