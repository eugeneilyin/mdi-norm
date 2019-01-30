import { createThemedIcon } from './utils/createThemedIcon'
import { FilledLocalLaundryService } from './FilledLocalLaundryService'
import { OutlineLocalLaundryService } from './OutlineLocalLaundryService'
import { RoundLocalLaundryService } from './RoundLocalLaundryService'
import { SharpLocalLaundryService } from './SharpLocalLaundryService'
import { TwoToneLocalLaundryService } from './TwoToneLocalLaundryService'

export const LocalLaundryService = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledLocalLaundryService, OutlineLocalLaundryService, RoundLocalLaundryService, SharpLocalLaundryService, TwoToneLocalLaundryService)
