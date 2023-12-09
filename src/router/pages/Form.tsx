import UserForm from "../../users/context/UserForm";
import UserFormRedux from "../../users/redux/components/UserFormRedux";

const Form = () => {
    return (
        <>
            <h1>1. User Form Context</h1>
            <UserForm />

            <h1>2. User Form Redux and Thunk</h1>
            <UserFormRedux />
        </>
    )
}

export default Form;