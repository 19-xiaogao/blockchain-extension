import {
  RouterProvider
} from "react-router-dom";
import router from "~router"
import "./style.css"
import React from "react";

function IndexPopup() {

  // 设置整个宽度为 384px
  return <div className="w-96 h-[37rem] bg-dark overflow-y-hidden p-1">
    <RouterProvider router={router} />
  </div>
}

export default IndexPopup
