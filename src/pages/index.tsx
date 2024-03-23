import Main from '@/Main';
import MiddleText from '@/MiddleText';
import style from '@style/Index.module.scss';

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

export default function Index() {
    return (
        <Main>
            <MiddleText />
            <div>
                <p>这里是 Slouchwind</p>
                <p>也可以叫我春鹄</p>
                <div className={style.center}>
                    <Labels texts={['INFP', '二次元', '编程', '高中牲']} />
                </div>
                <p>简短介绍一下我只及：</p>
                <p>二次元 → 京阿尼(看我的 <a href='https://bgm.tv/user/slouchwind'>Bangumi</a>)</p>
                <p>编程 → 会拼写 JavaScript / TypeScript / Python / Rust / Golang</p>
                <p>高中牲 → 偏理，但不是若只理科生</p>
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
        </Main>
    );
}