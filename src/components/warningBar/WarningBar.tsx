import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { IWarningBar } from "./warningBar.types"

import Style from './WarningBar.module.scss';

function WarningBar(props: IWarningBar) {
    return(
        <div className={Style.warning_box}>
            <div className={Style.warning_bar}>
                <span><FontAwesomeIcon icon={faTriangleExclamation} /></span>
                <p>{props.message}</p>
            </div>

            <div className={Style.time}></div>
        </div>
    )
}

export default WarningBar