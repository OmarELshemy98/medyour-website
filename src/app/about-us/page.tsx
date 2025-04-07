"use client";

import { FC } from 'react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const HomePage: FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/about-us');
  }, [router]);

  return null;
};

export default HomePage;