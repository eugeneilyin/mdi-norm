import { createThemedIcon } from './utils/createThemedIcon'
import { FilledTvOff } from './FilledTvOff'
import { OutlineTvOff } from './OutlineTvOff'
import { RoundTvOff } from './RoundTvOff'
import { SharpTvOff } from './SharpTvOff'
import { TwoToneTvOff } from './TwoToneTvOff'

export const TvOff = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledTvOff, OutlineTvOff, RoundTvOff, SharpTvOff, TwoToneTvOff)
