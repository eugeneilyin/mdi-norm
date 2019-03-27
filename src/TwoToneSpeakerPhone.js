import React from 'react'
import { Icon } from './Icon'
import { qa, su, sv } from './fragments'

export const TwoToneSpeakerPhone = /*#__PURE__*/ props => <Icon {...props}>
  <path opacity=".3" d="M9 12h6v8H9z"/><path d={sv + su + "m7.86 2.94" + qa}/>
</Icon>
