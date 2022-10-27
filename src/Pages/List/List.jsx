import "../../Styles/List.scss"
import Sidebar   from "../../Components/Sidebar/Sidebar"
import Navbar    from "../../Components/Navbar/Navbar"
import Datatable from "../../Components/DataTable/Datatable"

function List() {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable />
      </div>
    </div>
  )
}

export default List
