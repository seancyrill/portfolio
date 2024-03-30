import { useEffect, useRef, useState } from 'react'
import { ReactSVG } from 'react-svg'

const RESUME_LINK = '/files/SeanDG-Resume.pdf'

function Resume() {
    const dialogRef = useRef<HTMLDialogElement>(null)
    const [showResume, setshowResume] = useState(false)
    const [showOptions, setShowOptions] = useState(false)

    useEffect(() => {
        const resumeDialog = dialogRef.current
        if (!resumeDialog) return

        showResume ? resumeDialog.showModal() : resumeDialog.close()
    }, [showResume, dialogRef])

    function handleBtn() {
        setshowResume(true)
    }

    function handleCancel() {
        setshowResume(false)
    }
    function toggleOptions() {
        setShowOptions((prev) => !prev)
    }

    return (
        <>
            <button
                className="flex items-center gap-1 rounded-full bg-primary-neutral p-2"
                onClick={(e) => (e.preventDefault(), handleBtn())}
            >
                <ReactSVG
                    beforeInjection={(svg) => {
                        svg.classList.add('primary-svg')
                    }}
                    src="/svg/resume-portfolio-svgrepo-com.svg"
                />
                <p className="hidden md:flex">Resume</p>
            </button>

            <dialog
                onCancel={handleCancel}
                ref={dialogRef}
                className="h-full w-full bg-transparent backdrop:bg-black/90"
            >
                <div className="relative m-auto flex h-full  w-full flex-col p-4">
                    <menu className="over absolute right-0 top-0 flex justify-end divide-x rounded-3xl bg-primary-neutral">
                        <li
                            className={`relative rounded-l-3xl ${showOptions ? 'bg-primary bg-opacity-45' : ''}`}
                        >
                            <button
                                className="h-full  px-6 py-2"
                                onClick={(e) => (
                                    e.preventDefault(), toggleOptions()
                                )}
                                onBlur={() => setShowOptions(false)}
                                onMouseEnter={() => setShowOptions(true)}
                                onMouseLeave={() => setShowOptions(false)}
                            >
                                <ReactSVG
                                    beforeInjection={(svg) => {
                                        svg.classList.add('primary-svg')
                                    }}
                                    src="/svg/icon-menu.svg"
                                />
                            </button>

                            <aside
                                className={`smooth-animation absolute bottom-0 right-0 flex origin-top-right translate-y-full flex-col divide-y border ${showOptions ? 'scale-100' : 'scale-0'}`}
                            >
                                <a
                                    href={RESUME_LINK}
                                    target="_blank"
                                    className="smooth-animation w-full whitespace-nowrap bg-primary-neutral px-4 py-2 text-left hover:bg-primary"
                                >
                                    Open in new tab
                                </a>

                                <a
                                    className="smooth-animation w-full bg-primary-neutral px-4 py-2 text-left hover:bg-primary "
                                    href={RESUME_LINK}
                                    download
                                >
                                    Download
                                </a>
                            </aside>
                        </li>

                        <li>
                            <button
                                className="smooth-animation px-6 py-2 text-red-400 hover:bg-secondary-neutral"
                                onClick={(e) => (
                                    e.preventDefault(), handleCancel()
                                )}
                            >
                                Close
                            </button>
                        </li>
                    </menu>

                    <div className="flex-1 pt-[48px]">
                        <iframe
                            className="pt-2"
                            src={RESUME_LINK}
                            width="100%"
                            height="100%"
                        ></iframe>
                    </div>
                </div>
            </dialog>
        </>
    )
}

export default Resume
