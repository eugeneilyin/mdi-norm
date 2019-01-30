import { createThemedIcon } from './utils/createThemedIcon'
import { FilledBackspace } from './FilledBackspace'
import { OutlineBackspace } from './OutlineBackspace'
import { RoundBackspace } from './RoundBackspace'
import { SharpBackspace } from './SharpBackspace'
import { TwoToneBackspace } from './TwoToneBackspace'

export const Backspace = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledBackspace, OutlineBackspace, RoundBackspace, SharpBackspace, TwoToneBackspace)
