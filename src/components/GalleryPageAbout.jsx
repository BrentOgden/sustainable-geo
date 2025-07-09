// src/pages/GalleryPage.jsx
import React from 'react'
import ImageGrid from './ImageGrid'
import grid1 from '../assets/aboutgrid1.jpeg'
import grid2 from '../assets/aboutgrid2.jpeg'
import grid3 from '../assets/aboutgrid3.jpeg'
import grid4 from '../assets/aboutgrid4.jpeg'
import grid5 from '../assets/aboutgrid5.jpeg'
import grid6 from '../assets/aboutgrid6.jpeg'


export default function GalleryPageAbout() {
  const galleryImages = [grid1, grid2, grid3, grid4, grid5, grid6]

  return (
    <div className="p-8">
      <ImageGrid images={galleryImages} columns={3} />
    </div>
  )
}
