// src/pages/GalleryPage.jsx
import React from 'react'
import ImageGrid from '../components/ImageGrid'
import grid1 from '../assets/grid1.jpeg'
import grid2 from '../assets/grid2.jpeg'
import grid3 from '../assets/grid3.jpeg'
import grid4 from '../assets/grid4.jpeg'
import grid5 from '../assets/grid5.jpeg'
import grid6 from '../assets/grid6.jpeg'


export default function GalleryPage() {
  const galleryImages = [grid1, grid2, grid3, grid4, grid5, grid6]

  return (
    <div className="p-8">
      <ImageGrid images={galleryImages} columns={3} />
    </div>
  )
}
