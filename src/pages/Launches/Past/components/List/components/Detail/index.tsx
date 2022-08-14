import Dialog from '@/components/Dialog'
import { ILaunchesPast } from '@/services/modules/launches'

interface IProps {
  visible: boolean
  onClose(): void
  detail: ILaunchesPast & { video: string }
}

const Detail: React.FC<IProps> = props => {
  const { visible, onClose, detail } = props

  return (
    <Dialog width={1000} title="视频详情" visible={visible} onClose={onClose}>
      <object>
        <embed style={{ width: '100%', height: 400 }} src={detail.video} />
      </object>

      <h4 style={{ marginTop: 16 }}>视频详情:</h4>

      <div>
        <div>ID: {detail.id}</div>
        <div>rocket_name: {detail.rocket.rocket_name}</div>
        <div>rocket_type: {detail.rocket.rocket_type}</div>
        <div>launch_date_local: {new Date(detail.launch_date_local).toLocaleString()}</div>
        <div>video_link: {detail.links.video_link}</div>
        <div>article_link: {detail.links.article_link}</div>
      </div>
    </Dialog>
  )
}

export default Detail
