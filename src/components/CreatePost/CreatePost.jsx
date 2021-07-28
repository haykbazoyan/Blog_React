import Input from '../Input/Input'
import Textarea from '../Textarea/Textarea'
import styles from './CreatePost.module.css'

export default function CreatePost () {
    return (
        <div className={`${styles.postBg}`}>  
            <h1 className='ml-5'>CreatePost</h1>
            <hr className='m-5' />
            <div className='ml-5'>
                <Input type="text" name="title" placeholder='Title *' />
                <Textarea rows="20"  name="content" placeholder='Content' />
            </div>
            
            

        </div>
    )
}