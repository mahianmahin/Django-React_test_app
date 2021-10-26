const Row = (props) => {
    return (
        props.users.map(item => 
            <td>
                <tr>{item.id}</tr>
                <tr>{item.name}</tr>
                <tr>{item.email}</tr>
                <tr>{item.city}</tr>
                <tr><button>Delete</button> &nbsp; <button>Edit</button></tr>
            </td>
        )
    )
}

export default Row;