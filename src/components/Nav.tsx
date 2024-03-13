import { useEffect, useState } from 'react'
import { ReactSVG } from 'react-svg'
import Sidebar from './Sidebar'
import Resume from './Resume'

function Nav() {
    const [openSideBar, setOpenSideBar] = useState(false)
    const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up')

    //hides nav on scroll down
    useEffect(() => {
        let lastScrollTop = 0

        const handleScroll = () => {
            const currentScrollTop = document.documentElement.scrollTop

            if (currentScrollTop > lastScrollTop) {
                scrollDirection === 'up' && setScrollDirection('down')
            } else {
                scrollDirection === 'down' && setScrollDirection('up')
            }

            lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const links = [
        {
            name: 'Github',
            to: 'https://github.com/seancyrill',
            vector: '/svg/github-svgrepo-com.svg',
        },
        {
            name: 'LinkedIn',
            to: 'http://www.linkedin.com/in/seancyrill',
            vector: '/svg/linkedin-rounded-svgrepo-com.svg',
        },
        {
            name: 'Frontend Mentor',
            to: 'https://www.frontendmentor.io/profile/seancyrill',
            vector: '/svg/frontend-mentor-seeklogo.svg',
        },
    ]

    function closeSideBar() {
        setOpenSideBar(false)
    }

    return (
        <>
            <nav
                className={`smooth-animation fixed top-0 z-40 flex w-full max-w-screen-2xl origin-top items-center justify-between px-2 py-3 text-secondary-neutral md:px-6 ${scrollDirection === 'up' ? 'translate-y-0' : '-translate-y-full'}`}
            >
                <div className="flex items-center gap-2">
                    <div
                        className="cursor-pointer rounded-full bg-primary p-2"
                        onClick={() => setOpenSideBar(true)}
                    >
                        <ReactSVG src="/svg/icon-menu.svg" />
                    </div>

                    <a
                        href={`#welcome`}
                        className="rounded-full bg-primary-neutral p-2 font-header text-2xl font-bold"
                    >
                        Scdg
                    </a>
                </div>
                <div className="flex gap-2">
                    {links.map(({ name, to, vector }, i) => (
                        <a
                            href={to}
                            target="_blank"
                            className="flex items-center gap-1 rounded-full bg-primary-neutral p-2"
                            key={`link${i}`}
                        >
                            <ReactSVG
                                beforeInjection={(svg) => {
                                    svg.classList.add('primary-svg')
                                }}
                                key={i}
                                src={vector}
                            />
                            <p className="hidden md:flex">{name}</p>
                        </a>
                    ))}
                    <Resume />
                </div>
            </nav>

            <Sidebar
                isOpen={openSideBar}
                setOpenSideBar={setOpenSideBar}
                onClose={closeSideBar}
            />
        </>
    )
}

export default Nav
