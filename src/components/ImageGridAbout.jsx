// src/components/ImageGrid.jsx
import React from 'react'
import grid1 from '../assets/aboutgrid1.jpeg'
import grid2 from '../assets/grid2.jpeg'
import grid3 from '../assets/aboutgrid3.jpeg'
import grid4 from '../assets/aboutgrid4.jpeg'
import grid5 from '../assets/aboutgrid5.jpeg'
import grid6 from '../assets/aboutgrid6.jpeg'

/**
 * ImageGrid
 * @param {Object} props
 * @param {string[]} [props.images] 
 * @param {number} [props.columns=3] 
 */
export default function ImageGridAbout({
  images = [grid1, grid2, grid3, grid4, grid5, grid6],
  columns = 3,
}) {
  
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
              object-cover
              transform
              transition
              duration-300
              ease-in-out
              hover:scale-110
              mb-2
              md:mb-0
            "
          />
        </div>
      ))}
    </div>
  )
}
