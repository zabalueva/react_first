import { useEffect } from 'react';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import './GiftFunInfo.scss';

function GiftFunInfo() {
    useEffect(() => {
        setTimeout(() => document.title = `A time of gifts!`, 3000);
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