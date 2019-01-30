import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFormatStrikethrough } from './FilledFormatStrikethrough'
import { OutlineFormatStrikethrough } from './OutlineFormatStrikethrough'
import { RoundFormatStrikethrough } from './RoundFormatStrikethrough'
import { SharpFormatStrikethrough } from './SharpFormatStrikethrough'
import { TwoToneFormatStrikethrough } from './TwoToneFormatStrikethrough'

export const FormatStrikethrough = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFormatStrikethrough, OutlineFormatStrikethrough, RoundFormatStrikethrough, SharpFormatStrikethrough, TwoToneFormatStrikethrough)
