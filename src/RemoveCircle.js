import { createThemedIcon } from './utils/createThemedIcon'
import { FilledRemoveCircle } from './FilledRemoveCircle'
import { OutlineRemoveCircle } from './OutlineRemoveCircle'
import { RoundRemoveCircle } from './RoundRemoveCircle'
import { SharpRemoveCircle } from './SharpRemoveCircle'
import { TwoToneRemoveCircle } from './TwoToneRemoveCircle'

export const RemoveCircle = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledRemoveCircle, OutlineRemoveCircle, RoundRemoveCircle, SharpRemoveCircle, TwoToneRemoveCircle)
