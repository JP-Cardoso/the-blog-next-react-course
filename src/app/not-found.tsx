import ErrorMessage from '@/components/ErrorMessage';

export default function NotFoundPage() {
  const pageTitle = 'Página não encontrada';
  const contentTitle = '404';
  const content = `Erro 404 - A página que você está tentando acessar não existe nesse site.`;

  return (
    <ErrorMessage
      pageTitle={pageTitle}
      cotentTitle={contentTitle}
      content={content}
    />
  );
}
