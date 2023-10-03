import './index.css'

const SideBar = ({onToggle, isToggle}) => {

    const onPressToggleButton = () => {
        onToggle(!isToggle)
    }

    return (
        <div className={`drawer ${isToggle ? 'is-toggle':''}`}>
            <div className='flex top-banner align-items-center'>

                <p className='close' onClick={onPressToggleButton}>x</p>

                <div className='flex align-items-center'>
                    <div className='toggle' onClick={onPressToggleButton}></div>
                    <p className='logo'>BC.GAME</p>
                </div>
            </div>

            
        </div>
    )
}

export default SideBar