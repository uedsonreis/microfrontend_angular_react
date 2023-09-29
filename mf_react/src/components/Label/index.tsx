import React from 'react'
import './style.css'

type Props = { text: string }

export default function Label({ text }: Props) {
    return (
        <span className='my-label'>{text}</span>
    )
}