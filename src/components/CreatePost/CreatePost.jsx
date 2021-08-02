import Input from '../Input/Input'
import Textarea from '../Textarea/Textarea'
import Button from '../Button/Button'
import styles from './CreatePost.module.css'
import { useState } from 'react'

export default function CreatePost () {
    const [count, setCount] = useState(0);
    return (
        <div className={`${styles.postBg}`}>  
            <h1 className='m-5 text-blue-900 text-3xl'>CreatePost {count}</h1>
            <hr className='mb-3' />
            <div className='ml-5'>
                <Input type="text" name="title" placeholder='Title *' />
                <Textarea rows="20"  name="content" placeholder='Content' />
                <Button onClick={() => setCount(count + 1)} isDisable='false' btnName='Post' />
            </div>
            
        </div>
    )
}