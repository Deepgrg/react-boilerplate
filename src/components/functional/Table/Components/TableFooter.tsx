import { PaginationState, RowData, Table } from '@tanstack/react-table'
import {
  ArrowLineLeft,
  ArrowLineRight,
  CaretLeft,
  CaretRight,
} from 'phosphor-react'
import {
  getPageNumbers,
  paginationRowOpt,
} from '@/components/functional/Table/Utils/table-utils'
import { useMemo } from 'react'
import { tableStyles } from '@/components/functional/Table/Components/table.style'
import { Box, Button, Flexbox, Text } from '@/components/ui'

interface ITableFooterProps<TData> {
  table: Table<TData>
  pagination?: PaginationState
  paginationServer?: boolean
  paginationRowsPerPageOptions?: Array<number>
}

const TableFooter = <TData extends RowData>({
  table,
  pagination,
  paginationServer,
  paginationRowsPerPageOptions = paginationRowOpt,
}: ITableFooterProps<TData>) => {
  const currentPage = table.getState().pagination.pageIndex + 1
  const pageSize = paginationServer
    ? pagination?.pageSize || 10
    : table.getState().pagination.pageSize
  const total = paginationServer
    ? table.getPageCount() * (pagination?.pageSize || 10)
    : table.getPrePaginationRowModel().rows.length

  const pageNumbers = getPageNumbers({
    currentPage,
    pageSize,
    total,
  })

  const handleDotPageChange = (i: number) => {
    const isSecondlastIdx = pageNumbers[pageNumbers.length - 2] === '...'
    const pageIndex = isSecondlastIdx
      ? (pageNumbers[pageNumbers.length - 1] as number) - 2
      : i
    table.setPageIndex(pageIndex)
  }
const pagesStartEndData = useMemo(() =>{
  const page = currentPage -1 
  return {
    startPage : page * pageSize + 1,
    endPage:page * pageSize + table.getRowModel().rows.length
  }
},[currentPage, pageSize, table]);

  return (
    <Box className={tableStyles.tableFooterStyle}>
     
     <Flexbox align='center'>
        <Text variant="h6" color="text-gray-56">View</Text>
        <select
          className={tableStyles.tableFooterCountStyle}
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value))
          }}
        >
          {paginationRowsPerPageOptions.map((pageSizeOpt) => (
            <option key={pageSizeOpt} value={pageSizeOpt}>
              {pageSizeOpt}
            </option>
          ))}
        </select>
        <Text variant="h6" color="text-gray-56">per page</Text>

      </Flexbox>

        <Box className="flex items-center justify-items-center">
          <Text className="flex items-center gap-1 mr-2">
            {`${pagesStartEndData?.startPage} - ${pagesStartEndData?.endPage} of ${total}`}
          </Text>
          <Button
            type="button"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
            btnType="ghost"
            size="small"
            variant='primary'
            className={
              !table.getCanPreviousPage()
                ? tableStyles.tableFooterButtonNotAllowedStyle
                : tableStyles.tableFooterButtonStyle
            }
          >
            <ArrowLineLeft size={24} className="text-gray-600  " />
          </Button>
          <Button
            type="button"
            onClick={() => table.previousPage()}
            btnType="ghost"
            size="small"
            variant='primary'
            className={
              !table.getCanPreviousPage()
                ?tableStyles.tableFooterButtonNotAllowedStyle
                : tableStyles.tableFooterButtonStyle
            }
          >
            <CaretLeft size={24} className="text-gray-600 " />
          </Button>

          {/* <div className="mx-4 flex"> */}
            {pageNumbers.map((pageNumber, i) =>
              pageNumber === '...' ? (
                <Button
                  type="button"
                  btnType="ghost"
                  size='small'
                  onClick={() => {
                    handleDotPageChange(i)
                  }}
                  key={pageNumber}
                 
                >
                  &hellip;
                </Button>
              ) : (
                <div key={pageNumber}>
                  {pageNumber === table.getState().pagination.pageIndex + 1 ? (
                    <Button
                      type="button"
                      btnType='ghost'
                      size='small'
                      variant='primary'
                      className="bg-blue-600 py-1 text-white rounded cursor-pointer hover:bg-blue-600"
                      // className="bg-blue-600 text-gray-600"
                    >
                      {pageNumber}
                    </Button>
                  ) : (
                    <Button
                      type="button"
                      size='small'
                      variant='primary'
                      className={tableStyles.tableFooterButtonStyle}
                      btnType="ghost"
                      onClick={() =>
                        table.setPageIndex((pageNumber as number) - 1)
                      }
                    >
                      {pageNumber}
                    </Button>
                  )}
                </div>
              )
            )}
          {/* </div> */}
          <Button
            type="button"
            btnType="ghost"
            size='small'
            variant='primary'
            onClick={() => table.nextPage()}
            className={
              !table.getCanNextPage()
                ? 'cursor-not-allowed mr-2 '
                : 'cursor-pointer mr-2 '
            }
            disabled={!table.getCanNextPage()}
            data-testid="next-page"
          >
            <CaretRight size={18} className="text-gray-600  " />
          </Button>
          <Button
            type="button"
            btnType="ghost"
            variant='primary'
            size='small'
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            className={
              !table.getCanNextPage() ? 'cursor-not-allowed' : 'cursor-pointer'
            }
            disabled={!table.getCanNextPage()}
          >
            <ArrowLineRight size={18} className="text-gray-600" />
          </Button>
        </Box>
      
    </Box>
  )
}

export default TableFooter
