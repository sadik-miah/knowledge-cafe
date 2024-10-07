import profile from '../../assets/images/profile.png'

const Headers = () => {
    return (
        <div className='flex justify-between items-center border-b-2 border-gray-200 p-4 mx-4'>
            <h1 className='text-4xl font-semibold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>

    );
};

export default Headers;