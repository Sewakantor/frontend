import Image from 'next/image';
import LogoSVG from '../public/assets/images/main-logo-color.svg';

export default function Client() {
    return (
        <>
            <section class="py-20">
            <h1 className='mb-5 text-left font-bold text-2xl'>Berbagai Klien Kami</h1>
                <div class="container mx-auto px-4">
                    <div class="flex flex-wrap -mx-2">
                        <div class="mb-4 w-full md:w-1/2 lg:w-1/4 px-2">
                            <div class="py-16 bg-gray-50 rounded">
                                <img className="h-7 mx-auto" src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg" alt="Logo Client" width={120} height={30} />
                            </div>
                        </div>
                        <div class="mb-4 w-full md:w-1/2 lg:w-1/4 px-2">
                            <div class="py-16 bg-gray-50 rounded">
                                <img className="h-7 mx-auto" src="https://www.alterra.id/wp-content/themes/alterra-wp/assets/revamp/img/logo_nav@2x.png" alt="Logo Client" />
                            </div>
                        </div>
                        <div class="mb-4 w-full md:w-1/2 lg:w-1/4 px-2">
                            <div class="py-16 bg-gray-50 rounded">
                                <img className="h-7 mx-auto" src="https://www.tokotenun.com/wp-content/uploads/2019/05/logo_bukalapak-768x205.png" alt="Logo Client" width={100} height={30} />
                            </div>
                        </div>
                        <div class="w-full md:w-1/2 lg:w-1/4 px-2">
                            <div class="py-16 bg-gray-50 rounded">
                                <img className="h-7 mx-auto" src="https://seeklogo.com/images/B/blibli-logo-BBC7270E6F-seeklogo.com.png" alt="Logo Client" width={80} height={30} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

