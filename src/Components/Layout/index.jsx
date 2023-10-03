import {useState} from "react";

import Header from '../Header'
import SideBar from "../SideBar";
import BottomTab from "../BottomTab";

const Layout = ({children}) => {
    const [isToggle, setToggle] = useState(false)

    const onToggle = () => {
        setToggle(e => !e)
    }

    return (
        <div>
            <Header isToggle={isToggle} />
            <SideBar onToggle={onToggle} isToggle={isToggle} />
            <BottomTab onToggle={onToggle} />
            <div className={`body ${isToggle ? 'body-toggle' : ''}`}>
                <div className="body-container">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout