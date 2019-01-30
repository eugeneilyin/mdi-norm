import { createThemedIcon } from './utils/createThemedIcon'
import { FilledDeveloperBoard } from './FilledDeveloperBoard'
import { OutlineDeveloperBoard } from './OutlineDeveloperBoard'
import { RoundDeveloperBoard } from './RoundDeveloperBoard'
import { SharpDeveloperBoard } from './SharpDeveloperBoard'
import { TwoToneDeveloperBoard } from './TwoToneDeveloperBoard'

export const DeveloperBoard = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledDeveloperBoard, OutlineDeveloperBoard, RoundDeveloperBoard, SharpDeveloperBoard, TwoToneDeveloperBoard)
