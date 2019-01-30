import { createThemedIcon } from './utils/createThemedIcon'
import { FilledOpenInNew } from './FilledOpenInNew'
import { OutlineOpenInNew } from './OutlineOpenInNew'
import { RoundOpenInNew } from './RoundOpenInNew'
import { SharpOpenInNew } from './SharpOpenInNew'
import { TwoToneOpenInNew } from './TwoToneOpenInNew'

export const OpenInNew = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledOpenInNew, OutlineOpenInNew, RoundOpenInNew, SharpOpenInNew, TwoToneOpenInNew)
