import { createThemedIcon } from './utils/createThemedIcon'
import { FilledMergeType } from './FilledMergeType'
import { OutlineMergeType } from './OutlineMergeType'
import { RoundMergeType } from './RoundMergeType'
import { SharpMergeType } from './SharpMergeType'
import { TwoToneMergeType } from './TwoToneMergeType'

export const MergeType = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledMergeType, OutlineMergeType, RoundMergeType, SharpMergeType, TwoToneMergeType)
