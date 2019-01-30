import { createThemedIcon } from './utils/createThemedIcon'
import { FilledBorderClear } from './FilledBorderClear'
import { OutlineBorderClear } from './OutlineBorderClear'
import { RoundBorderClear } from './RoundBorderClear'
import { SharpBorderClear } from './SharpBorderClear'
import { TwoToneBorderClear } from './TwoToneBorderClear'

export const BorderClear = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledBorderClear, OutlineBorderClear, RoundBorderClear, SharpBorderClear, TwoToneBorderClear)
