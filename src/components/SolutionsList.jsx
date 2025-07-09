import React from 'react'

const solutions = [
  "Site Identification Ranking & Monitoring",
  "Remote Sensing Imagery & Spectral Analysis",
  "LiDAR & Photogrammetric 3D Modeling",
  "GIS Project Management – Planning & Execution",
  "Cartographic Design & Web Mapping",
  "Data Management & Custom Visualizations"
];

export default function SolutionsList() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-semibold mb-8 text-center">Turnkey Solutions</h2>
      <ul className="max-w-md mx-auto space-y-4 list-disc list-inside">
        {solutions.map((s, i) => (
          <li key={i} className="text-lg">{s}</li>
        ))}
      </ul>
    </section>
  );
}
