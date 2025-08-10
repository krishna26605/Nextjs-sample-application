import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'


const UserInfoPage = () => {
    const [userInfo, SetuserInfo] = useState()
    const router = useRouter();

    console.log(userInfo)


    useEffect(()=>{
        const id = router.query.id

        async function getUserById(){
            const data = await fetch(`https://dummyjson.com/users/${id}`);
            SetuserInfo(await data.json());
            
        }

        getUserById(id);

    },[router.query.id])






    return(
        <div>
            <h1>{userInfo?.firstName}</h1>
            <h1>{userInfo?.email}</h1>
        </div>
    )
}

export default UserInfoPage