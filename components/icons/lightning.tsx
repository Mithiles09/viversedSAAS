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
            d: "M219.71,117.38a12,12,0,0,0-7.25-8.52L161.28,88.39l10.59-70.61a12,12,0,0,0-20.64-10l-112,120a12,12,0,0,0,4.31,19.33l51.18,20.47L84.13,238.22a12,12,0,0,0,20.64,10l112-120A12,12,0,0,0,219.71,117.38ZM113.6,203.55l6.27-41.77a12,12,0,0,0-7.41-12.92L68.74,131.37,142.4,52.45l-6.27,41.77a12,12,0,0,0,7.41,12.92l43.72,17.49Z",
          }),
        ),
      ],
      [
        "regular",
        React.createElement(
          React.Fragment,
          null,
          React.createElement("path", {
            d: "M215.79,118.17a8,8,0,0,0-5-5.66L153.18,90.9l14.66-73.33a8,8,0,0,0-13.69-7l-112,120a8,8,0,0,0,3,13l57.63,21.61L88.16,238.43a8,8,0,0,0,13.69,7l112-120A8,8,0,0,0,215.79,118.17ZM109.37,214l10.47-52.38a8,8,0,0,0-5-9.06L62,132.71l84.62-90.66L136.16,94.43a8,8,0,0,0,5,9.06l52.8,19.8Z",
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
