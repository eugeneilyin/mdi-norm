import { createThemedIcon } from './utils/createThemedIcon'
import { FilledTv } from './FilledTv'
import { OutlineTv } from './OutlineTv'
import { RoundTv } from './RoundTv'
import { SharpTv } from './SharpTv'
import { TwoToneTv } from './TwoToneTv'

export const Tv = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledTv, OutlineTv, RoundTv, SharpTv, TwoToneTv)
