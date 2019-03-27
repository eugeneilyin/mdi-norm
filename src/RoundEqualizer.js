import React from 'react'
import { Icon } from './Icon'
import { a, b, d, sq } from './fragments'

export const RoundEqualizer = /*#__PURE__*/ props => <Icon {...props}>
  <path d={"M12 20" + sq + "s-2 .9-2 2v12" + d + "zm-6 0" + a + "v-4" + b + "s-2 .9-2 2v4" + d + "zm10-9v7" + d + "s2-.9 2-2v-7" + b + "s-2 .9-2 2z"}/>
</Icon>
