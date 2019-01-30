import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPermIdentity } from './FilledPermIdentity'
import { OutlinePermIdentity } from './OutlinePermIdentity'
import { RoundPermIdentity } from './RoundPermIdentity'
import { SharpPermIdentity } from './SharpPermIdentity'
import { TwoTonePermIdentity } from './TwoTonePermIdentity'

export const PermIdentity = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPermIdentity, OutlinePermIdentity, RoundPermIdentity, SharpPermIdentity, TwoTonePermIdentity)
