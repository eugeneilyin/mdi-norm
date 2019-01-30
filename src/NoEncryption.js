import { createThemedIcon } from './utils/createThemedIcon'
import { FilledNoEncryption } from './FilledNoEncryption'
import { OutlineNoEncryption } from './OutlineNoEncryption'
import { RoundNoEncryption } from './RoundNoEncryption'
import { SharpNoEncryption } from './SharpNoEncryption'
import { TwoToneNoEncryption } from './TwoToneNoEncryption'

export const NoEncryption = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledNoEncryption, OutlineNoEncryption, RoundNoEncryption, SharpNoEncryption, TwoToneNoEncryption)
