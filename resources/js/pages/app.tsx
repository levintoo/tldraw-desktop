import {Head} from "@inertiajs/react";
import { Tldraw } from 'tldraw'
import 'tldraw/tldraw.css'

export default function App() {
    return (
        <>
            <Head title="Home" />
            <div style={{ position: 'fixed', inset: 0 }}>
                <Tldraw  persistenceKey="localstorage" />
            </div>
        </>
    )
}
