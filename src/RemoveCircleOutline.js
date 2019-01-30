import { createThemedIcon } from './utils/createThemedIcon'
import { FilledRemoveCircleOutline } from './FilledRemoveCircleOutline'
import { OutlineRemoveCircleOutline } from './OutlineRemoveCircleOutline'
import { RoundRemoveCircleOutline } from './RoundRemoveCircleOutline'
import { SharpRemoveCircleOutline } from './SharpRemoveCircleOutline'
import { TwoToneRemoveCircleOutline } from './TwoToneRemoveCircleOutline'

export const RemoveCircleOutline = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledRemoveCircleOutline, OutlineRemoveCircleOutline, RoundRemoveCircleOutline, SharpRemoveCircleOutline, TwoToneRemoveCircleOutline)
