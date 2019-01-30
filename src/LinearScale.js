import { createThemedIcon } from './utils/createThemedIcon'
import { FilledLinearScale } from './FilledLinearScale'
import { OutlineLinearScale } from './OutlineLinearScale'
import { RoundLinearScale } from './RoundLinearScale'
import { SharpLinearScale } from './SharpLinearScale'
import { TwoToneLinearScale } from './TwoToneLinearScale'

export const LinearScale = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledLinearScale, OutlineLinearScale, RoundLinearScale, SharpLinearScale, TwoToneLinearScale)
