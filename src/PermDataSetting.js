import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPermDataSetting } from './FilledPermDataSetting'
import { OutlinePermDataSetting } from './OutlinePermDataSetting'
import { RoundPermDataSetting } from './RoundPermDataSetting'
import { SharpPermDataSetting } from './SharpPermDataSetting'
import { TwoTonePermDataSetting } from './TwoTonePermDataSetting'

export const PermDataSetting = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPermDataSetting, OutlinePermDataSetting, RoundPermDataSetting, SharpPermDataSetting, TwoTonePermDataSetting)
