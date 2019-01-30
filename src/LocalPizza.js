import { createThemedIcon } from './utils/createThemedIcon'
import { FilledLocalPizza } from './FilledLocalPizza'
import { OutlineLocalPizza } from './OutlineLocalPizza'
import { RoundLocalPizza } from './RoundLocalPizza'
import { SharpLocalPizza } from './SharpLocalPizza'
import { TwoToneLocalPizza } from './TwoToneLocalPizza'

export const LocalPizza = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledLocalPizza, OutlineLocalPizza, RoundLocalPizza, SharpLocalPizza, TwoToneLocalPizza)
