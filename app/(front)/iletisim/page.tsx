import Contact from '@/components/(front)/Contact/Contact'
import { getGenerals } from '@/lib/utils/General/getGenerals'
import { generalsTypes } from '@/types/generalTypes'
import React from 'react'

async function page() {
  const generals: generalsTypes = await getGenerals();
  return (
    <section className='lg:mt-12 mt-4'>
        <Contact generals={generals} />
    </section>
  )
}

export default page