import { useParams } from "react-router-dom"

export function ActiveDetails() {
    let { active } = useParams();

    return(
        <p>Details {active}</p>
    )
}