import React from 'react'


const games = [
    {
        team1: 'Real Madrid',
        team2: 'Barcelona',
        odds1: '1.20',
        odds2: '1.5',
        odds3: '2.0',
    },
    {
        team1: 'Arsenal',
        team2: 'ManCity',
        odds1: '1.75',
        odds2: '1.0',
        odds3: '1.8',
    },
    {
        team1: 'Leeds',
        team2: 'New Castle',
        odds1: '1.20',
        odds2: '1.2',
        odds3: '3.0',
    },
    {
        team1: 'Liverpool',
        team2: 'ManU',
        odds1: '2.0',
        odds2: '1.0',
        odds3: '1.5',
    },
    {
        team1: 'Real Madrid',
        team2: 'Barcelona',
        odds1: '1.20',
        odds2: '1.5',
        odds3: '2.0',
    },
    {
        team1: 'Arsenal',
        team2: 'ManCity',
        odds1: '1.75',
        odds2: '1.0',
        odds3: '1.8',
    },
    {
        team1: 'Leeds',
        team2: 'New Castle',
        odds1: '1.20',
        odds2: '1.2',
        odds3: '3.0',
    },
    {
        team1: 'Liverpool',
        team2: 'ManU',
        odds1: '2.0',
        odds2: '1.0',
        odds3: '1.5',
    },
    {
        team1: 'Real Madrid',
        team2: 'Barcelona',
        odds1: '1.20',
        odds2: '1.5',
        odds3: '2.0',
    },
    {
        team1: 'Arsenal',
        team2: 'ManCity',
        odds1: '1.75',
        odds2: '1.0',
        odds3: '1.8',
    },
    {
        team1: 'Leeds',
        team2: 'New Castle',
        odds1: '1.20',
        odds2: '1.2',
        odds3: '3.0',
    },
    {
        team1: 'Liverpool',
        team2: 'ManU',
        odds1: '2.0',
        odds2: '1.0',
        odds3: '1.5',
    },
    {
        team1: 'Real Madrid',
        team2: 'Barcelona',
        odds1: '1.20',
        odds2: '1.5',
        odds3: '2.0',
    },
    {
        team1: 'Arsenal',
        team2: 'ManCity',
        odds1: '1.75',
        odds2: '1.0',
        odds3: '1.8',
    },
    {
        team1: 'Leeds',
        team2: 'New Castle',
        odds1: '1.20',
        odds2: '1.2',
        odds3: '3.0',
    },
    {
        team1: 'Liverpool',
        team2: 'ManU',
        odds1: '2.0',
        odds2: '1.0',
        odds3: '1.5',
    },
    {
        team1: 'Real Madrid',
        team2: 'Barcelona',
        odds1: '1.20',
        odds2: '1.5',
        odds3: '2.0',
    },
    {
        team1: 'Arsenal',
        team2: 'ManCity',
        odds1: '1.75',
        odds2: '1.0',
        odds3: '1.8',
    },
    {
        team1: 'Leeds',
        team2: 'New Castle',
        odds1: '1.20',
        odds2: '1.2',
        odds3: '3.0',
    },
    {
        team1: 'Liverpool',
        team2: 'ManU',
        odds1: '2.0',
        odds2: '1.0',
        odds3: '1.5',
    },
];
export default function Featured() {
  return (
    <div className='bg-[#126E51]'>
        <div className='grid grid-cols-3'>
            {games.map((game) => (
                <div className='p-10'>
                    <div className='text-white font-semibold text-sm text-center pb-1'>{game.team1} - {game.team2}</div>
                
                <div className='grid grid-cols-3 text-center text-white border-2 rounded-xl font-semibold cursor-pointer'>
                    <div className='border-r-2 hover:bg-white rounded-l-md hover:text-black'>{game.odds1}</div>
                    <div className='hover:bg-white hover:text-black'>{game.odds2}</div>
                    <div className='border-l-2 hover:bg-white rounded-r-md hover:text-black'>{game.odds3}</div>
                </div>
                </div>
                
            ))}
        </div>
    </div>
  )
}
