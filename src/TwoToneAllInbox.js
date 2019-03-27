import React from 'react'
import { Icon } from './Icon'
import { bam, bgt, bil } from './fragments'

export const TwoToneAllInbox = /*#__PURE__*/ props => <Icon {...props}>
  <path d={bam + "m-5 7" + bil + "m-9 2" + bgt}/><path opacity=".3" d={"M8.13 10H5v2h4.4c-.6-.53-1.06-1.22-1.27-2zm6.47 2H19v-2h-3.13c-.21.78-.67 1.47-1.27 2zm-6.38 5.25c-.03-.08-.06-.16-.09-.25H5v2h4.4c-.53-.47-.94-1.07-1.18-1.75zm7.65-.25c-.02.09-.06.17-.09.25-.23.68-.64 1.28-1.18 1.75H19v-2z"}/>
</Icon>
