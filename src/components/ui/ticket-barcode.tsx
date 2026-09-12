import * as React from "react"

interface BarcodeProps {
  className?: string
  orientation?: "vertical" | "horizontal"
}

export function Barcode({ className = "", orientation = "vertical" }: BarcodeProps) {
  const bars = [
    12, 3, 2, 6, 3, 10, 14, 4, 3, 16, 2, 2, 4, 13, 7, 3, 14, 8, 2, 3, 12, 4,
    2, 13, 5, 3, 15, 6, 2, 9, 3, 12,
  ]

  if (orientation === "horizontal") {
    return (
      <div className={`flex h-full w-full items-stretch justify-center gap-[3px] overflow-hidden ${className}`}>
        {bars.map((barWidth, index) => (
          <span
            key={index}
            className="block h-full flex-none bg-current"
            style={{ width: `${barWidth}px` }}
          />
        ))}
      </div>
    )
  }

  return (
    <div className={`flex h-full w-full flex-col justify-center gap-[4px] overflow-hidden ${className}`}>
      {bars.map((barHeight, index) => (
        <span
          key={index}
          className="block w-full flex-none bg-current"
          style={{ height: `${barHeight}px` }}
        />
      ))}
    </div>
  )
}
