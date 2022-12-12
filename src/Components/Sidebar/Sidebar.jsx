import '../../Styles/Sidebar.css'
import amigoLogo   from '../../Resources/img/amigo_workforce_logo.webp'
import SidebarItem from './SidebarItem'
import items       from './data.json'

function Sidebar () {
  return (
    <div className="sidebar">
      <div className='top'>
        <span className="logo">
          <img src={amigoLogo} alt="Logo Amigo Workforce" className='LogoAmigo' />
        </span>
      </div>
      <div className="middle"></div>
      {items.map((item,index) => <SidebarItem key={index} item={item} /> )}
      <div className="bottom none theme_bottom">
        <span>Theme</span>
        <div className="colorOption" title='Light'></div>
        <div className="colorOption" title='Blue'></div>
        <div className="colorOption" title='Dark'></div>
      </div>
    </div>
  )
}

export default Sidebar