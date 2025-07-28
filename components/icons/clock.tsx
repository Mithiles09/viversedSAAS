"use client"

import React from "react"

let Component: Map<string, React.ReactElement>
let IconInner: React.ForwardRefExoticComponent<any>

const Icon = (React: any) => {
  if (!Component) {
    Component = new Map([
      [
        "bold",
        React.createElement(
          React.Fragment,
          null,
          React.createElement("path", {
            d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm68-84a12,12,0,0,1-12,12H128a12,12,0,0,1-12-12V72a12,12,0,0,1,24,0v44h44A12,12,0,0,1,196,128Z",
          }),
        ),
      ],
      [
        "regular",
        React.createElement(
          React.Fragment,
          null,
          React.createElement("path", {
            d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z",
          }),
        ),
      ],
    ])
    IconInner = React.forwardRef((props: any, ref: any) =>
      React.createElement("g", { ref, ...props }, Component.get(props.weight || "regular")),
    )
  }
  return IconInner
}

export default Icon(React)
