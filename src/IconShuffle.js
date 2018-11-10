import { createThemedIcon } from './utils/createThemedIcon'
import { IconShuffleFilled } from './IconShuffleFilled'
import { IconShuffleOutlined } from './IconShuffleOutlined'
import { IconShuffleRounded } from './IconShuffleRounded'
import { IconShuffleSharp } from './IconShuffleSharp'
import { IconShuffleTwoTone } from './IconShuffleTwoTone'

export const IconShuffle = /*#__PURE__*/ props =>
  createThemedIcon(props, IconShuffleFilled, IconShuffleOutlined, IconShuffleRounded, IconShuffleSharp, IconShuffleTwoTone)
