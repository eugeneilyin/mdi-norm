import { createThemedIcon } from './utils/createThemedIcon'
import { FilledDeleteSweep } from './FilledDeleteSweep'
import { OutlineDeleteSweep } from './OutlineDeleteSweep'
import { RoundDeleteSweep } from './RoundDeleteSweep'
import { SharpDeleteSweep } from './SharpDeleteSweep'
import { TwoToneDeleteSweep } from './TwoToneDeleteSweep'

export const DeleteSweep = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledDeleteSweep, OutlineDeleteSweep, RoundDeleteSweep, SharpDeleteSweep, TwoToneDeleteSweep)
