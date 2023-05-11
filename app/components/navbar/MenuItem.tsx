'use client'

import React from 'react'

interface MenuItemProps {
    onClick: () => void
    label: string
}

export default function MenuItem({ onClick, label }: MenuItemProps) {
    return (
        <div
            className='py-4 px-3 hover:bg-neutral-100 transition font-semibold'
            onClick={onClick}>
            {label}
        </div>
    )
}