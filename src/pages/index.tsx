import { ApiService, useQuery } from '@frontend/services/api.service';

function getData() {
  return ApiService.message.hello({ name: 'Vien' });
}

export async function getServerSideProps(context: any) {
  const initialData = await getData();
  return { props: { initialData } };
}

interface Props {
  initialData: string;
  host: string;
}

export default function Page({ initialData }: Props) {
  const { loading, data, error, refetch } = useQuery(getData, { deps: [], initialData });

  if (loading) return <p>Loading ...</p>;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>{data}</h1>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
}
