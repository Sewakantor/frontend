import Head from 'next/head'
import FormLogin from '../../components/FormLogin'
export default function index() {
    return (
        <div>
            <Head>
                <title>Customer Login</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <FormLogin/>  
        </div>
    )
}
