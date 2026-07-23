

export default function ShowInFilter({rowData}) {
  return (
 <>
 <span className={rowData.in_filter ? "text-sucess" : "text-danger"}>
    {rowData.in_filter ? "هست" : "نیست"}
 </span>
 
 </>
  )
}
