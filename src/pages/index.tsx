import Main from '@/Main';
import style from '@style/Index.module.scss';
import { useState } from 'react';

function Labels({ texts }: { texts: string[] }) {
    return (<>{texts.map((t, i) => (
        <label className={style.id} key={i}>{t}</label>
    ))}</>);
}

interface AccountLabelProps {
    icon: string;
    username: string;
    id?: string;
    link: string;
}

function AccountLabel({ icon, username, id, link }: AccountLabelProps) {
    return (
        <div className={style.account} onClick={() => window.open(link, '_blank')}>
            <div className={style.left}>
                <img src={icon} />
            </div>
            <div className={style.right}>
                <p id={style.username}>{username}</p>
                {id && <p id={style.id}>@{id}</p>}
            </div>
        </div>
    );
}

function AccountLabels({ datas }: { datas: AccountLabelProps[] }) {
    return (
        <div className={style.group}>
            {datas.map((data, i) => (
                <AccountLabel {...data} key={i} />
            ))}
        </div>
    );
}

interface ProgramLabelProps {
    icon?: string;
    name: string;
    bro: string;
    link: string;
    ban?: boolean;
}

function ProgramLabel({ icon, name, bro, link, ban }: ProgramLabelProps) {
    return (
        <div className={style.program} onClick={() => window.open(link, '_blank')} title={ban ? '暂时搁置' : ''}>
            <div className={style.texts}>
                <div className={style.title}>
                    {icon && <img src={icon} />}
                    <p>{name}</p>
                </div>
                <p>{bro}</p>
            </div>
        </div>
    );
}

function ProgramLabels({ datas }: { datas: ProgramLabelProps[] }) {
    return (
        <div className={style.group}>
            {datas.map((data, i) => (
                <ProgramLabel {...data} key={i} />
            ))}
        </div>
    );
}

interface GamesProps {
    src: string;
    text: React.ReactNode;
}

function Games({ datas }: { datas: GamesProps[] }) {
    let [select, setSelect] = useState(0);
    return (<>
        <div className={style.imageGroup}>
            {datas.map(({ src }, i) => (
                <img
                    className={style.gameImage}
                    onClick={() => setSelect(i)}
                    src={src}
                    key={i}
                    style={select === i ? { borderColor: '#266ed4' } : {}}
                />
            ))}
        </div>
        {datas[select].text}
    </>);
}

export default function Index() {
    return (
        <Main>
            <div id="middleText"><p>I▽I</p></div>
            <div>
                <p>这里是 Slouchwind</p>
                <p>也可以叫我春鹄</p>
                <div className={style.center}>
                    <Labels texts={['INFP', '二次元', '编程', '高中牲']} />
                </div>
                <p>简短介绍一下我只及：</p>
                <p>INFP → 健全小蝴蝶 / Fi,Ne / 9w8</p>
                <p>二次元 → 京阿尼 / 废萌 / <a href='https://bgm.tv/user/slouchwind'>Bangumi</a></p>
                <p>编程 → 会拼写 JavaScript / TypeScript / Python / Rust / Golang</p>
                <p>高中牲 → 废物 / 风景 / 摆烂</p>
                <p>游戏 → Phigros / Project SEKAI / Muse Dash / MineCraft / <a href='#game'>...</a></p>
            </div>
            <br />
            <AccountLabels
                datas={[
                    {
                        icon: 'https://github.githubassets.com/favicons/favicon-dark.svg',
                        username: 'Slouchwind',
                        link: 'https://github.com/Slouchwind',
                    },
                    {
                        icon: './twitter.svg',
                        username: 'Slouchwind',
                        id: 'slouchwind',
                        link: 'https://twitter.com/slouchwind',
                    },
                    {
                        icon: 'https://www.bilibili.com/favicon.ico',
                        username: 'Slouchwind春鹄',
                        link: 'https://space.bilibili.com/625209631',
                    },
                    {
                        icon: 'https://bgm.tv/img/favicon.ico',
                        username: 'Slouchwind',
                        id: 'slouchwind',
                        link: 'https://bgm.tv/user/slouchwind',
                    },
                ]}
            />
            <br />
            <div>
                <p className='subtitle'>项目</p>
                <p>以下是我做过的有用的项目</p>
            </div>
            <ProgramLabels
                datas={[
                    {
                        icon: 'https://momotalk.slouchwind.vercel.app/api/icon',
                        name: 'MomoTalk Editor',
                        bro: '一个网页端 MomoTalk 编辑器',
                        link: 'https://momotalk.slouchwind.vercel.app/',
                    },
                    {
                        icon: 'https://qixie.vercel.app/ico.svg',
                        name: '齐谐者 QiXiE',
                        bro: '一个致力于诗歌分享的网站',
                        link: 'https://qixie.vercel.app/',
                        ban: true,
                    },
                    {
                        name: 'typescript-ann',
                        bro: '初见 ANN 后写下来的',
                        link: 'https://github.com/Slouchwind/typescript-ann',
                    },
                    {
                        name: 'MinusCode',
                        bro: '基于一种减法分离一段数字的加密方法',
                        link: 'https://github.com/Slouchwind/MinusCode',
                    },
                    {
                        name: 'something-useless',
                        bro: '11 种编程语言的 Hello World',
                        link: 'https://github.com/Slouchwind/something-useless',
                    },
                ]}
            />
            <br />
            <p className='subtitle'>状态</p>
            <div className={style.imageGroup}>
                <img src='https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api?username=Slouchwind&theme=dark' />
                <img src='https://github-readme-stats.vercel.app/api/top-langs/?username=Slouchwind&size_weight=0.2&count_weight=0.8&hide=html&layout=compact&langs_count=8&theme=dark' />
            </div>
            <p className='subtitle' id='game'>游戏</p>
            <Games
                datas={[
                    {
                        src: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/99/72/ec/9972ec85-97b8-319b-de96-a6f9702586d3/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/460x0w.webp',
                        text: (<>
                            <p>Phigros</p>
                            <p>玩得频率最高的游戏，从疫情入坑起一直玩到现在</p>
                            <p>「您只有一点好」</p>
                        </>)
                    },
                    {
                        src: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/a2/e4/60/a2e460e3-90a6-df9d-6e92-f5442e4f1028/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/460x0w.webp',
                        text: (<>
                            <p>Arceae</p>
                            <p>在一次 Phigros 瓶颈期遇见，之后便一直留着，没事的时候就会玩一会儿</p>
                            <p>「卡车丢失」</p>
                        </>)
                    },
                    {
                        src: 'https://upload.wikimedia.org/wikipedia/zh/3/30/Pj_Sekai_app.png',
                        text: (<>
                            <p>Project SEKAI / プロセカ</p>
                            <p>在日本旅游时想起同学玩pjsk日服，就这样接触了，被尾判劝退，吃灰中</p>
                        </>)
                    },
                    {
                        src: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/75/ae/88/75ae88e3-7e9c-fea4-785c-a57cf4639ca4/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/460x0w.webp',
                        text: (<>
                            <p>Muse Dash</p>
                            <p>一次生日同学在Steam赠送给我，长期游玩中</p>
                        </>)
                    },
                    {
                        src: '/ico/needy_girl_overdose.ico',
                        text: (<>
                            <p>主播女孩重度依赖 / NEEDY GIRL OVERDOSE</p>
                            <p>很喜欢的游戏，早在小破站看过无数二创以及一篇万字解读，在 Steam 家庭共享白嫖后当天通宵，看完 Data 0 结局后仍沉浸其中</p>
                            <p>「神明大人...」</p>
                        </>)
                    },
                    {
                        src: '/ico/fire_and_ice.ico',
                        text: (<>
                            <p>冰与火之舞 / A Dance of Fire and Ice</p>
                            <p>个人接触过最有难度的音游，节奏感要求极高，当然特效也及其炫酷</p>
                        </>)
                    },
                ]}
            />
        </Main>
    );
}