import Modal from "@/components/ui/core/Modal/Modal"
import { render, screen, waitFor } from "@testing-library/react"

test('Expect Modal pop up in the DOM', async () => {
    render(<Modal isOpen />)

    await waitFor(() => {
        expect(screen.getByTestId('dialog-element')).toHaveClass("opacity-100")
    })

    await waitFor(() => {
        expect(screen.getByTestId('dialog-overlay')).toHaveClass("bg-opacity-25")
    })
})