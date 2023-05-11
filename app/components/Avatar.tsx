'use client'

import Image from 'next/image'
import React from 'react'

type Props = {}

export default function Avatar({ }: Props) {
    return (
        <Image
            className='rounded-full'
            alt='Avatar'
            height={30}
            width={30}
            src={'/images/placeholder.jpg'}
        />
    )
}