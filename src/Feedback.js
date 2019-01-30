import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFeedback } from './FilledFeedback'
import { OutlineFeedback } from './OutlineFeedback'
import { RoundFeedback } from './RoundFeedback'
import { SharpFeedback } from './SharpFeedback'
import { TwoToneFeedback } from './TwoToneFeedback'

export const Feedback = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFeedback, OutlineFeedback, RoundFeedback, SharpFeedback, TwoToneFeedback)
