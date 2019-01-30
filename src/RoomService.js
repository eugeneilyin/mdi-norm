import { createThemedIcon } from './utils/createThemedIcon'
import { FilledRoomService } from './FilledRoomService'
import { OutlineRoomService } from './OutlineRoomService'
import { RoundRoomService } from './RoundRoomService'
import { SharpRoomService } from './SharpRoomService'
import { TwoToneRoomService } from './TwoToneRoomService'

export const RoomService = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledRoomService, OutlineRoomService, RoundRoomService, SharpRoomService, TwoToneRoomService)
