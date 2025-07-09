// src/components/ImageGrid.jsx
import React from 'react'
import grid1 from '../assets/grid1.jpeg'
import grid2 from '../assets/grid2.jpeg'
import grid3 from '../assets/grid3.jpeg'
import grid4 from '../assets/grid4.jpeg'
import grid5 from '../assets/grid5.jpeg'
import grid6 from '../assets/grid6.jpeg'

/**
 * ImageGrid
 * @param {Object} props
 * @param {string[]} [props.images] — array of image URLs (defaults to grid1–grid5)
 * @param {number} [props.columns=3] — number of columns on md+ screens
 */
export default function ImageGrid({
  images = [grid1, grid2, grid3, grid4, grid5, grid6],
  columns = 3,
}) {
  // build the responsive grid-cols classes
  const gridColsClass = `grid-cols-1 sm:grid-cols-2 md:grid-cols-3`

  return (
    <div className={`grid ${gridColsClass} gap-0`}>
      {images.map((src, i) => (
        <div key={i} className="overflow-hidden">
          <img
            src={src}
            alt={`Grid image ${i + 1}`}
            className="
              w-full
              h-72
              mb-2
              md:mb-0
              object-cover
              transform
              transition
              duration-300
              ease-in-out
              hover:scale-110
            "
          />
        </div>
      ))}
    </div>
  )
}
