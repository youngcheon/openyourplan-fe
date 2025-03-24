import Button from '@repo/ui/Button';
import { Header, Footer, Main } from '@repo/ui/Layout';

export default function Page() {
  return (
    <div>
      <Header>
        <p>김영현</p>
      </Header>
      <Main>
        <h1>안녕하세요</h1>
        <h1>김영현 입니다.</h1>
      </Main>
      <Footer>
        <Button>버튼</Button>
      </Footer>
    </div>
  );
}
