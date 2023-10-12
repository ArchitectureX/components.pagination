import React, { FC, ReactElement, ReactNode } from 'react'

import styles from './styles'
export type Props = {
  color?: 'primary' | 'secondary' | 'danger' | 'warning' | 'success'
  page: number
  total: number
  rowsPerPage?: number
  href: string
}

const Pagination: FC<Props> = ({ href, rowsPerPage, page, total: count }) => {
  const maxElementsPerPage = rowsPerPage || 10
  const increment = 5

  const getCurrentPage = (start: number, end: number): number => (start === 0 ? 1 : start / end + 1)

  const getPageNav = (
    firstPage: number,
    lastPage: number,
    start: number,
    end: number
  ): ReactNode[] => {
    const pageNav: ReactElement[] = []

    for (let i = firstPage; i < lastPage; i += 1) {
      const pge = i + 1
      const next = i * end

      if (start === next) {
        pageNav.push(
          <li key={i} className={styles.li}>
            <a href="#" className={styles.pageNavLink}>
              <span>{pge}</span>
            </a>
          </li>
        )
      } else {
        pageNav.push(
          <li key={i} className={styles.li}>
            <a href={`${href}${pge}`} className={styles.pageNavLinkPge}>
              <span>{pge}</span>
            </a>
          </li>
        )
      }
    }

    return pageNav
  }

  const getPageNext = (currentPage: number, pages: number): ReactNode => {
    if (currentPage <= pages - 1) {
      return (
        <li className={styles.li}>
          <a href={`${href}${currentPage + 1}`} className={styles.pageNextLink}>
            <span>&gt;</span>
          </a>
        </li>
      )
    }

    return null
  }

  const getPagePrevious = (start: number, currentPage: number) => {
    if (start > 0) {
      return (
        <li className={styles.li}>
          <a href={`${href}${currentPage - 1}`} className={styles.pagePreviousLink}>
            <span>&lt;</span>
          </a>
        </li>
      )
    }

    return null
  }

  const getPaginationStart = (pg: number): number => {
    const paginationPage = pg > 0 ? pg : 0
    return paginationPage > 0 ? paginationPage * maxElementsPerPage - maxElementsPerPage : 0
  }

  const buildPagination = (
    total: number,
    end: number,
    start: number,
    elementsPerPage?: number
  ): ReactElement => {
    const limit = elementsPerPage || maxElementsPerPage

    let currentPage: number
    let firstPage: number
    let lastPage: number
    let pageNav: ReactNode
    let pageNext: ReactNode
    let pagePrevious: ReactNode
    let pages: number
    let rest: number

    if (total > end) {
      rest = total % end
      pages = rest === 0 ? total / end : (total - rest) / end + 1
      currentPage = start / end + 1

      if (pages > limit) {
        if (start === 0) {
          firstPage = 0
          lastPage = limit
        }

        if (currentPage < increment) {
          firstPage = 0
          lastPage = currentPage + increment + (increment - currentPage)
        } else {
          firstPage = currentPage - increment - (currentPage + increment - pages)
          lastPage = pages
        }

        if (currentPage >= increment && currentPage <= pages - increment) {
          firstPage = currentPage - increment
          lastPage = currentPage + increment
        }
      } else {
        firstPage = 0
        lastPage = pages
      }

      pageNav = getPageNav(firstPage, lastPage, start, end)
      currentPage = getCurrentPage(start, end)
      pageNext = getPageNext(currentPage, pages)
      pagePrevious = getPagePrevious(start, currentPage)
    }

    return (
      <ul className={styles.paginationList}>
        {pagePrevious}
        {pageNav}
        {pageNext}
      </ul>
    )
  }

  const start = getPaginationStart(page)

  if (count > maxElementsPerPage) {
    return buildPagination(count, maxElementsPerPage, start)
  }

  return null
}

export default Pagination
