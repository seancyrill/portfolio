import Spline from '@splinetool/react-spline'

type SClogoType = {
    setSplinesLoaded: React.Dispatch<React.SetStateAction<boolean[]>>
}

function SClogo({ setSplinesLoaded }: SClogoType) {
    return (
        <Spline
            scene="https://prod.spline.design/GKsVbS96YU2i9aac/scene.splinecode"
            className="absolute"
            onStart={() => {
                console.log('SClogo: onStart works'),
                    setSplinesLoaded((prev) =>
                        prev.map((state, i) => (i === 0 ? true : state))
                    )
            }}
            onLoad={() => console.log('SClogo: onLoad works')}
        />
    )
}

export default SClogo
