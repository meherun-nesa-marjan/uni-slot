import Image from 'next/image';
import React from 'react';

export default function Gallery() {
  return (
    <section className="max-w-7xl mx-auto px-4 my-12">
      <h2 className="text-2xl font-bold mb-6 text-center">🎓 College Gallery</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <div className='overflow-hidden rounded-lg group'>
            <Image
              src="/Images/1.jpg"
              alt="Graduation group 1"
              width={400}
              height={300}
              className="h-auto max-w-full rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-[1deg] group-hover:shadow-lg"
            />
          </div>
          <div className='overflow-hidden rounded-lg group'>
            <Image
              src="/Images/2.jpg"
              alt="Graduation group 2"
              width={400}
              height={300}
              className="h-auto max-w-full rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-[1deg] group-hover:shadow-lg"
            />
          </div>
          <div className='overflow-hidden rounded-lg group'>
            <Image
              src="/Images/3.jpg"
              alt="Graduation group 3"
              width={400}
              height={300}
              className="h-auto max-w-full rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-[1deg] group-hover:shadow-lg"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div className='overflow-hidden rounded-lg group'>
            <Image
              src="/Images/4.jpg"
              alt="Graduation group 4"
              width={400}
              height={300}
              className="h-auto max-w-full rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-[1deg] group-hover:shadow-lg"
            />
          </div>
          <div className='overflow-hidden rounded-lg group'>
            <Image
              src="/Images/4.jpg"
              alt="Graduation group 5"
              width={400}
              height={300}
              className="h-auto max-w-full rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-[1deg] group-hover:shadow-lg"
            />
          </div>
          <div className='overflow-hidden rounded-lg group'>
            <Image
              src="/Images/2.jpg"
              alt="Graduation group 6"
              width={400}
              height={300}
              className="h-auto max-w-full rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-[1deg] group-hover:shadow-lg"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div className='overflow-hidden rounded-lg group'>
            <Image
              src="/Images/2.jpg"
              alt="Graduation group 7"
              width={400}
              height={300}
              className="h-auto max-w-full rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-[1deg] group-hover:shadow-lg"
            />
          </div>
          <div className='overflow-hidden rounded-lg group'>
            <Image
              src="/Images/1.jpg"
              alt="Graduation group 8"
              width={400}
              height={300}
              className="h-auto max-w-full rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-[1deg] group-hover:shadow-lg"
            />
          </div>
          <div className='overflow-hidden rounded-lg group'>
            <Image
              src="/Images/3.jpg"
              alt="Graduation group 9"
              width={400}
              height={300}
              className="h-auto max-w-full rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-[1deg] group-hover:shadow-lg"
            />
          </div>
        </div >
         <div className="grid gap-4">
          <div className='overflow-hidden rounded-lg group'>
            <Image
              src="/Images/4.jpg"
              alt="Graduation group 4"
              width={400}
              height={300}
              className="h-auto max-w-full rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-[1deg] group-hover:shadow-lg"
            />
          </div>
          <div className='overflow-hidden rounded-lg group'>
            <Image
              src="/Images/2.jpg"
              alt="Graduation group 5"
              width={400}
              height={300}
              className="h-auto max-w-full rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-[1deg] group-hover:shadow-lg"
            />
          </div>
          <div className='overflow-hidden rounded-lg group'>
            <Image
              src="/Images/1.jpg"
              alt="Graduation group 6"
              width={400}
              height={300}
              className="h-auto max-w-full rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-[1deg] group-hover:shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
