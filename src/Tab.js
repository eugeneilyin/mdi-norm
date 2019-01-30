import { createThemedIcon } from './utils/createThemedIcon'
import { FilledTab } from './FilledTab'
import { OutlineTab } from './OutlineTab'
import { RoundTab } from './RoundTab'
import { SharpTab } from './SharpTab'
import { TwoToneTab } from './TwoToneTab'

export const Tab = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledTab, OutlineTab, RoundTab, SharpTab, TwoToneTab)
