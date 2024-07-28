import { useEffect, useState } from "react";

export function TopBar() {
    return (
        <div id="topbar">
            {/*<a href="/photo"><p>照片</p></a>*/}
            <a href="/"><img src="/icon.svg" /></a>
            <div id="line" />
        </div>
    );
}

interface Hitokoto {
    commit_from: string;
    created_at: string;
    creator: string;
    creator_uid: number;
    from: string;
    from_who: string;
    hitokoto: string;
    id: number;
    length: number;
    reviewer: number;
    type: string;
    uuid: string;
}

export function BottomBar() {
    let [hitokoto, setHitokoto] = useState<Partial<Hitokoto>>({});
    let [fetched, setFetched] = useState(false);
    useEffect(() => {
        if (fetched) return;
        fetch('https://v1.hitokoto.cn/?c=i')
            .then(r => r.json())
            .then(res => {
                // console.log(res);
                setFetched(true);
                setHitokoto(res);
            })
            .catch(() => {
                setFetched(false);
            });
    });
    return (
        <div id="bottombar">
            {fetched && (<>
                <p>{hitokoto?.hitokoto}</p>
                <p style={{ marginLeft: (hitokoto.length || 0) * 16 - 10, fontSize: 14 }}>——《{hitokoto?.from}》</p>
            </>)}
            <p id="copyright">© 2024 Slouchwind</p>
        </div>
    )
}