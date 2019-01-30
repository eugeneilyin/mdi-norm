import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSmokeFree } from './FilledSmokeFree'
import { OutlineSmokeFree } from './OutlineSmokeFree'
import { RoundSmokeFree } from './RoundSmokeFree'
import { SharpSmokeFree } from './SharpSmokeFree'
import { TwoToneSmokeFree } from './TwoToneSmokeFree'

export const SmokeFree = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSmokeFree, OutlineSmokeFree, RoundSmokeFree, SharpSmokeFree, TwoToneSmokeFree)
