import { ReactSVG } from 'react-svg'

type SideBarType = {
    isOpen: boolean
    setOpenSideBar: React.Dispatch<React.SetStateAction<boolean>>
    onClose: () => void
}

function Sidebar({ isOpen, onClose }: SideBarType) {
    const buttons = [
        { name: 'welcome' },
        { name: 'skills' },
        { name: 'projects' },
        { name: 'contact' },
    ]

    return (
        <aside
            onClick={onClose}
            className={`smooth-animation fixed inset-0 z-50 bg-secondary-neutral bg-opacity-75 ${
                isOpen ? 'translate-x-0' : '-translate-x-[100vw]'
            }`}
        >
            <div
                className={`smooth-animation absolute left-0 top-0 h-full w-full bg-primary-neutral shadow sm:w-96 ${
                    isOpen ? 'translate-x-0' : '-translate-x-[100vw]'
                }`}
            >
                <ReactSVG
                    src="/svg/icon-close.svg"
                    onClick={onClose}
                    className="fill-Soft-Red mb-4 flex cursor-pointer flex-row-reverse p-4 shadow-md"
                />
                <div className="flex flex-col shadow">
                    {buttons.map(({ name }, i) => (
                        <a
                            key={`button${i}`}
                            className="smooth-animation group relative border-b bg-primary-neutral p-4 capitalize text-secondary-neutral"
                            href={`#${name}`}
                        >
                            {name}
                            <div className="smooth-animation absolute left-0 top-0 h-full w-full -translate-x-full bg-black bg-opacity-0 backdrop-invert group-hover:translate-x-0" />
                        </a>
                    ))}
                </div>
            </div>
        </aside>
    )
}

export default Sidebar
