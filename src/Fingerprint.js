import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFingerprint } from './FilledFingerprint'
import { OutlineFingerprint } from './OutlineFingerprint'
import { RoundFingerprint } from './RoundFingerprint'
import { SharpFingerprint } from './SharpFingerprint'
import { TwoToneFingerprint } from './TwoToneFingerprint'

export const Fingerprint = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFingerprint, OutlineFingerprint, RoundFingerprint, SharpFingerprint, TwoToneFingerprint)
