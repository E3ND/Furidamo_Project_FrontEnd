import Post from "../../post/Post"

import Style from './styles.module.scss';

function Home() {
    return (
        <div className={Style.container}>
            <br /> <br /> <br />
            <Post />
        </div>
    )
}

export default Home