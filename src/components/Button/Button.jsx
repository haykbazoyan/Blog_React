export default function Button({onClick, isDisable, btnName}) {
    return (
        <button className='bg-transparent hover:bg-blue-900 text-blue-900 font-semibold hover:text-white py-2 px-4 border-2 border-blue-900 hover:border-transparent rounded mb-2' type='button' onClick={onClick} disabled={isDisable}>{btnName}</button>
    )
}


