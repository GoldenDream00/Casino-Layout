import './index.css'

const Header = ({isToggle}) => {
    return (
        <div className={`header ${isToggle ? 'header-is-toggle':''}`}>
            <div className='header-wrap'>
                <div className='header-inner'>
                    <div className='flex justify-space-between'>
                        <div className='flex header-options'>
                            <div className='header-link-item'>
                                <p>Casino</p>
                            </div>
                            <div className='header-link-item'>
                                <p>Sports</p>
                            </div>
                            <div className='header-link-item'>
                                <p>Racing</p>
                            </div>
                        </div>

                        <div className='flex mobile-logo align-items-center'>
                            <p>B</p>
                        </div>

                        <div className='flex header-toolbar'>
                            <p>Sign in</p>
                            <div class="sign-up-wrap">
                                <div class="ui-button">
                                    <p>Sign up</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header