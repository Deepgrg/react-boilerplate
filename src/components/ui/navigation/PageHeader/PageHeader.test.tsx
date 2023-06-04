import { render,screen } from '@/lib/__test__'
import { PageHeader } from '.'



describe('Page Header',()=>{
    it('Expect Title to be in the DOM', () => {
        render(<PageHeader  type="title-breadcrump" title='Hello' />)
        expect(screen.getByTestId('titleEle').childNodes[0].textContent === 'Hello').toBeTruthy()
    })
    it('Expect Title and Subtitle to be in the DOM', () => {
        render(<PageHeader  type="title-subtitle" title='Hello' subtitle='World'/>)
        expect(screen.getByTestId('titleEle').childNodes[0].textContent === 'Hello' && screen.getByTestId('titleEle').childNodes[1].textContent === 'World').toBeTruthy()
    })
})