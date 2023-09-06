import {
  RouterProvider,
  Route
} from "react-router-dom";
import router from "~router"
import "./style.css"
function NewTab() {
  // 设置整个宽度为 384px
  return <div className="h-[100vh] bg-dark overflow-y-hidden">
    <RouterProvider router={router} />
  </div>
}

export default NewTab
