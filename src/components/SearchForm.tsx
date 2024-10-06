"use client"

import { useState } from 'react'
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Search } from 'lucide-react';

export const SearchForm = () => {

  const [localQuery, setlocalQuery] = useState<string>('');

  return (  
    <form className="space-y-4">
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
