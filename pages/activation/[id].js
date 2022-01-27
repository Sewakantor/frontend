import Head from 'next/head';
import ActivationLayout from '../../components/ActivationLayout';

export default function index() {
    return (
        <div>
             <Head>
                <title>Activation Page</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <ActivationLayout/>
        </div>
    )
}
