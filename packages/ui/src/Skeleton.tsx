import { Box, Container, Header, Main, Section } from './Layout';

const Skeleton = () => {
  return (
    <Container className="relative animate-pulse">
      <Header>
        <div className="h-4 w-14 rounded bg-gray-200" />
      </Header>
      <Main>
        <Section>
          <div className="relative flex h-auto w-full">
            <div className="h-full w-full animate-pulse rounded-[24px] bg-gray-200" />
          </div>
          <div className="flex flex-col gap-4">
            <Box className="border border-gray-200">
              <div className="flex gap-2">
                <div className="h-4 w-14 rounded bg-gray-200" />
                <div className="h-4 w-full rounded bg-gray-200" />
              </div>
              <div className="flex gap-2">
                <div className="h-4 w-7 rounded bg-gray-200" />
                <div className="h-4 w-full rounded bg-gray-200" />
              </div>
            </Box>
            <Box className="border border-gray-200">
              <div className="flex gap-2">
                <div className="h-4 w-12 rounded bg-gray-200" />
                <div className="h-4 w-full rounded bg-gray-200" />
              </div>
              <div className="flex gap-2">
                <div className="h-4 w-11 rounded bg-gray-200" />
                <div className="h-4 w-full rounded bg-gray-200" />
              </div>
            </Box>
            <Box className="!flex-col border border-gray-200">
              <div className="flex gap-2">
                <div className="h-4 w-10 rounded bg-gray-200" />
                <div className="h-4 w-full rounded bg-gray-200" />
              </div>
              <div className="flex gap-2">
                <div className="h-4 w-20 rounded bg-gray-200" />
                <div className="h-4 w-full rounded bg-gray-200" />
              </div>
            </Box>
          </div>
        </Section>
      </Main>
    </Container>
  );
};

export default Skeleton;
