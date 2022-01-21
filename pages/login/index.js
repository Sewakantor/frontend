import Head from 'next/head'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import FormLogin from '../../components/FormLogin'
import { useJwt } from "react-jwt";

export default function index() {
    const userData = useSelector((state) => state.user);
    const router = useRouter();
    const { decodedToken, isExpired } = useJwt(userData.token);

    useEffect(() => {
        if (userData.isLogin) {
            router.push('/')
        }
    }, [userData,router]);

    return (
        <div>
            <Head>
                <title>Customer Login</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <FormLogin router={router}/>  
        </div>
    )
}
