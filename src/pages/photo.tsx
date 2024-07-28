import Main from '@/Main';
import style from '@style/Photo.module.scss'
import { useEffect, useRef, useState } from 'react';

interface PictureProps {
    src: string;
    date: string;
    bio: string;
}

function Picture({ src, date, bio }: PictureProps) {
    let imgRef = useRef<HTMLImageElement>(null);
    let divRef = useRef<HTMLDivElement>(null);
    let [imgHeight, setImgHeight] = useState(0);
    let [divHeight, setDivHeight] = useState(0);
    useEffect(() => {
        setImgHeight(imgRef.current?.clientHeight || 0);
        setDivHeight(divRef.current?.clientHeight || 0);
    }, []);
    return (
        <div className={style.picture} style={{ height: imgHeight }}>
            <img src={src} ref={imgRef} />
            <div ref={divRef} style={{ top: -divHeight }}>
                <p>{date}</p>
                <p>{bio}</p>
            </div>
        </div>
    );
}

function Pictures({ data }: { data: PictureProps[] }) {
    return (<div className={style.pictures}>
        {data.map((data, i) => (
            <Picture {...data} key={i} />
        ))}
    </div>);
}

export default function Photo() {
    return (
        <Main>
            <p>这里是照片墙</p>
            <Pictures data={[
                {
                    src: '/picture/Time.png',
                    date: '2024/3/9',
                    bio: '是光阴似箭，非来日方长',
                },
                {
                    src: '/picture/MerryChristmas2023.png',
                    date: '2023/12/24',
                    bio: '平静的圣诞树',
                },
            ]} />
        </Main>
    );
}