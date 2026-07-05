


import Switch from "./form/Switch";
import Input from "./Input";


const AuthFormikControl = (props) => {
    switch (props.control) {
        case 'input':
            return <Input {...props}/>
        case 'switch':
            return <Switch {...props}/>
        // case 'date':
        //     return <Date {...props}/>
        // case 'file':
        //     return <File {...props}/>
        default:
            return null
    }
}

export default AuthFormikControl;