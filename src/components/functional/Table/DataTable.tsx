import { TableNoDataFound } from '@/components/functional/Table/Components/NoDataFound'
import { tableStyles } from '@/components/functional/Table/Components/table.style'
import TableBody from '@/components/functional/Table/Components/TableBody'
import TableFooter from '@/components/functional/Table/Components/TableFooter'
import TableHeader from '@/components/functional/Table/Components/TableHeader'
import { fuzzyFilter } from '@/components/functional/Table/Utils/table-utils'
import { Box, Flexbox } from '@/components/ui'
import AbsoluteLayout from '@/components/ui/core/Layout/AbsoluteLayout'
import {
  ColumnDef,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  PaginationState,
  RowData,
  RowSelectionState,
  SortingState,
  SortingTableState,
  useReactTable,
} from '@tanstack/react-table'

import * as React from 'react'

interface ITableProps<TData> extends  Partial<SortingTableState> {
  data: TData[]
  columns: ColumnDef<TData>[]
  isLoading: boolean
  paginationServer?: boolean
  paginationRowsPerPageOptions?: number[]
  onPaginationChange?: React.Dispatch<React.SetStateAction<PaginationState>>
  pageCount?: number
  pageIndex?: number
  pageSize?: number
  rowSelection?: RowSelectionState
  setRowSelection?: React.Dispatch<React.SetStateAction<RowSelectionState>>
  setSorting?: React.Dispatch<React.SetStateAction<SortingState>>
}

const Table = <TData extends RowData>({
  data,
  columns,
  isLoading,
  paginationServer,
  pageCount,
  pageIndex,
  pageSize,
  onPaginationChange,
  paginationRowsPerPageOptions,
  rowSelection,
  setRowSelection,
  setSorting,
  sorting,
}: ITableProps<TData>) => {
  const memorizedData = React.useMemo(() => data, [data])
  const memoizedColumns = React.useMemo(() => columns, [columns])
  const pagination = React.useMemo(
    () => ({
      pageIndex: pageIndex || 0,
      pageSize: pageSize || 10,
    }),
    [pageIndex, pageSize]
  )

  const table = useReactTable({
    data: memorizedData,
    columns: memoizedColumns,
    state: {
      sorting: sorting || undefined,
      pagination: pagination || undefined,
      rowSelection: rowSelection || undefined,
    },
    onSortingChange: setSorting || undefined,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onRowSelectionChange: setRowSelection || undefined,
    pageCount: pageCount ?? 0,
    onPaginationChange: onPaginationChange || undefined,
    manualPagination: true,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
  })

  const isNoDataFound = !isLoading && memorizedData?.length === 0

  return (
    <Flexbox direction='column' className={tableStyles.tableWrapper}>
    <Box className={tableStyles.tableBaseStyle}>
    <AbsoluteLayout scrollable>
      <table className={tableStyles.tableMainStyle}>
        <TableHeader headerGroup={table.getHeaderGroups} />
        {isNoDataFound && <TableNoDataFound />}
        {isLoading && <Box>Loading ....</Box>}
        {!isNoDataFound && <TableBody getRowModel={table.getRowModel} />}
      </table>
      </AbsoluteLayout>
      </Box>
      <TableFooter
        table={table}
        paginationServer={paginationServer}
        pagination={pagination}
        paginationRowsPerPageOptions={paginationRowsPerPageOptions}
      />
    </Flexbox>
  )
}

export default Table
