import { createThemedIcon } from './utils/createThemedIcon'
import { FilledAssistantPhoto } from './FilledAssistantPhoto'
import { OutlineAssistantPhoto } from './OutlineAssistantPhoto'
import { RoundAssistantPhoto } from './RoundAssistantPhoto'
import { SharpAssistantPhoto } from './SharpAssistantPhoto'
import { TwoToneAssistantPhoto } from './TwoToneAssistantPhoto'

export const AssistantPhoto = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledAssistantPhoto, OutlineAssistantPhoto, RoundAssistantPhoto, SharpAssistantPhoto, TwoToneAssistantPhoto)
