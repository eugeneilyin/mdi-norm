import { createThemedIcon } from './utils/createThemedIcon'
import { FilledDepartureBoard } from './FilledDepartureBoard'
import { OutlineDepartureBoard } from './OutlineDepartureBoard'
import { RoundDepartureBoard } from './RoundDepartureBoard'
import { SharpDepartureBoard } from './SharpDepartureBoard'
import { TwoToneDepartureBoard } from './TwoToneDepartureBoard'

export const DepartureBoard = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledDepartureBoard, OutlineDepartureBoard, RoundDepartureBoard, SharpDepartureBoard, TwoToneDepartureBoard)
