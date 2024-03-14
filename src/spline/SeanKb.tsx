import Spline from '@splinetool/react-spline'

type SeanKbType = {
    setSplinesLoaded: React.Dispatch<React.SetStateAction<boolean[]>>
}

function SeanKb({ setSplinesLoaded }: SeanKbType) {
    return (
        <Spline
            scene="https://prod.spline.design/f6yoVX8kfTXlrFTL/scene.splinecode"
            className="absolute hidden"
            onLoad={() =>
                setSplinesLoaded((prev) =>
                    prev.map((state, i) => (i === 1 ? true : state))
                )
            }
        />
    )
}

export default SeanKb
