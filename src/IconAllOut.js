import { createThemedIcon } from './utils/createThemedIcon'
import { IconAllOutFilled } from './IconAllOutFilled'
import { IconAllOutOutlined } from './IconAllOutOutlined'
import { IconAllOutRounded } from './IconAllOutRounded'
import { IconAllOutSharp } from './IconAllOutSharp'
import { IconAllOutTwoTone } from './IconAllOutTwoTone'

export const IconAllOut = /*#__PURE__*/ props =>
  createThemedIcon(props, IconAllOutFilled, IconAllOutOutlined, IconAllOutRounded, IconAllOutSharp, IconAllOutTwoTone)
