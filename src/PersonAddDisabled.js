import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPersonAddDisabled } from './FilledPersonAddDisabled'
import { OutlinePersonAddDisabled } from './OutlinePersonAddDisabled'
import { RoundPersonAddDisabled } from './RoundPersonAddDisabled'
import { SharpPersonAddDisabled } from './SharpPersonAddDisabled'
import { TwoTonePersonAddDisabled } from './TwoTonePersonAddDisabled'

export const PersonAddDisabled = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPersonAddDisabled, OutlinePersonAddDisabled, RoundPersonAddDisabled, SharpPersonAddDisabled, TwoTonePersonAddDisabled)
