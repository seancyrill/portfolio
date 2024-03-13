import { useState } from 'react'
import SeanKb from '../spline/SeanKb'

const MY_EMAIL = 'seancyrill@gmail.com'

type ContactType = {
    setSplinesLoaded: React.Dispatch<React.SetStateAction<boolean[]>>
}

function Contact({ setSplinesLoaded }: ContactType) {
    const [copied, setCopied] = useState(false)

    function copyEmail() {
        navigator.clipboard.writeText(MY_EMAIL)
        setCopied(true)

        setTimeout(() => {
            setCopied(false)
        }, 3000)
    }

    return (
        <section id="contact" className="flex min-h-[100svh] p-1 md:p-4">
            <div className="relative flex w-full rounded-3xl bg-secondary-neutral text-primary-neutral portrait:flex-col landscape:flex-row">
                <form className="relative flex flex-col justify-center gap-4 border-primary-neutral px-8 py-2 sm:py-8 portrait:h-1/2 portrait:w-full portrait:border-b landscape:h-full landscape:w-1/2 landscape:border-r">
                    <h1 className="w-full p-2 font-header text-6xl font-bold sm:p-8 sm:text-8xl xl:text-[8rem] portrait:text-center landscape:text-right">
                        GET IN TOUCH
                    </h1>
                    <div className="flex flex-col place-content-center gap-2 sm:gap-4">
                        <input
                            type="text"
                            placeholder="Company | Name"
                            className="border-x border-primary-neutral bg-transparent px-4 py-2 focus:outline-none"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="border-x border-primary-neutral bg-transparent px-4 py-2 focus:outline-none"
                        />
                        <textarea
                            placeholder="Message"
                            className="z-10 border-x border-primary-neutral bg-transparent px-4 py-2 focus:outline-none"
                        />
                    </div>
                </form>

                <div className="relative flex flex-col items-center justify-center text-right font-header font-light  portrait:h-1/2 portrait:w-full landscape:h-full landscape:w-1/2">
                    <div className="relative grid w-full place-content-center portrait:h-2/3 landscape:h-1/2">
                        <SeanKb setSplinesLoaded={setSplinesLoaded} />
                    </div>

                    <div
                        onClick={copyEmail}
                        className="landscape: absolute m-4 portrait:left-0 portrait:-translate-x-1/4 portrait:rotate-90 landscape:bottom-0"
                    >
                        {copied ? (
                            <div className="rounded-lg bg-primary-neutral px-3 py-1 text-secondary-neutral">
                                COPIED
                            </div>
                        ) : (
                            <>
                                <p className="text-center text-xs opacity-50">
                                    CLICK TO COPY
                                </p>
                                <p className="rounded-lg border-2 border-dashed border-primary-neutral bg-secondary-neutral p-2 hover:invert">
                                    {MY_EMAIL}
                                </p>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
