import About from '@/components/(front)/About/About'
import { getGenerals } from '@/lib/utils/getGenerals';
import { generalsTypes } from '@/types/generalTypes';
import React from 'react'

async function page() {
  const generals: generalsTypes = await getGenerals();
  return (
    <section className='lg:mt-12 mt-4'>
        <About generals={generals} />
    </section>
  )
}

export default page