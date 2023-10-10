# @architecturex/components.pagination

## Pagination

A flexible and customizable pagination component for React applications.

### Installation

`npm install @architecturex/components.pagination`

### Features

- Supports various color themes: 'primary', 'secondary', 'danger', 'warning', and 'success'.
- Customizable rows per page.
- Adjustable href for pagination links.
- Efficient rendering by only showing necessary pages in the viewport.

### Usage

```javascript
import Pagination from '@architecturex/components.pagination'

function App() {
  return <Pagination href="/page/" page={1} total={50} color="primary" />
}
```

### Props

- **color (Optional):** Set the color theme of the pagination. Choices are 'primary', 'secondary', 'danger', 'warning', or 'success'. Default is 'primary'.
- **page:** Current page number. Starts at 0.
- **total:** Total number of items.
- **rowsPerPage (Optional):** Number of rows/items per page. Default is 10.
- **href:** Base URL for the pagination links.

### Contribution

Feel free to suggest improvements, report issues, or contribute to enhancing this component. Your feedback and contributions are welcome!
