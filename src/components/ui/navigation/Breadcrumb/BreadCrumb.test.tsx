import { render } from '@/lib/__test__'
import { BreadCrumb } from '@/components/ui/navigation/Breadcrumb/index'

describe('Breadcrumb Navigation', () => {
  it('Breadcrumb navigation to rendered on the dom', () => {
    render(<BreadCrumb variant="chevron" />)
  })
})
