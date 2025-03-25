'use client';

import Button from '@repo/ui/Button';
import { Container, Header, Footer, Main } from '@repo/ui/Layout';
import useFetchData from '@/hooks/use-fetch-data';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import useDataStore from '@/store/data-store';
import { useThrottle } from '@repo/hooks';

export default function Page() {
  const router = useRouter();
  const { mutate: fetchData } = useFetchData();
  const data = useDataStore(state => state.data);
  const [isLoading, setIsLoading] = useState(false);

  const handleClickWithThrottle = useThrottle(() => {
    setIsLoading(true);
    fetchData(undefined, {
      onSuccess: () => {
        router.push('/result');
      },
      onSettled: () => {
        setIsLoading(false);
      },
    });
  }, 500);

  useEffect(() => {
    if (data) {
      router.push('/result');
    }
  }, [data, router]);

  return (
    <Container>
      <Header>
        <p>김영현</p>
      </Header>
      <Main>
        <h1>안녕하세요</h1>
        <h1>김영현 입니다.</h1>
      </Main>
      <Footer>
        <Button onClick={handleClickWithThrottle} isLoading={isLoading}>
          다음
        </Button>
      </Footer>
    </Container>
  );
}
