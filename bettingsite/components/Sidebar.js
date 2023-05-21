import React from 'react'
import { ScrollArea } from '@mantine/core'

export default function Sidebar() {

    const games = [
        {
            name: 'Tennis',
        },
        {
            name: 'Football',
        },
        {
            name: 'Baseball',
        },
        {
            name: 'Basketball',
        },
        {
            name: 'American Football',
        },
        {
            name: 'Table tennis',
        },
        {
            name: 'E-sport',
        },
        {
            name: 'Volleyball',
        },
        {
            name: 'Running',
        },
        {
            name: 'Badwinton',
        },
        {
            name: 'Golf',
        },
        {
            name: 'Tennis',
        },
        {
            name: 'Football',
        },
        {
            name: 'Baseball',
        },
        {
            name: 'Basketball',
        },
        {
            name: 'American Football',
        },
    ];
  return (
    <div className='bg-[#126E51]'>
        <ScrollArea h={500}>
        <div className='space-y-4 font-semibold text-white p-4 cursor-pointer'>
            {games.map((game) => (
               <div className='hover:text-gray-400'>{game.name}</div>
))}
        </div>
        </ScrollArea>
    </div>
  )
};
