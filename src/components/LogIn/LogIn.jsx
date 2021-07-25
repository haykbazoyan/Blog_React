import Input from '../Input/Input'
import Button from '../Button/Button'
//w-full max-w-xs
export default function LogIn () {
    return (
        <div className='text-center'>
            <div className='w-1/4 md:items-center flex flex-col  px-8 border pt-6 pb-8 mb-4'>
                <Input type='text' placeholder='Login' name='login' />
                <Input type='password' placeholder='Password' name='password' />
                <Button onClick='' isDisable='false' btnName='Subject' />
            </div>
        </div>
        
    )
}