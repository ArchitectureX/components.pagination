import cx from '@architecturex/utils.cx'
import config from './config'

type Props = {
  color: 'primary' | 'secondary' | 'success' | 'danger' | 'info' | 'warning' | 'light' | 'dark'
}

export const styles = {
  active: 'bg-primary-500 text-white',
  previous: 'bg-white text-primary-500'
}

export const tailwindClasses = cx.extract(styles)
