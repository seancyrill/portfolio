import { useEffect, useState } from 'react'
import InitialLoading from './components/InitialLoading'
import Nav from './components/Nav'
import ScrollHint from './components/ScrolHhint'
import Contact from './sections/Contact'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Welcome from './sections/Welcome'

function App() {
    const [splinesLoaded, setSplinesLoaded] = useState([false, false])
    const [ready, setReady] = useState(false)

    useEffect(() => {
        const loaded = !splinesLoaded.some((state) => !state)

        if (loaded) {
            setReady(true)
        }
    }, [splinesLoaded])

    return (
        <main
            className={`relative mx-auto flex w-full max-w-screen-2xl flex-col shadow-xl ${!ready && 'max-h-[100svh] overflow-hidden'}`}
        >
            <InitialLoading ready={ready} />
            <Nav />
            <Welcome setSplinesLoaded={setSplinesLoaded} />
            <Skills />
            <Projects />
            <Contact setSplinesLoaded={setSplinesLoaded} />
            <div className="pointer-events-none fixed inset-0 mx-auto w-full max-w-screen-2xl">
                <ScrollHint />
            </div>
        </main>
    )
}
export default App
