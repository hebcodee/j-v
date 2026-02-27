import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Maximize2, ChevronDown } from "lucide-react";

type MediaType = "image" | "video";

interface MediaItem {
  id: string;
  type: MediaType;
  url: string;
  title: string;
}

//player.mux.com/ora2v3JGF01IC01xCQdTmAdSwVfg00776sDmaEoFYfCmdg
//player.mux.com/5FsUQrpC00rEW9mhBbHZlobLfeGWM01S6FHVX0200R82Uro
//player.mux.com/aLj902x1aa9DOGNsK16aVYqV54QiyxqgGXDACM4j8b9A
//player.mux.com/ul00RzTpBg3ht01kIL9G4dRto91kcJtxW2tfMTE36IttA
//player.mux.com/B8FlFSdi01k2o9wKgCp5yfbTiVhFj86l00NZyehPNLcok
//player.mux.com/ZD55pg00WqzofzZEftsnNzS8uhNr6TUk00f9uW6McUS84
//player.mux.com/cbiOmzAnHIdqHyOOrvl3iDmByiF00eX00yrOk82ZzwaFs
const galleryData: MediaItem[] = [
  {
    id: "1",
    type: "image",
    url: "/imagem-1.jpeg",
    title: "Instalação Industrial",
  },
  {
    id: "2",
    type: "video",
    url: "https://player.mux.com/ora2v3JGF01IC01xCQdTmAdSwVfg00776sDmaEoFYfCmdg",
    title: "Manutenção em Ar Condicionado",
  },
  {
    id: "3",
    type: "image",
    url: "/imagem-2.jpeg",
    title: "Reparo de Sistema Central",
  },
  {
    id: "4",
    type: "video",
    url: "https://player.mux.com/ul00RzTpBg3ht01kIL9G4dRto91kcJtxW2tfMTE36IttA",
    title: "Câmara Fria Comercial",
  },
  {
    id: "5",
    type: "image",
    url: "/imagem-3.jpeg",
    title: "Limpeza de Filtros",
  },
  {
    id: "6",
    type: "video",
    url: "https://player.mux.com/5FsUQrpC00rEW9mhBbHZlobLfeGWM01S6FHVX0200R82Uro",
    title: "Câmara Fria Comercial",
  },
  {
    id: "7",
    type: "image",
    url: "/image-4.jpeg",
    title: "Processo de Higienização",
  },
  {
    id: "8",
    type: "video",
    url: "https://player.mux.com/aLj902x1aa9DOGNsK16aVYqV54QiyxqgGXDACM4j8b9A",
    title: "Câmara Fria Comercial",
  },
  {
    id: "9",
    type: "image",
    url: "/image-5.jpeg",
    title: "Câmara Fria Comercial",
  },
  {
    id: "10",
    type: "video",
    url: "https://player.mux.com/B8FlFSdi01k2o9wKgCp5yfbTiVhFj86l00NZyehPNLcok",
    title: "Câmara Fria Comercial",
  },
  {
    id: "11",
    type: "image",
    url: "/image-6.jpeg",
    title: "Projeto Especial 1",
  },
  {
    id: "12",
    type: "video",
    url: "https://player.mux.com/ZD55pg00WqzofzZEftsnNzS8uhNr6TUk00f9uW6McUS84",
    title: "Projeto em Execução",
  },
  {
    id: "13",
    type: "image",
    url: "/image-7.jpeg",
    title: "Projeto Especial 2",
  },
  {
    id: "14",
    type: "video",
    url: "https://player.mux.com/cbiOmzAnHIdqHyOOrvl3iDmByiF00eX00yrOk82ZzwaFs",
    title: "Detalhes de Instalação",
  },
  {
    id: "15",
    type: "image",
    url: "/image-8.jpeg",
    title: "Projeto Especial 3",
  },
  {
    id: "16",
    type: "image",
    url: "/image-9.jpeg",
    title: "Projeto Especial 4",
  },
  {
    id: "17",
    type: "image",
    url: "/image-10.jpeg",
    title: "Projeto Especial 5",
  },
  {
    id: "18",
    type: "image",
    url: "/image-11.jpeg",
    title: "Projeto Especial 6",
  },

  {
    id: "20",
    type: "image",
    url: "/image-13.jpeg",
    title: "Projeto Especial 8",
  },
  {
    id: "21",
    type: "image",
    url: "/image-14.jpeg",
    title: "Projeto Especial 9",
  },
  {
    id: "22",
    type: "image",
    url: "/image-15.jpeg",
    title: "Projeto Especial 10",
  },
  {
    id: "23",
    type: "image",
    url: "/image-16.jpeg",
    title: "Projeto Especial 11",
  },
  {
    id: "24",
    type: "image",
    url: "/image-17.jpeg",
    title: "Projeto Especial 12",
  },
  {
    id: "25",
    type: "image",
    url: "/image-18.jpeg",
    title: "Projeto Especial 13",
  },
];

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(9); // 3 colunas x 3 linhas

  const closeLightbox = () => setSelectedItem(null);

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Galeria de Serviços
          </h2>
          <p className="text-lg text-muted-foreground">
            Confira alguns dos nossos projetos e serviços realizados em campo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryData.slice(0, visibleCount).map((item) => (
            <motion.div
              key={item.id}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500"
              whileHover={{ y: -5 }}
              onClick={() => setSelectedItem(item)}
            >
              {item.type === "image" ? (
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-110"
                />
              ) : (
                <div className="w-full aspect-video bg-black overflow-hidden">
                  <iframe
                    src={item.url}
                    className="w-full h-full pointer-events-none"
                    loading="lazy"
                    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                  />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white font-bold text-lg">{item.title}</h3>
                <p className="text-blue-200 text-sm">
                  {item.type === "video" ? "Ver Vídeo" : "Ver Imagem"}
                </p>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                {item.type === "video" ? (
                  <Play className="text-white fill-current" size={20} />
                ) : (
                  <Maximize2 className="text-white" size={20} />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {visibleCount < galleryData.length && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setVisibleCount(galleryData.length)}
              className="flex flex-col items-center text-blue-600 hover:text-blue-700 focus:outline-none"
            >
              <span className="flex items-center justify-center w-14 h-14 rounded-full border border-blue-600 bg-white shadow-md hover:bg-blue-50 transition-colors">
                <ChevronDown className="w-6 h-6" />
              </span>
              <span className="mt-2 text-sm font-medium">Ver mais</span>
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[110]"
            >
              <X size={32} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedItem.type === "image" ? (
                <img
                  src={selectedItem.url}
                  alt={selectedItem.title}
                  className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                />
              ) : (
                <div className="w-full aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
                  <iframe
                    src={selectedItem.url}
                    className="w-full h-full"
                    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                    allowFullScreen
                  />
                </div>
              )}
              <div className="absolute -bottom-10 left-0 right-0 text-center">
                <p className="text-white font-medium text-lg">
                  {selectedItem.title}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
