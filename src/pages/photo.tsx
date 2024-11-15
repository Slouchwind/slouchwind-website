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
    }, []);
    return (
        <div
            className={style.picture} style={{ height: imgHeight }}
            onMouseEnter={() => { setDivHeight(divRef.current?.clientHeight || 0) }}
            onMouseLeave={() => { setDivHeight(0) }}
        >
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
            <br />
            <p>这里是照片墙</p>
            <br />
            <Pictures data={[
                {
                    src: '/picture/HelloUbuntu.png',
                    date: '2024/11/1',
                    bio: 'Windows + Ubuntu 双系统'
                },
                {
                    src: '/picture/主播女孩.png',
                    date: '2024/9/16',
                    bio: ''
                },
                {
                    src: '/picture/雨.png',
                    date: '2024/9/10',
                    bio: '雨'
                },
                {
                    src: '/picture/春游.png',
                    date: '2024/6/14',
                    bio: '雨天春游'
                },
                {
                    src: '/picture/Time.png',
                    date: '2024/3/9',
                    bio: '是光阴似箭，非来日方长',
                },
            ]} />
        </Main>
    );
}