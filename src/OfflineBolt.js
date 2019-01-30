import { createThemedIcon } from './utils/createThemedIcon'
import { FilledOfflineBolt } from './FilledOfflineBolt'
import { OutlineOfflineBolt } from './OutlineOfflineBolt'
import { RoundOfflineBolt } from './RoundOfflineBolt'
import { SharpOfflineBolt } from './SharpOfflineBolt'
import { TwoToneOfflineBolt } from './TwoToneOfflineBolt'

export const OfflineBolt = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledOfflineBolt, OutlineOfflineBolt, RoundOfflineBolt, SharpOfflineBolt, TwoToneOfflineBolt)
