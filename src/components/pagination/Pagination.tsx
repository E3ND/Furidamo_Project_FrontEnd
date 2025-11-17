import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import Style from './styles.module.scss';
import { JSX, useEffect, useState } from 'react';

type PaginationProps = {
  onPageChange: (page: number) => void;
};

export default function Pagination({ onPageChange }: PaginationProps) {
    const [numberPaginationBack, setNumberPaginationBack] = useState(10);

    const [screenSize, setScreenSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const [paginationElement, setPaginationElement] = useState<JSX.Element[]>([]);
    useEffect(() => {
        function handleResize() {
            setScreenSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (screenSize.width < 1920) {
            setNumberPaginationBack(5);
        } else {
            setNumberPaginationBack(10);
        }

        const elements: JSX.Element[] = [];

        for (let i = 0; i < numberPaginationBack; i++) {
            if (i === 2) {
                elements.push(<span key={i} className={Style.span_selected}>{i + 1}</span>);
            } else {
                elements.push(<span key={i} onClick={() => onPageChange(i + 1)} className={Style.span}>{i + 1}</span>);
            }
        }

        setPaginationElement(elements);
    }, [numberPaginationBack, screenSize]);

    return (
        <div className={Style.pagination}>
            <div className={Style.pagination_box}>
                <div className={Style.arrow_left}><FontAwesomeIcon icon={faArrowLeft} /></div>

                <div className={Style.pagination_numbers}>
                    {paginationElement}
                </div>
                <div className={Style.arrow_right}><FontAwesomeIcon icon={faArrowRight} /></div>
            </div>
        </div>
    )
}