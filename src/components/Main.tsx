import { BottomBar, TopBar } from "./Bar";

export default function Main({ children }: { children: React.ReactNode }) {
    return (<>
        <TopBar />
        <div style={{ width: '100%', height: 60 }} />
        {children}
        <BottomBar />
    </>)
}