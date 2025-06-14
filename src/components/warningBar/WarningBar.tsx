import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { IWarningBar } from "./warningBar.types"

import Style from './style.module.scss';
import { useEffect, useState } from "react";

export default function WarningBar(props: IWarningBar) {
    const [width, setWidth] = useState(37.3);
    const [display, setDisplay] = useState("");

    useEffect(() => {
        const duration = 4000; 
        const intervalTime = 50;
        const steps = duration / intervalTime;
        const decrement = 37 / steps;

        const interval = setInterval(() => {
        setWidth(prev => {
            if (prev <= 0) {
                clearInterval(interval);
                setDisplay("none");
                return 0;
            }

            return prev - decrement;
        });
        }, intervalTime);

        return () => clearInterval(interval);
    }, []);

    return(
        <div className={Style.warning_box} style={{ display: `${display}` }}>
            <div className={Style.warning_bar} style={{ backgroundColor: `${props.type == 'error' ? 'rgb(187, 58, 58)' : 'rgb(49, 161, 58)'}` }}>
                <span><FontAwesomeIcon icon={faTriangleExclamation} /></span>
                <p>{props.message}</p>
            </div>

            <div className={Style.time} style={{ width: `${width}vw` }}></div>
        </div>
    )
}