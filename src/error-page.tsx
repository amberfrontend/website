import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError() as Error;

  return (
    <div id='error-page'>
      <h1>Not Found</h1>
      <p>Oops! I haven't coded that page yet.</p>
      <p>
        <i>{error.message}</i>
      </p>
    </div>
  );
}
