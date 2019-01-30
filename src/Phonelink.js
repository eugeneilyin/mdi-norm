import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPhonelink } from './FilledPhonelink'
import { OutlinePhonelink } from './OutlinePhonelink'
import { RoundPhonelink } from './RoundPhonelink'
import { SharpPhonelink } from './SharpPhonelink'
import { TwoTonePhonelink } from './TwoTonePhonelink'

export const Phonelink = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPhonelink, OutlinePhonelink, RoundPhonelink, SharpPhonelink, TwoTonePhonelink)
