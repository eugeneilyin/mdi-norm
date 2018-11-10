import { createThemedIcon } from './utils/createThemedIcon'
import { IconSubscriptionsFilled } from './IconSubscriptionsFilled'
import { IconSubscriptionsOutlined } from './IconSubscriptionsOutlined'
import { IconSubscriptionsRounded } from './IconSubscriptionsRounded'
import { IconSubscriptionsSharp } from './IconSubscriptionsSharp'
import { IconSubscriptionsTwoTone } from './IconSubscriptionsTwoTone'

export const IconSubscriptions = /*#__PURE__*/ props =>
  createThemedIcon(props, IconSubscriptionsFilled, IconSubscriptionsOutlined, IconSubscriptionsRounded, IconSubscriptionsSharp, IconSubscriptionsTwoTone)
