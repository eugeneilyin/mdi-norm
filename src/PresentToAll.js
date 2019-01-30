import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPresentToAll } from './FilledPresentToAll'
import { OutlinePresentToAll } from './OutlinePresentToAll'
import { RoundPresentToAll } from './RoundPresentToAll'
import { SharpPresentToAll } from './SharpPresentToAll'
import { TwoTonePresentToAll } from './TwoTonePresentToAll'

export const PresentToAll = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPresentToAll, OutlinePresentToAll, RoundPresentToAll, SharpPresentToAll, TwoTonePresentToAll)
