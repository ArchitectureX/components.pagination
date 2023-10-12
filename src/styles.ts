import cx from '@architecturex/utils.cx'

export const styles = {
  paginationList: 'flex items-center justify-center mt-4',
  li: 'm-1',
  pageNavLink: (color: string) =>
    `px-4 py-2 ${color} text-white rounded-full hover:bg-blue-700 hover:no-underline`,
  pageNavLinkPge: 'px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 hover:no-underline',
  pageNextLink: 'px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 hover:no-underline',
  pagePreviousLink: 'px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 hover:no-underline',
  primary: 'bg-blue-500',
  secondary: 'bg-gray-500',
  danger: 'bg-red-500',
  warning: 'bg-yellow-500',
  success: 'bg-green-500',
  info: 'bg-blue-600',
  dark: 'bg-gray-800',
  light: 'bg-gray-100'
}

export const tailwindClasses = cx.extract(styles)
