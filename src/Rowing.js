import { createThemedIcon } from './utils/createThemedIcon'
import { FilledRowing } from './FilledRowing'
import { OutlineRowing } from './OutlineRowing'
import { RoundRowing } from './RoundRowing'
import { SharpRowing } from './SharpRowing'
import { TwoToneRowing } from './TwoToneRowing'

export const Rowing = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledRowing, OutlineRowing, RoundRowing, SharpRowing, TwoToneRowing)
