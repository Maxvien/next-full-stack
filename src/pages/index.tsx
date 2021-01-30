import { ApiService, useQuery } from '@frontend/services/api.service';
import { EnvService } from '@shared/services/env.service';

function getData() {
  return ApiService.message.hello({ name: 'Vien' });
}

export async function getServerSideProps(context: any) {
  const { req, query, res, asPath, pathname } = context;

  // const initialData = await getData();
  return { props: { initialData: 'Test', host: EnvService.get('PORT') } };
}

interface Props {
  initialData: string;
  host: string;
}

export default function Page({ initialData, host }: Props) {
  const { loading, data, error, refetch } = useQuery(
    async () => {
      return ApiService.message.hello({ name: 'Vien' });
    },
    { deps: [], initialData }
  );

  console.log(host);

  if (loading) return <p>Loading ...</p>;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>{data}</h1>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
}
