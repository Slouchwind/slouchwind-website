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
        <div className={style.accounts}>
            {datas.map((data, i) => (
                <AccountLabel {...data} key={i} />
            ))}
        </div>
    );
}

interface ProgramLabelProps {
    icon: string;
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
                    <img src={icon} />
                    <p>{name}</p>
                </div>
                <p>{bro}</p>
            </div>
        </div>
    );
}

function ProgramLabels({ datas }: { datas: ProgramLabelProps[] }) {
    return (
        <div className={style.accounts}>
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
                <p>二次元 {'->'} 京阿尼、Key社(但是不全)</p>
                <p>编程 {'->'} 会拼写 JavaScript / TypeScript / Python / Rust / Golang</p>
                <p>高中牲 {'->'} 偏理，但不是若只理科生</p>
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
                ]}
            />
            <br />
            <div>
                <p className='subtitle'>项目</p>
                <p>以下是我做过的项目</p>
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
                        bro: '分享与欣赏诗词',
                        link: 'https://qixie.vercel.app/',
                        ban: true,
                    },
                ]}
            />
        </Main>
    );
}