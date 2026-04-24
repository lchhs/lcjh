import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ImageGalleryProps {
  images: string[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openModal = (index: number) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const navigate = (direction: 'next' | 'prev', e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex === null) return;
    
    if (direction === 'next') {
      setSelectedIndex((prev) => (prev! + 1) % images.length);
    } else {
      setSelectedIndex((prev) => (prev! - 1 + images.length) % images.length);
    }
  };

  return (
    <>
      {/* Horizontal Scroll Layout */}
      <div className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-8 no-scrollbar scroll-smooth">
        {images.map((src, index) => (
            <motion.div
              key={index}
              layoutId={`gallery-image-${index}`}
              className="shrink-0 snap-center first:ml-0 last:mr-0 group relative overflow-hidden cursor-pointer border-2 border-slate-700 bg-slate-800 w-[85vw] sm:w-[450px] aspect-[4/3] rounded-lg"
              onClick={() => openModal(index)}
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.opacity = '0';
                  (e.target as HTMLImageElement).parentElement!.classList.add('flex', 'items-center', 'justify-center');
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-slate-500 text-sm font-medium z-0 text-center px-4 -z-10">
                等待上傳圖檔 {src}
              </div>
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-colors duration-300 flex items-center justify-center z-10">
                <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-8 h-8 drop-shadow-md" />
              </div>
            </motion.div>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/90 backdrop-blur-sm p-4 sm:p-8"
            onClick={closeModal}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 sm:top-8 sm:right-8 text-white/70 hover:text-white p-2 z-50 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => navigate('prev', e)}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 z-50 transition-colors"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => navigate('next', e)}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 z-50 transition-colors"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            {/* Main Image */}
            <motion.div
              layoutId={`gallery-image-${selectedIndex}`}
              className="relative max-w-5xl max-h-full w-full h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()} // Prevent close when clicking image
            >
              <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                 <img
                    src={images[selectedIndex]}
                    alt={`Gallery Full ${selectedIndex + 1}`}
                    className="max-w-full max-h-[85vh] object-contain border-4 border-white shadow-2xl rounded-sm"
                 />
              </div>
              <div className="absolute bottom-4 left-0 right-0 text-center text-white/50 text-sm tracking-widest font-mono">
                {selectedIndex + 1} / {images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
