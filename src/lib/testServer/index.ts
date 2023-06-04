import { setupServer } from 'msw/node'
import { rest } from 'msw'

// todo: type properly
const server = setupServer(
	rest.get('*',(req,res,ctx) => {
		return res(
			ctx.status(404),
			ctx.json({
				error: "Mock api not configured"
			})
		)
	})
)

beforeAll(() => {
	server.listen();
})

afterAll(() => {
	server.close();
})

afterEach(() => server.resetHandlers());

export { server,rest }