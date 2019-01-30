import { createThemedIcon } from './utils/createThemedIcon'
import { FilledIso } from './FilledIso'
import { OutlineIso } from './OutlineIso'
import { RoundIso } from './RoundIso'
import { SharpIso } from './SharpIso'
import { TwoToneIso } from './TwoToneIso'

export const Iso = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledIso, OutlineIso, RoundIso, SharpIso, TwoToneIso)
