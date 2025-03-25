'use client';

import Button from '@repo/ui/Button';
import { Container, Header, Footer, Main } from '@repo/ui/Layout';
import useFetchData from '@/hooks/use-fetch-data';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import useDataStore from '@/store/data-store';

export default function Page() {
  const router = useRouter();
  const { mutate: fetchData } = useFetchData();
  const data = useDataStore(state => state.data);

  const handleClick = () => {
    fetchData(undefined, {
      onSuccess: () => {
        router.push('/result');
      },
    });
  };

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
        <Button onClick={handleClick}>다음</Button>
      </Footer>
    </Container>
  );
}
