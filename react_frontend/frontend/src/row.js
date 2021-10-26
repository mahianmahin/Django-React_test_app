const Row = (props) => {
    const url = "https://ourapi.pythonanywhere.com/api/users/"

    const deleteHandler = id => {
        fetch(`${url}${id}/`, {
            method: 'DELETE'
        }).then(response => response.json()).then(result => {
            // alert(result.msg);
            window.location.reload();
        }).catch(error => console.log(`Error: ${error}`));
    }

    const updateHandler = id => {
        console.log(id);
    }

    return (
        props.users.map(item => 
            <td>
                <tr>{item.id}</tr>
                <tr>{item.name}</tr>
                <tr>{item.email}</tr>
                <tr>{item.city}</tr>

                <tr><button onClick={() => deleteHandler(item.id)}>Delete</button> &nbsp; 
                
                <button onClick={() => updateHandler(item.id)}>Edit</button></tr>

            </td>
        )
    )
}

export default Row;