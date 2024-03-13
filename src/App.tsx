import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import ScrollToTop from './components/ScrollToTop'
import Contact from './sections/Contact'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Welcome from './sections/Welcome'
import InitialLoading from './components/InitialLoading'

function App() {
    const [splinesLoaded, setSplinesLoaded] = useState([false, false])
    const [ready, setReady] = useState(true)

    useEffect(() => {
        const loaded = !splinesLoaded.some((state) => !state)

        if (loaded) {
            //setReady(true)
        }
    }, [splinesLoaded])

    return (
        <main
            className={`relative mx-auto flex w-full max-w-screen-2xl flex-col shadow-xl ${!ready && 'max-h-screen overflow-hidden'}`}
        >
            <InitialLoading ready={ready} />
            <Nav />
            <Welcome setSplinesLoaded={setSplinesLoaded} />
            <Skills />
            <Projects />
            {/* <About /> */}
            <Contact setSplinesLoaded={setSplinesLoaded} />
            <ScrollToTop />
        </main>
    )
}
;``
export default App
