/**
 * @jest-environment jsdom
 */
import { describe, expect, it } from '@jest/globals'
import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/jest-globals'

import Pagination from '../Pagination'

describe('Pagination', () => {
  it('renders active page correctly', () => {
    const { getByText } = render(<Pagination href="/test/" page={2} total={30} />)
    const activePage = getByText('3')
    console.log('ACTIVE PAGE===>', activePage)
    expect(activePage).toHaveClass('active')
  })

  it('renders previous page correctly', () => {
    const { getByText } = render(<Pagination href="/test/" page={2} total={30} />)
    const prevLink = getByText('<')
    expect(prevLink.closest('a')).toHaveAttribute('href', '/test/2')
  })

  it('renders next page correctly', () => {
    const { getByText } = render(<Pagination href="/test/" page={2} total={30} />)
    const nextLink = getByText('>')
    expect(nextLink.closest('a')).toHaveAttribute('href', '/test/4')
  })

  it('does not render pagination if total is less than or equal to maxElementsPerPage', () => {
    const { queryByText } = render(<Pagination href="/test/" page={0} total={10} />)
    expect(queryByText('1')).toBeNull()
    expect(queryByText('2')).toBeNull()
  })
})
