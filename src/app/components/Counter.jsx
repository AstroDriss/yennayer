'use client'

import React, { useEffect, useState } from 'react'

const countDownDate = new Date("Jan 13, 2024 15:37:25").getTime();

const Block = ({text, num}) => {
    return (
        <div className='flex flex-col rounded-md items-center bg-white/70 border-2 backdrop-blur-md border-white p-1'>
            <span>{num.toString()}</span>
            <span className='text-[10px] text-gray-400 leading-[1]'>{text}</span>
        </div>
    )
}

const Counter = () => {

    const [time, setTme] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })

    useEffect(() => {
        const intervalID = setInterval(() => {
            const now = new Date().getTime();

            const distance = countDownDate - now;
    
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
              (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTme({days, hours, minutes, seconds})

            if (distance < 0) {
                clearInterval(intervalID);
                eventInfo.title = 'Expired'
            }


        }, 1000)

        // return clearInterval(intervalID)
    }, [])

  return (
    <div className="grid grid-cols-4 gap-2 text-xl mb-2">
        <Block text="days" num={time.days} />
        <Block text="hours" num={time.hours} />
        <Block text="minutes" num={time.minutes} />
        <Block text="seconds" num={time.seconds} />
    </div>
  )
}

export default Counter