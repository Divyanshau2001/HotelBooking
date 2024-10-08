import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./layout/Layout"
import Register from "./pages/Register"
import SignIn from "./pages/SignIn"
import AddHotel from "./pages/AddHotel"
import { userAppContext } from "./contexts/AppContext"
import MyHotels from "./pages/MyHotels"
import EditHotel from "./pages/EditHotel"
import Search from "./pages/Search"

function App() {
  const  {isLoggedIn} = userAppContext();
  return (
    <Router>
      <Routes>
        <Route 
        path="/" 
        element= {<Layout>
          <p>Home Page</p>
        </Layout>} />
        <Route 
        path="/search" 
        element= {
        <Layout>
          <Search/ >
        </Layout>
      } />

      <Route path="/register" element = {<Layout><Register /></Layout>} />
      <Route path="/sign-in" element = {<Layout><SignIn /></Layout>} />
      {isLoggedIn && (
        <>
        <Route path = "/add-hotel" element = {<Layout><AddHotel /></Layout>} />
        </>
      )}
      <Route path = "/my-hotels" element = {<Layout><MyHotels /></Layout>} />
      <Route path = "/edit-hotel/:hotelId" element = {<Layout><EditHotel /></Layout>} />
      </Routes>
    </Router>
  )
}

export default App
