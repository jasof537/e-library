import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'
import Book from './pages/book/Book'
import Member from './pages/member/Members'
import LibraryLoan from './pages/loan/LibraryLoan'
import AddOrModifyPageBook from './pages/book/AddOrModifyPage'
import AddOrModifyPageMember from './pages/member/AddOrModifyPage'
import AddOrModifyPageLoan from './pages/loan/AddOrModifyPage'

import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './context/ProtectedRoute'
function App() {

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* public routes */}
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* protected routes */}
            <Route element={<ProtectedRoute/>}>
              <Route path="/home" element={<Dashboard />} />
              <Route path="/loan" element={<LibraryLoan />} />
              <Route path="/book" element={<Book />} />
              <Route path="/member" element={<Member />} />

              <Route path="/book/add" element={<AddOrModifyPageBook />} />
              <Route path="/book/edit/:id" element={<AddOrModifyPageBook />} />

              <Route path="/member/add" element={<AddOrModifyPageMember />} />
              <Route path="/member/edit/:id" element={<AddOrModifyPageMember />} />

              <Route path="/loan/add" element={<AddOrModifyPageLoan />} />
            </Route>

          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
