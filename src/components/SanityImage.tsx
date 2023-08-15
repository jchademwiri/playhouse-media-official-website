// import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
// import Image from 'next/image'
// import { useNextSanityImage } from 'next-sanity-image'
// import config from '@/lib/sanity/config/client-sanity'


// interface Props {
//     asset: SanityImageSource
//     alt: string
//     caption?: string
// }


// export const SanityImage = (props: Props) => {
//     const { asset, alt, caption } = props
//     const imageProps = useNextSanityImage(config, asset)

//     if (!imageProps) return null

//     return (
//         <figure>
//             <Image
//                 {...imageProps}
//                 alt={alt}
//                 sizes="(max-width: 800px) 100vw, 800px"
//             />
//             {caption && (
//                 <figcaption className="mt-2 text-center italic text-sm text-gray-500 dark:text-gray-400">
//                     {caption}
//                 </figcaption>
//             )}
//         </figure>
//     )
// }