import './_Burger.scss';

const Burger = ({ menuState, toggleMenu }) => {

    return (
        <>
            <div className={menuState ? 'burger menu-open' : 'burger' } onClick={() => {toggleMenu()}}>
                <svg className="vbp-header-menu-button__svg">
                    <line x1="0" y1="50%" x2="100%" y2="50%" className="top" shapeRendering="crispEdges" />
                    <line x1="0" y1="50%" x2="100%" y2="50%" className="middle" shapeRendering="crispEdges" />
                    <line x1="0" y1="50%" x2="100%" y2="50%" className="bottom" shapeRendering="crispEdges" />
                </svg>
            </div> 
        </>
    )
}

export default Burger;