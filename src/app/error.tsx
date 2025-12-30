'use client';

import { useEffect } from 'react';
import ErrorMessage from '@/components/ErrorMessage';

type RootErrorProps = {
  error: Error;
  reset: () => void;
};

export default function RootErrorPage({ error }: RootErrorProps) {
  useEffect(() => {
    console.log('Captura de erros', error);
  }, [error]);

  return (
    <ErrorMessage
      content='Ocorreu um erro do qual nossa aplciação não conseguiu se recuperar. Tente novamente mais tarde'
      cotentTitle='501'
      pageTitle='Internal Server Error'
    />
  );
}
