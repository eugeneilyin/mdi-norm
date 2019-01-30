import { createThemedIcon } from './utils/createThemedIcon'
import { FilledWork } from './FilledWork'
import { OutlineWork } from './OutlineWork'
import { RoundWork } from './RoundWork'
import { SharpWork } from './SharpWork'
import { TwoToneWork } from './TwoToneWork'

export const Work = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledWork, OutlineWork, RoundWork, SharpWork, TwoToneWork)
