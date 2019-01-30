import { createThemedIcon } from './utils/createThemedIcon'
import { FilledExitToApp } from './FilledExitToApp'
import { OutlineExitToApp } from './OutlineExitToApp'
import { RoundExitToApp } from './RoundExitToApp'
import { SharpExitToApp } from './SharpExitToApp'
import { TwoToneExitToApp } from './TwoToneExitToApp'

export const ExitToApp = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledExitToApp, OutlineExitToApp, RoundExitToApp, SharpExitToApp, TwoToneExitToApp)
