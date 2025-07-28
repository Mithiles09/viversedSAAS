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
            d: "M236,208a12,12,0,0,1-12,12H32a12,12,0,0,1-12-12V48a12,12,0,0,1,24,0v85.55L88.1,95a12,12,0,0,1,15.1-.57l56.22,42.16L216.1,87A12,12,0,1,1,231.9,105l-64,56a12,12,0,0,1-15.1.57L96.58,119.44,44,165.45V196H224A12,12,0,0,1,236,208Z",
          }),
        ),
      ],
      [
        "regular",
        React.createElement(
          React.Fragment,
          null,
          React.createElement("path", {
            d: "M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0v94.37L90.73,98a8,8,0,0,1,10.07-.38l58.81,44.11L218.73,90a8,8,0,1,1,10.54,12l-64,56a8,8,0,0,1-10.07.38L96.39,114.29,40,163.63V200H224A8,8,0,0,1,232,208Z",
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
