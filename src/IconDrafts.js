import { createThemedIcon } from './utils/createThemedIcon'
import { IconDraftsFilled } from './IconDraftsFilled'
import { IconDraftsOutlined } from './IconDraftsOutlined'
import { IconDraftsRounded } from './IconDraftsRounded'
import { IconDraftsSharp } from './IconDraftsSharp'
import { IconDraftsTwoTone } from './IconDraftsTwoTone'

export const IconDrafts = /*#__PURE__*/ props =>
  createThemedIcon(props, IconDraftsFilled, IconDraftsOutlined, IconDraftsRounded, IconDraftsSharp, IconDraftsTwoTone)
