import React from 'react';
import { motion } from 'motion/react';

interface ImageGalleryProps {
  images: string[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
      {images.map((src, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative overflow-hidden border-2 border-slate-700 bg-slate-800 aspect-[4/3] rounded-lg"
        >
          <img
            src={src}
            alt={`Gallery ${index + 1}`}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).style.opacity = '0';
              (e.target as HTMLImageElement).parentElement!.classList.add('flex', 'items-center', 'justify-center');
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
