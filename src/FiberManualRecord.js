import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFiberManualRecord } from './FilledFiberManualRecord'
import { OutlineFiberManualRecord } from './OutlineFiberManualRecord'
import { RoundFiberManualRecord } from './RoundFiberManualRecord'
import { SharpFiberManualRecord } from './SharpFiberManualRecord'
import { TwoToneFiberManualRecord } from './TwoToneFiberManualRecord'

export const FiberManualRecord = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFiberManualRecord, OutlineFiberManualRecord, RoundFiberManualRecord, SharpFiberManualRecord, TwoToneFiberManualRecord)
