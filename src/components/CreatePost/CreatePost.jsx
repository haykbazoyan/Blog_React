import Input from '../Input/Input'
import Textarea from '../Textarea/Textarea'
import styles from './CreatePost.module.css'

export default function CreatePost () {
    return (
        <div className={`${styles.postBg}`}>  
            <h1>CreatePost</h1>

            <div className='title'>
                <form action="/action_page.php" id="usrform">
                    <Input type="text" name="title" placeholder='Title *' />
                </form>
                <br />
                <Textarea rows="4" cols="50" name="content" placeholder='Content' />
            </div>

        </div>
    )
}