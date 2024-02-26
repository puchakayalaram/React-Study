export default function Tab({onSelect,children,isSelected}){
    return(
        <li><button className={isSelected ? "active":""} onClick={onSelect}>{children}</button></li>
    )
}