"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface SplineSceneProps {
  url: string
  className?: string
  style?: React.CSSProperties
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "spline-viewer": {
        url: string
        style?: React.CSSProperties
        className?: string
      }
    }
  }
}

export function SplineScene({ url, className = "", style = {} }: SplineSceneProps) {
  const splineRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Ensure the spline-viewer element is properly initialized
    if (splineRef.current) {
      splineRef.current.setAttribute("url", url)
    }
  }, [url])

  return <spline-viewer ref={splineRef} url={url} className={className} style={style} />
}
