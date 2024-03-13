import * as React from 'react';
import './Block.css';

interface BlockProps {
  children: React.ReactNode;
}

export default function Block({ children }: BlockProps) {
  return <div className='BlockWrapper'>{children}</div>;
}
