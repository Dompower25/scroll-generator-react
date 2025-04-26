import { useCallback } from 'react';

type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

function useUpdateState<T>(setState: SetState<T>) {
  const updateState = useCallback((newState: Partial<T>) => {
    setState(prevState => ({
      ...prevState,
      ...newState,
    }));
  }, [setState]);

  return updateState;
}

export default useUpdateState;