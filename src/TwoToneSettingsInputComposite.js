import React from 'react'
import { Icon } from './Icon'
import { bu, cc, em, ua, bnk } from './fragments'

export const TwoToneSettingsInputComposite = /*#__PURE__*/ props => <Icon {...props}>
  <path opacity=".3" d={"M3 16" + cc + "v-2H3zm8 0" + cc + "v-2h-2zm8 0" + cc + "v-2h-2z"}/><path d={"M5 2" + bu + "v4H1v10" + ua + "C6.16 18.4 7 17.3 7 16V6H5zm0 14" + em + "v-2h2zm0-4H3V8h2zm8-10" + bu + "v4H9" + bnk + "h-2zm0 14" + em + "v-2h2zm0-4h-2V8h2zm8-6V2" + bu + "v4h-2" + bnk + "zm0 10" + em + "v-2h2zm0-4h-2V8h2z"}/>
</Icon>
