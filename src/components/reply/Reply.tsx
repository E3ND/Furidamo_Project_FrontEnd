import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from "@fortawesome/free-solid-svg-icons";

import Style from './styles.module.scss';

export default function Reply(props: { answerPointer: boolean, setAnswerPointer: React.Dispatch<React.SetStateAction<boolean>> }) {
    const handleClickAnswer = () => {
        props.setAnswerPointer(false);
    }
    
    return (
        <div className={Style.answer}>
            <div>
                <textarea className={Style.textarea_comment} />
            </div>
        
            <div>
                <div>
                    <FontAwesomeIcon icon={faComment} />
                    <p onClick={handleClickAnswer}>Cancelar</p>
                </div>
                <button>Comentar</button>
            </div>
        </div>
    )
}