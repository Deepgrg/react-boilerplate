import { tableStyles } from '@/components/functional/Table/Components/table.style'
import { flexRender, HeaderGroup, RowData } from '@tanstack/react-table'

interface ITableHeaderProps<TData> {
  headerGroup: () => HeaderGroup<TData>[]
}

const TableHeader = <TData extends RowData>({
  headerGroup,
}: ITableHeaderProps<TData>) => {
  return (
    <thead className={tableStyles.tableHeaderBaseStyle}>
      {headerGroup().map((headerContent) => (
        <tr key={headerContent.id}>
          {headerContent.headers.map((header) => {
            return (
              <th
                key={header.id}
                colSpan={header.colSpan}
                className={tableStyles.tableHeaderThStyle}
              >
                {header.isPlaceholder ? null : (
                  <button
                    type="button"
                    className={
                      header.column.getCanSort()
                        ? 'cursor-pointer select-none'
                        : ''
                    }
                    onClick={header.column.getToggleSortingHandler()}
                    data-testid="column"
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {{
                      asc: ' 🔼',
                      desc: ' 🔽',
                    }[header.column.getIsSorted() as string] ?? null}
                  </button>
                )}
              </th>
            )
          })}
        </tr>
      ))}
    </thead>
  )
}

export default TableHeader
