const NoticeItem = ({ notice }) => {
    return (
        <li>
            <div>{notice.id}</div>
            <div>{notice.title}</div>
        </li>
    )
}

export default NoticeItem;