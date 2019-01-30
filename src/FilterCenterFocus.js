import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFilterCenterFocus } from './FilledFilterCenterFocus'
import { OutlineFilterCenterFocus } from './OutlineFilterCenterFocus'
import { RoundFilterCenterFocus } from './RoundFilterCenterFocus'
import { SharpFilterCenterFocus } from './SharpFilterCenterFocus'
import { TwoToneFilterCenterFocus } from './TwoToneFilterCenterFocus'

export const FilterCenterFocus = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFilterCenterFocus, OutlineFilterCenterFocus, RoundFilterCenterFocus, SharpFilterCenterFocus, TwoToneFilterCenterFocus)
