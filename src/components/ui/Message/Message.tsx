import classnames from 'classnames/bind'
import styles from './Message.module.css'

type Props = {
  text: string
  variant?: 'loading' | 'error'
}

const cn = classnames.bind(styles)

export const Message = ({ text, variant }: Props) => {
  return (
    <div
      className={cn({
        message: true,
        error: variant === 'error',
        loading: variant === 'loading'
      })}
    >
      {text}
    </div>
  )
}
