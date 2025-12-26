import { useContext } from 'react'
import AuthContext from './AuthProvider'
import { Navigate } from 'react-router-dom'

const PublicRoute = ({children}) => {
    const { isAuthenticated } = useContext(AuthContext)
  return !isAuthenticated ? (
    children
  ) : (
    <Navigate to="/dashboard" / >
  )
}   
export default PublicRoute