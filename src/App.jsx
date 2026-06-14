import { useLocation } from "react-router-dom"
import AdminLayout from "./layout/admin/AdminLayout"
import AuthLayout from "./layout/auth/AuthLayout"


function App() {
 const location = useLocation()
  return (
    <div className="App">
    {
      location.pathname.includes('/auth') ? (
        <AuthLayout/>
      ) :
      (

        <AdminLayout/>
      )
    }
    
    </div>
  )
}

export default App
