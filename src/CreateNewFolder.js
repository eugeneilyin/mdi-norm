import { createThemedIcon } from './utils/createThemedIcon'
import { FilledCreateNewFolder } from './FilledCreateNewFolder'
import { OutlineCreateNewFolder } from './OutlineCreateNewFolder'
import { RoundCreateNewFolder } from './RoundCreateNewFolder'
import { SharpCreateNewFolder } from './SharpCreateNewFolder'
import { TwoToneCreateNewFolder } from './TwoToneCreateNewFolder'

export const CreateNewFolder = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledCreateNewFolder, OutlineCreateNewFolder, RoundCreateNewFolder, SharpCreateNewFolder, TwoToneCreateNewFolder)
