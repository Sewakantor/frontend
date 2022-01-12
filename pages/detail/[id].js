import { useRouter } from 'next/router'
import React from 'react'

export default function index() {
    const router = useRouter();
    const {id} = router.query
    return (
        <div>
            {id}
        </div>
    )
}
