"use client"

import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Search } from 'lucide-react';
import { searchProducts, setQuery } from '@/lib/redux/searchSlice';

export const SearchForm = () => {

  const [localQuery, setlocalQuery] = useState<string>('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setQuery(localQuery));
    console.log('Submitted query:', localQuery);
    dispatch(searchProducts({ query: localQuery}));
  }

  return (  
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className='flex gap-2'>
        <Input 
          type='text'
          placeholder='Busca lo que quieras...'
          value={localQuery}
          onChange={(e) => setlocalQuery(e.target.value)}
          className='flex-grow'
        />
        <Button type='submit' className='bg-primary text-primary-foreground'>
          <Search className="mr-2 h-4 w-4" /> Buscar
        </Button>
      </div>
    </form>
  )
}
