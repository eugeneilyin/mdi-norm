import { createThemedIcon } from './utils/createThemedIcon'
import { IconViewAgendaFilled } from './IconViewAgendaFilled'
import { IconViewAgendaOutlined } from './IconViewAgendaOutlined'
import { IconViewAgendaRounded } from './IconViewAgendaRounded'
import { IconViewAgendaSharp } from './IconViewAgendaSharp'
import { IconViewAgendaTwoTone } from './IconViewAgendaTwoTone'

export const IconViewAgenda = /*#__PURE__*/ props =>
  createThemedIcon(props, IconViewAgendaFilled, IconViewAgendaOutlined, IconViewAgendaRounded, IconViewAgendaSharp, IconViewAgendaTwoTone)
