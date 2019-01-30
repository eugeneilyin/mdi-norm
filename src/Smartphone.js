import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSmartphone } from './FilledSmartphone'
import { OutlineSmartphone } from './OutlineSmartphone'
import { RoundSmartphone } from './RoundSmartphone'
import { SharpSmartphone } from './SharpSmartphone'
import { TwoToneSmartphone } from './TwoToneSmartphone'

export const Smartphone = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSmartphone, OutlineSmartphone, RoundSmartphone, SharpSmartphone, TwoToneSmartphone)
