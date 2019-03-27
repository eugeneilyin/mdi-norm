import React from 'react'
import { Icon } from './Icon'
import { cp, cq, qi, blc } from './fragments'

export const TwoToneCasino = /*#__PURE__*/ props => <Icon {...props}>
  <path opacity=".3" d={blc + "M16.5 6" + cp + "S17.33 9 16.5 9 15 8.33 15 7.5 15.67 6 16.5 6zm0 9" + cq + "M12 10.5" + cq + "M7.5 6C8.33 6 9 6.67 9 7.5S8.33 9 7.5 9 6 8.33 6 7.5 6.67 6 7.5 6zm0 9" + cp + "S8.33 18 7.5 18 6 17.33 6 16.5 6.67 15 7.5 15z"}/><path d={qi}/><circle cx="7.5" cy="16.5" r="1.5"/><circle cx="7.5" cy="7.5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="16.5" cy="16.5" r="1.5"/><circle cx="16.5" cy="7.5" r="1.5"/>
</Icon>
