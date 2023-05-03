import Home from './pages/home/Home';
import NotFound from './pages/notFound/NotFound';
import About from './pages/about/About';
import Announces from './pages/announces/Announces';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './app.css'

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />
	},
	{
		path: "/announces/:id",
		element: <Announces />,
		errorElement: <NotFound/>
	},
	{
		path: '/about',
		element: <About />
	},
	{
		path: "*",
		element: <NotFound />
	},
]);

function App() {
	return (
		<>
			<RouterProvider router={router}/>
		</>
	);
}

export default App;
