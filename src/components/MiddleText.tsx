import { useEffect, useState } from "react";

export default function MiddleText() {
    let [windowH, setWindowH] = useState(0);
    let [height, setHeight] = useState(0);
    useEffect(() => {
        setWindowH(window.innerHeight);
        let handleResize = () => setWindowH(window.innerHeight);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    });
    useEffect(() => {
        setHeight(
            windowH -
            Number((document.querySelector("#__next > div:nth-child(2)") as HTMLDivElement).style.height.slice(0, -2))
        );
    }, [windowH]);
    return (<div id="middleText" style={height === 0 ? {} : { height }}><p>I▽I</p></div>);
}