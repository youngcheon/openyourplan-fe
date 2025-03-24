import { Container, Header, Main, Section, Box } from '@repo/ui/Layout';
import Button from '@repo/ui/Button';
import Link from 'next/link';
import Image from 'next/image';
import { Data } from '@repo/types';

async function getData(): Promise<Data> {
  const res = await fetch('https://picsum.photos/id/0/info', { cache: 'no-store' });
  const data = await res.json();
  return data;
}

const ResultPage = async () => {
  const data = await getData();

  return (
    <Container className="relative">
      <Image src={data.download_url} alt="image" fill className="absolute inset-0 -z-10 object-cover blur-2xl" />
      <Image src="/pattern.png" alt="background" fill className="absolute inset-0 -z-10 object-cover blur-lg" />
      <div className="absolute inset-0 -z-10 bg-black/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-[#D9D9D9]" />
      <Header>
        <p className="text-white">김영현</p>
      </Header>
      <Main>
        <Section>
          <div className="relative flex h-auto w-full">
            <Image
              src={data.download_url}
              alt="image"
              width={500}
              height={500}
              className="h-auto w-full rounded-[24px] object-contain"
            />
          </div>
          <div className="flex flex-col gap-4">
            <Box>
              <div>
                <p>id</p>
                <p className="opacity-50">{data.id}</p>
              </div>
              <div>
                <p>author</p>
                <p className="opacity-50">{data.author}</p>
              </div>
            </Box>
            <Box>
              <div>
                <p>width</p>
                <p className="opacity-50">{data.width}</p>
              </div>
              <div>
                <p>height</p>
                <p className="opacity-50">{data.height}</p>
              </div>
            </Box>
            <Box className="!flex-col">
              <div>
                <p>url</p>
                <Link href={data.url} target="_blank" rel="noopener noreferrer" className="underline opacity-50">
                  {data.url}
                </Link>
              </div>
              <div>
                <p>download_url</p>
                <Link
                  href={data.download_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline opacity-50"
                >
                  {data.download_url}
                </Link>
              </div>
            </Box>
            <Link href="/" className="flex w-full items-center justify-center">
              <Button className="phone:!w-full tablet:!w-[154px] desktop:!w-[154px]">이전</Button>
            </Link>
          </div>
        </Section>
      </Main>
    </Container>
  );
};

export default ResultPage;
