import { ILaunchesPast } from '@/services/modules/launches'

interface ILink {
  video?: string
  post?: string
}

export interface IProps {
  data: Array<ILaunchesPast>
}

const youtebePrefix = {
  video: id => `https://www.youtube.com/embed/${id}`,
  post: id => `https://i.ytimg.com/vi/${id}/sddefault.jpg`,
}

export const getLinks = (link: string): ILink => {
  const id = link.includes('watch') ? link.match(/v=([^&]+)/i)[1] : link.split('/').slice(-1)[0]

  return {
    video: youtebePrefix.video(id),
    post: youtebePrefix.post(id),
  }
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'open':
      return { visible: true, detail: action.detail }
    case 'close':
      return { visible: false, detail: action.detail }
    default:
      return state
  }
}
