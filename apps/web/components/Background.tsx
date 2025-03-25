import Image from 'next/image';

interface BackgroundProps {
  imageUrl: string;
}

const Background = ({ imageUrl }: BackgroundProps) => {
  return (
    <>
      <Image src={imageUrl} alt="image" fill className="absolute -z-10 object-cover blur-2xl" />
      <Image src="/pattern.png" alt="background" fill className="absolute -z-10 object-cover blur-lg" />
      <div className="absolute -z-10 h-full w-full bg-black/30" />
      <div className="absolute -z-10 h-full w-full bg-gradient-to-b from-transparent to-[#D9D9D9]" />
    </>
  );
};

export default Background;
