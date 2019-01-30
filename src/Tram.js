import { createThemedIcon } from './utils/createThemedIcon'
import { FilledTram } from './FilledTram'
import { OutlineTram } from './OutlineTram'
import { RoundTram } from './RoundTram'
import { SharpTram } from './SharpTram'
import { TwoToneTram } from './TwoToneTram'

export const Tram = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledTram, OutlineTram, RoundTram, SharpTram, TwoToneTram)
