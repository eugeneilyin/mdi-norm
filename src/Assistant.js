import { createThemedIcon } from './utils/createThemedIcon'
import { FilledAssistant } from './FilledAssistant'
import { OutlineAssistant } from './OutlineAssistant'
import { RoundAssistant } from './RoundAssistant'
import { SharpAssistant } from './SharpAssistant'
import { TwoToneAssistant } from './TwoToneAssistant'

export const Assistant = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledAssistant, OutlineAssistant, RoundAssistant, SharpAssistant, TwoToneAssistant)
