import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPolymer } from './FilledPolymer'
import { OutlinePolymer } from './OutlinePolymer'
import { RoundPolymer } from './RoundPolymer'
import { SharpPolymer } from './SharpPolymer'
import { TwoTonePolymer } from './TwoTonePolymer'

export const Polymer = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPolymer, OutlinePolymer, RoundPolymer, SharpPolymer, TwoTonePolymer)
