import Link from 'next/link';

export default function Header() {
  return (
<header className='sticky top-0 z-10 bg-gradient-to-r from-pink-100 via-white to-blue-100 backdrop-blur-md h-[90px] flex items-center px-6 border-b-2 border-gray-200 shadow-md'>
  <Link href='/' className='text-3xl font-semibold text-gray-800 hover:text-blue-500 transition duration-300'>
    LJG Blog
  </Link>
</header>
  );
}
