import Post from "../../post/Post"

import Style from './styles.module.scss';

export default function Home() {
    return (
        <div className={Style.container}>
            <br /> <br /> <br />
            <Post />
        </div>
    )
}