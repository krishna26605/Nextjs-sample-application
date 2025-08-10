import styles from '../../../styles/User.module.css'

const UsersPage = (props) => {
    return(
        <div>
            <h1>USERS (Static Site Generation (SSG))</h1>
            {
                props.data.users.map(user =>
                 <li key={user.id}>
                    <div className={styles["text-yellow"]}>{user.firstName}</div>  
                </li>)
            }
        </div>
    )
}


export const getStaticProps = async () => {
    const data = await(await fetch("https://dummyjson.com/users")).json();
    return {
        props: {
            data,
        },
    }
}


export default UsersPage