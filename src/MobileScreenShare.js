import { createThemedIcon } from './utils/createThemedIcon'
import { FilledMobileScreenShare } from './FilledMobileScreenShare'
import { OutlineMobileScreenShare } from './OutlineMobileScreenShare'
import { RoundMobileScreenShare } from './RoundMobileScreenShare'
import { SharpMobileScreenShare } from './SharpMobileScreenShare'
import { TwoToneMobileScreenShare } from './TwoToneMobileScreenShare'

export const MobileScreenShare = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledMobileScreenShare, OutlineMobileScreenShare, RoundMobileScreenShare, SharpMobileScreenShare, TwoToneMobileScreenShare)
