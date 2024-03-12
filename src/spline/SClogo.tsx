import Spline from '@splinetool/react-spline'

type SClogoType = {
    setSplinesLoaded: React.Dispatch<React.SetStateAction<boolean[]>>
}

function SClogo({ setSplinesLoaded }: SClogoType) {
    return (
        <Spline
            scene="https://prod.spline.design/GKsVbS96YU2i9aac/scene.splinecode"
            className="absolute"
            onStart={() =>
                setSplinesLoaded((prev) =>
                    prev.map((state, i) => (i === 0 ? true : state))
                )
            }
        />
    )
}

export default SClogo
