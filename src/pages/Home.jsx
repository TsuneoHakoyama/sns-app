import { useContext } from "react"
import { Navigate } from "react-router";

import { SessionContext } from "../SessionProvider"

export function Home() {
    const { currentUser } = useContext(SessionContext);

    if (currentUser == null) return <Navigate replace to="/signin" />;

    return (
        <h1>Home画面</h1>
    )
}