import { useNavigate } from 'react-router-dom';

type ErrorFallbackProps = {
  resetErrorBoundary: (...args: unknown[]) => void;
}

const ErrorFallback = ({ resetErrorBoundary }: ErrorFallbackProps) => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 className="logo-font">There was an error!</h1>
      <div className="btn-group">
        <button type="button" className="btn btn-outline-danger" onClick={() => resetErrorBoundary()}>
          Try again
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => {
            navigate('/', { replace: true });
            window.location.reload();
          }}
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default ErrorFallback;
