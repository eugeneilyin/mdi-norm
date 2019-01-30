import { createThemedIcon } from './utils/createThemedIcon'
import { FilledErrorOutline } from './FilledErrorOutline'
import { OutlineErrorOutline } from './OutlineErrorOutline'
import { RoundErrorOutline } from './RoundErrorOutline'
import { SharpErrorOutline } from './SharpErrorOutline'
import { TwoToneErrorOutline } from './TwoToneErrorOutline'

export const ErrorOutline = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledErrorOutline, OutlineErrorOutline, RoundErrorOutline, SharpErrorOutline, TwoToneErrorOutline)
