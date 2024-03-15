import { useRef } from 'react'
import SeanKb from '../spline/SeanKb'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

const MY_EMAIL = 'seancyrill@gmail.com'

type ContactType = {
    setSplinesLoaded: React.Dispatch<React.SetStateAction<boolean[]>>
}

function Contact({ setSplinesLoaded }: ContactType) {
    const contactRef = useRef(null)
    const { inView } = useIntersectionObserver(
        { rootMargin: '50%' },
        contactRef
    )

    return (
        <section
            id="contact"
            ref={contactRef}
            className="flex min-h-screen p-1 md:p-4"
        >
            <div className="relative flex w-full rounded-3xl bg-secondary-neutral text-primary-neutral portrait:flex-col landscape:flex-row">
                <div className="relative flex flex-col justify-center gap-4 border-primary-neutral px-8 py-2 sm:py-8 portrait:h-1/2 portrait:w-full portrait:border-b landscape:h-full landscape:w-1/2 landscape:border-r">
                    {/* for netlify form detection */}

                    <h1 className="w-full p-2 font-header text-6xl font-bold sm:p-8 sm:text-8xl xl:text-[8rem] portrait:text-center landscape:text-right">
                        GET IN TOUCH
                    </h1>

                    <form
                        className="flex flex-col place-content-center gap-2 sm:gap-4"
                        name="contact"
                        method="post"
                    >
                        <input type="hidden" name="form-name" value="contact" />

                        <label className="sr-only">Name</label>
                        <input
                            required
                            type="text"
                            name="name"
                            placeholder="Company | Name"
                            className="border-x border-primary-neutral bg-transparent px-4 py-2 focus:outline-none"
                        />

                        <label className="sr-only">Email</label>
                        <input
                            required
                            name="email"
                            type="email"
                            placeholder="Email"
                            className="border-x border-primary-neutral bg-transparent px-4 py-2 focus:outline-none"
                        />
                        <label className="sr-only">Message</label>
                        <textarea
                            required
                            name="message"
                            placeholder="Message"
                            className="z-10 border-x border-primary-neutral bg-transparent px-4 py-2 focus:outline-none"
                        />

                        <div data-netlify-recaptcha="true"></div>
                        <button>Send</button>
                    </form>
                </div>

                <div className="relative flex flex-col items-center justify-center text-right font-header font-light  portrait:h-1/2 portrait:w-full landscape:h-full landscape:w-1/2">
                    <div className="relative grid w-full place-content-center portrait:h-2/3 landscape:h-1/2">
                        <SeanKb
                            setSplinesLoaded={setSplinesLoaded}
                            inView={inView}
                        />
                    </div>

                    <a
                        href={`mailto:${MY_EMAIL}`}
                        className="landscape: absolute m-4 portrait:left-0 portrait:-translate-x-1/4 portrait:rotate-90 landscape:bottom-0"
                    >
                        <p className="text-center text-xs opacity-50">
                            OR USE EMAIL LINK
                        </p>
                        <p className="rounded-lg border-2 border-dashed border-primary-neutral bg-secondary-neutral p-2 hover:invert">
                            {MY_EMAIL}
                        </p>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact
