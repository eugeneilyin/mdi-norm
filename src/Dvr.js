import { createThemedIcon } from './utils/createThemedIcon'
import { FilledDvr } from './FilledDvr'
import { OutlineDvr } from './OutlineDvr'
import { RoundDvr } from './RoundDvr'
import { SharpDvr } from './SharpDvr'
import { TwoToneDvr } from './TwoToneDvr'

export const Dvr = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledDvr, OutlineDvr, RoundDvr, SharpDvr, TwoToneDvr)
