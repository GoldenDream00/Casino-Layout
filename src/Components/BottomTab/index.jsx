import './index.css'

const BottomTab = ({onToggle}) => {
    return (
        <div class='bottom-tab'>
            <p onClick={onToggle}>Menu</p>
            <p>Casino</p>
            <div className="active">
                <div className="main-button"><p>Wallet</p></div>
                <div className="circle"></div>
            </div>
            <p>Sports</p>
            <p>Chat</p>
        </div>
    )
}

export default BottomTab