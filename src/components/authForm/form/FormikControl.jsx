import File from "./File";
import MultiSelect from "./MultiSelect";
import SearchableSelect from "./SearchableSelect";
import Select from "./Select";
import Switch from "./Switch";
import Textarea from "./Textarea";
import Quilleditor from "./Quilleditor";
import Input from "./Input";
import Date from "./Date";

const FormikControl = (props) =>{

switch(props.control){
    case "select":
        return <Select {...props}/>
    case "multiSelect":
        return <MultiSelect {...props}/>
    case "searchableSelect":
        return <SearchableSelect {...props}/>    
    case "input":
        return <Input {...props}/>
    case "textarea":
        return <Textarea {...props}/>
    case "file":
        return <File {...props}/>
    case "switch":
        return <Switch {...props}/>
    case "quilleditor":
        return <Quilleditor {...props}/>
       case "date":
    return <Date {...props}/>
    default:
        return null

}
}

export default FormikControl;