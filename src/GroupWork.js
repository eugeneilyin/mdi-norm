import { createThemedIcon } from './utils/createThemedIcon'
import { FilledGroupWork } from './FilledGroupWork'
import { OutlineGroupWork } from './OutlineGroupWork'
import { RoundGroupWork } from './RoundGroupWork'
import { SharpGroupWork } from './SharpGroupWork'
import { TwoToneGroupWork } from './TwoToneGroupWork'

export const GroupWork = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledGroupWork, OutlineGroupWork, RoundGroupWork, SharpGroupWork, TwoToneGroupWork)
