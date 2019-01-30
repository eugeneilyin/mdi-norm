import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSystemUpdate } from './FilledSystemUpdate'
import { OutlineSystemUpdate } from './OutlineSystemUpdate'
import { RoundSystemUpdate } from './RoundSystemUpdate'
import { SharpSystemUpdate } from './SharpSystemUpdate'
import { TwoToneSystemUpdate } from './TwoToneSystemUpdate'

export const SystemUpdate = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSystemUpdate, OutlineSystemUpdate, RoundSystemUpdate, SharpSystemUpdate, TwoToneSystemUpdate)
