import Head from 'next/head'
import FormRegister from '../../components/FormRegister'
export default function index() {
    return (
        <div>
            <Head>
                <title>Customer Register</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <FormRegister/>
        </div>
    )
}
