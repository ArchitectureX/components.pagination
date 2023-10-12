import cx from '@architecturex/utils.cx'

export const styles = {
  paginationList: 'flex items-center justify-center mt-4',
  li: 'm-1',
  pageNavLink: 'px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700',
  pageNavLinkPge: 'px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300',
  pageNextLink: 'px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300',
  pagePreviousLink: 'px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300'
}

export const tailwindClasses = cx.extract(styles)
