import cx from '@architecturex/utils.cx'

export const styles = {
  paginationList: 'flex items-center justify-center mt-4',
  li: 'm-1',
  pageNavLink: (color: string) => `px-4 py-2 ${color} text-white rounded-full hover:bg-blue-700`,
  pageNavLinkPge: 'px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 hover:no-underline',
  pageNextLink: 'px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 hover:no-underline',
  pagePreviousLink: 'px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 hover:no-underline'
}

export const tailwindClasses = cx.extract(styles)
