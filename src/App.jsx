import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { LibroDiario } from './pages/LibroDiario'
import { LibroMayor } from './pages/LibroMayor'
import { EstadoResultado } from './pages/EstadoResultado'


function App() {

  const routes = createBrowserRouter([
    {path: '/', element: <Home />},
    {path: '/librodiario', element: <LibroDiario />},
    {path: '/libromayor', element: <LibroMayor />},
    {path: '/estadoderesultados', element: <EstadoResultado />}
  ])

  return (
    <>
      <RouterProvider router={routes}>
        
      </RouterProvider>
    </>
  )
}

export default App
