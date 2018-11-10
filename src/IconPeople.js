import { createThemedIcon } from './utils/createThemedIcon'
import { IconPeopleFilled } from './IconPeopleFilled'
import { IconPeopleOutlined } from './IconPeopleOutlined'
import { IconPeopleRounded } from './IconPeopleRounded'
import { IconPeopleSharp } from './IconPeopleSharp'
import { IconPeopleTwoTone } from './IconPeopleTwoTone'

export const IconPeople = /*#__PURE__*/ props =>
  createThemedIcon(props, IconPeopleFilled, IconPeopleOutlined, IconPeopleRounded, IconPeopleSharp, IconPeopleTwoTone)
