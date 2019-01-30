import { createThemedIcon } from './utils/createThemedIcon'
import { FilledAddCircle } from './FilledAddCircle'
import { OutlineAddCircle } from './OutlineAddCircle'
import { RoundAddCircle } from './RoundAddCircle'
import { SharpAddCircle } from './SharpAddCircle'
import { TwoToneAddCircle } from './TwoToneAddCircle'

export const AddCircle = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledAddCircle, OutlineAddCircle, RoundAddCircle, SharpAddCircle, TwoToneAddCircle)
