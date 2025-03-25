import { useMutation } from '@tanstack/react-query';
import useDataStore from '@/store/data-store';

const fetchData = async () => {
  const res = await fetch('https://picsum.photos/id/0/info');
  if (!res.ok) {
    throw new Error('사진 정보를 불러오는데 실패했습니다.');
  }
  return res.json();
};

const useFetchData = () => {
  const setData = useDataStore(s => s.setData);

  return useMutation({
    mutationFn: fetchData,
    onSuccess: data => {
      setData(data);
    },
    onError: error => {
      console.error('사진 조회 실패:', error);
    },
  });
};

export default useFetchData;
