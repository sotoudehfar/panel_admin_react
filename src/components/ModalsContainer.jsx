import { createPortal } from "react-dom";

export default function ModalsContainer({children}) {
  
  return createPortal(
  <>
  {children}
  </>,
  document.getElementById("modals-root")
  )
}
