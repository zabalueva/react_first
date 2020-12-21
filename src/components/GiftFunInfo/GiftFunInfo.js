import { useEffect } from 'react';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import './GiftFunInfo.css';

function GiftFunInfo() {
    useEffect(() => {
        document.title = `A time of gifts!`
    }, [])

    const { width, height } = useWindowSize();

    return (
            <Confetti
                width={width}
                height={height}
            />
    )
}


export default GiftFunInfo;