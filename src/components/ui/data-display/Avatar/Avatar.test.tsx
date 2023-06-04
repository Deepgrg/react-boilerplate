import { render, screen, waitFor } from '@testing-library/react'
import Avatar from './Avatar'

describe('Avatar', () => {
  // const avatar = <Avatar variant="initials" size="xxl" initials="BB" />
  it('A avatar with image and alt text to rendered on the dom', async () => {
    render(
      <Avatar
        variant="image"
        imageSrc="https://cdn.mos.cms.futurecdn.net/vVTbPncnvchc646usxRoa8-200-100.jpg"
        alt="profile-picture"
      />
    )
    await waitFor(() =>
      expect(screen.getByAltText('profile-picture')).toBeInTheDocument()
    )
  })
})
