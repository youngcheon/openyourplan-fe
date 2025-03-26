import Image from 'next/image';

interface BackgroundProps {
  imageUrl: string;
}

const Background = ({ imageUrl }: BackgroundProps) => {
  return (
    <>
      <Image src={imageUrl} alt="image" fill className="fixed -z-10 object-cover blur-2xl" />
      <Image src="/pattern.png" alt="background" fill className="fixed -z-10 object-cover blur-lg" />
      <div className="fixed top-0 -z-10 h-full w-full bg-black/30" />
      <div className="fixed top-0 -z-10 h-full w-full bg-gradient-to-b from-[#D9D9D9]/30 to-[#D9D9D9]" />
    </>
  );
};

export default Background;
