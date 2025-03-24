import Button from '@repo/ui/Button';
import { Container, Header, Footer, Main } from '@repo/ui/Layout';
import Link from 'next/link';

export default function Page() {
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
        <Link href="/result">
          <Button>다음</Button>
        </Link>
      </Footer>
    </Container>
  );
}
