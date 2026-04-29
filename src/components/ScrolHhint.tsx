'use client'
import { useEffect, useRef, useState } from 'react'

export default function ScrollHint() {
    const [visible, setVisible] = useState(false)
    const timerRef = useRef<number | null>(null)

    useEffect(() => {
        const isNearBottom = () => {
            const threshold = 300
            return (
                window.innerHeight + window.scrollY >=
                document.body.scrollHeight - threshold
            )
        }

        const handleUserActivity = () => {
            setVisible(false)
            if (timerRef.current) clearTimeout(timerRef.current)

            if (isNearBottom()) return

            timerRef.current = setTimeout(() => {
                if (!isNearBottom()) setVisible(true)
            }, 5000)
        }

        handleUserActivity()
        window.addEventListener('scroll', handleUserActivity)
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current)
            window.removeEventListener('scroll', handleUserActivity)
        }
    }, [])

    return (
        <div
            className={`pointer-events-none fixed bottom-0 right-0 mb-8 mr-12 flex items-center gap-3 transition-opacity duration-700 ${
                visible
                    ? 'animate-pulse opacity-100'
                    : 'pointer-events-none opacity-0'
            }`}
        >
            <div
                className="flex h-12 w-8 items-start justify-center rounded-full pt-2"
                style={{ boxShadow: '0 0 0 1px white, 0 0 0 2px black' }}
            >
                <div
                    className="h-2.5 w-0.5 animate-bounce rounded-full bg-white"
                    style={{ outline: '0.5px solid black' }}
                />
            </div>
            <span
                className="font-sans text-[0.6rem] uppercase tracking-[0.25em] text-white"
                style={{ textShadow: '0 0 2px black, 0 0 4px black' }}
            >
                Scroll Down
            </span>
        </div>
    )
}
