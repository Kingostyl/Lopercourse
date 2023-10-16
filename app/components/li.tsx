import clsx from "clsx";


type custom = "landing-li"

interface LiProps {
    title: string
    custom:custom
    herf: string
}

const Li: React.FC<LiProps & React.LiHTMLAttributes<HTMLLIElement>> = ({title, custom, herf}) => {
    return (
        <li className={clsx(``, {
            "hover:underline font-semibold cursor-pointer": custom === "landing-li"
        })}>
            <a href={herf}>{title}</a>
        </li>
    )
}

export default Li;