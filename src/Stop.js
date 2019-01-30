import { createThemedIcon } from './utils/createThemedIcon'
import { FilledStop } from './FilledStop'
import { OutlineStop } from './OutlineStop'
import { RoundStop } from './RoundStop'
import { SharpStop } from './SharpStop'
import { TwoToneStop } from './TwoToneStop'

export const Stop = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledStop, OutlineStop, RoundStop, SharpStop, TwoToneStop)
