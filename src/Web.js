import { createThemedIcon } from './utils/createThemedIcon'
import { FilledWeb } from './FilledWeb'
import { OutlineWeb } from './OutlineWeb'
import { RoundWeb } from './RoundWeb'
import { SharpWeb } from './SharpWeb'
import { TwoToneWeb } from './TwoToneWeb'

export const Web = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledWeb, OutlineWeb, RoundWeb, SharpWeb, TwoToneWeb)
