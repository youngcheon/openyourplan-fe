import Link from 'next/link';
import Button from '@repo/ui/Button';

export default function NotFound() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-20">
      <h1>404 - 페이지를 찾을 수 없습니다.</h1>
      <Link href="/" className="w-36">
        <Button className="w-full">홈으로 돌아가기</Button>
      </Link>
    </div>
  );
}
