import { createThemedIcon } from './utils/createThemedIcon'
import { FilledTonality } from './FilledTonality'
import { OutlineTonality } from './OutlineTonality'
import { RoundTonality } from './RoundTonality'
import { SharpTonality } from './SharpTonality'
import { TwoToneTonality } from './TwoToneTonality'

export const Tonality = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledTonality, OutlineTonality, RoundTonality, SharpTonality, TwoToneTonality)
