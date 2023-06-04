import { DataTable } from "@/components/functional/Table"
import { ColumnDef } from "@tanstack/react-table"
import { render, screen } from "@testing-library/react"
import userEvent  from "@testing-library/user-event"

interface Person {
    firstName: string
    lastName: string
    age: number
    visits: number
    status: string
    progress: number
  }
  
  const defaultData: Person[] = [
    {
      firstName: 'tanner',
      lastName: 'linsley',
      age: 24,
      visits: 100,
      status: 'In Relationship',
      progress: 50,
    },
    {
      firstName: 'tandy',
      lastName: 'miller',
      age: 40,
      visits: 40,
      status: 'Single',
      progress: 80,
    },
    {
      firstName: 'joe',
      lastName: 'dirte',
      age: 45,
      visits: 20,
      status: 'Complicated',
      progress: 10,
    },
    {
        firstName: 'tanner1',
        lastName: 'linsley',
        age: 24,
        visits: 100,
        status: 'In Relationship',
        progress: 50,
      },
      {
        firstName: 'tandy',
        lastName: 'miller',
        age: 40,
        visits: 40,
        status: 'Single',
        progress: 80,
      },
      {
        firstName: 'joe',
        lastName: 'dirte',
        age: 45,
        visits: 20,
        status: 'Complicated',
        progress: 10,
      },
      {
        firstName: 'tanner2',
        lastName: 'linsley',
        age: 24,
        visits: 100,
        status: 'In Relationship',
        progress: 50,
      },
      {
        firstName: 'tandy',
        lastName: 'miller',
        age: 40,
        visits: 40,
        status: 'Single',
        progress: 80,
      },
      {
        firstName: 'joe',
        lastName: 'dirte',
        age: 45,
        visits: 20,
        status: 'Complicated',
        progress: 10,
      },
      {
        firstName: 'tanner3',
        lastName: 'linsley',
        age: 24,
        visits: 100,
        status: 'In Relationship',
        progress: 50,
      },
      {
        firstName: 'dinesh',
        lastName: 'miller',
        age: 40,
        visits: 40,
        status: 'Single',
        progress: 80,
      },
      {
        firstName: 'ram',
        lastName: 'dirte',
        age: 45,
        visits: 20,
        status: 'Complicated',
        progress: 1000,
      },
  ]
  
  const defaultColumns: ColumnDef<Person>[] = [
    {
      header: 'Name',
      footer: props => props.column.id,
      columns: [
        {
          accessorKey: 'firstName',
          cell: info => info.getValue(),
          footer: props => props.column.id,
        },
        {
          accessorFn: row => row.lastName,
          id: 'lastName',
          cell: info => info.getValue(),
          header: () => <span>Last Name</span>,
          footer: props => props.column.id,
        },
      ],
    },
    {
      header: 'Info',
      footer: props => props.column.id,
      columns: [
        {
          accessorKey: 'age',
          header: () => 'Age',
          footer: props => props.column.id,
        },
        {
          header: 'More Info',
          columns: [
            {
              accessorKey: 'visits',
              header: () => <span>Visits</span>,
              footer: props => props.column.id,
            },
            {
              accessorKey: 'status',
              header: 'Status',
              footer: props => props.column.id,
            },
            {
              accessorKey: 'progress',
              header: 'Profile Progress',
              footer: props => props.column.id,
            },
          ],
        },
      ],
    },
  ]
  const defaultProps = {
    data:defaultData,
    columns:defaultColumns,
    isLoading:false
}

describe("Table Component",() =>{
    it('Shound render table component and show data in table',() =>{
        render(<DataTable {...defaultProps }  /> )
        expect(screen.getByText('tanner')).toBeInTheDocument();
       
    })
    it("Should show loading spinnner",() =>{
        render(<DataTable {...defaultProps } isLoading data={[]}  />);
        expect(screen.getByText('Loading ....')).toBeInTheDocument()
    })
    it("Should change page size of table pagination",async () =>{
       render(<DataTable {...defaultProps }  />);
        await userEvent.selectOptions( screen.getByRole('combobox'),screen.getByRole('option',{name:'50'}));
        expect(screen.getByRole('option',{name:'50'}).textContent).toBe('50');
        expect(screen.getByText('tanner3')).toBeInTheDocument();
    });
    it.todo("Should change pageNumber of table pagination",async () =>{
        render(<DataTable {...defaultProps }  />);
         await userEvent.click( screen.getByTestId('next-page'));
         expect(screen.getByText('2 - 10 of 12')).toBeInTheDocument();
     });
     it("Should sort the data",async () =>{
        render(<DataTable {...defaultProps }  />);
        const btn = screen.getAllByTestId('column');
        await userEvent.click(btn[5]);
            
        expect(btn[5].textContent).toBe('Age 🔽')

     })
})