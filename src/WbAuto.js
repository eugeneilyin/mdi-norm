import { createThemedIcon } from './utils/createThemedIcon'
import { FilledWbAuto } from './FilledWbAuto'
import { OutlineWbAuto } from './OutlineWbAuto'
import { RoundWbAuto } from './RoundWbAuto'
import { SharpWbAuto } from './SharpWbAuto'
import { TwoToneWbAuto } from './TwoToneWbAuto'

export const WbAuto = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledWbAuto, OutlineWbAuto, RoundWbAuto, SharpWbAuto, TwoToneWbAuto)
