import { createThemedIcon } from './utils/createThemedIcon'
import { FilledCallToAction } from './FilledCallToAction'
import { OutlineCallToAction } from './OutlineCallToAction'
import { RoundCallToAction } from './RoundCallToAction'
import { SharpCallToAction } from './SharpCallToAction'
import { TwoToneCallToAction } from './TwoToneCallToAction'

export const CallToAction = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledCallToAction, OutlineCallToAction, RoundCallToAction, SharpCallToAction, TwoToneCallToAction)
