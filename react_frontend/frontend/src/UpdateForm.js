import { useRef } from "react";

const UpdateForm = (props) => {
    const nameField = useRef();
    const emailField = useRef();
    const cityField = useRef();

    const updateHandler = (event) => {
        event.preventDefault();
    
        const formData = {
          name: nameField.current.value,
          email: emailField.current.value,
          city: cityField.current.value
        }
    
        const readyFormData = JSON.stringify(formData);
    
        fetch(props.url, {
          method: 'PUT',
          body: readyFormData,
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(response => response.json()).then(result => {
          console.log("done");
        }).catch(error => console.log(error));
    }

    return (
        <form onSubmit={updateHandler}>
            <input type="text" ref={nameField} placeholder="Name" value="" />
            <input type="email" ref={emailField} placeholder="Email" value="" />
            <input type="City" ref={cityField} placeholder="City" value="" />
            <button>Update</button>
        </form>
    )
}