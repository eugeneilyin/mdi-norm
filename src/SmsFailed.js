import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSmsFailed } from './FilledSmsFailed'
import { OutlineSmsFailed } from './OutlineSmsFailed'
import { RoundSmsFailed } from './RoundSmsFailed'
import { SharpSmsFailed } from './SharpSmsFailed'
import { TwoToneSmsFailed } from './TwoToneSmsFailed'

export const SmsFailed = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSmsFailed, OutlineSmsFailed, RoundSmsFailed, SharpSmsFailed, TwoToneSmsFailed)
