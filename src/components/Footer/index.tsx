import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='pb-2'>
      <p className='text-center'>
        <span>Copyright &copy; {new Date().getFullYear()} - </span>
        <Link href={'/'}>The blog</Link>
      </p>
    </footer>
  );
}
