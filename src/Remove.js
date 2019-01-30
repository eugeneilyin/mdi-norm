import { createThemedIcon } from './utils/createThemedIcon'
import { FilledRemove } from './FilledRemove'
import { OutlineRemove } from './OutlineRemove'
import { RoundRemove } from './RoundRemove'
import { SharpRemove } from './SharpRemove'
import { TwoToneRemove } from './TwoToneRemove'

export const Remove = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledRemove, OutlineRemove, RoundRemove, SharpRemove, TwoToneRemove)
