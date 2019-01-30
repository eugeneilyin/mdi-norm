import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPages } from './FilledPages'
import { OutlinePages } from './OutlinePages'
import { RoundPages } from './RoundPages'
import { SharpPages } from './SharpPages'
import { TwoTonePages } from './TwoTonePages'

export const Pages = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPages, OutlinePages, RoundPages, SharpPages, TwoTonePages)
