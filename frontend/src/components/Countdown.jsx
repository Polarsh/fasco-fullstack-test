import { useState, useEffect } from 'react'

export default function Countdown() {
  const calculateTimeLeft = () => {
    const now = new Date()
    const targetDate = new Date(now.getFullYear(), 11, 25)
    const difference = targetDate - now

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className='mt-12'>
      <p className='text-3xl font-semibold text-gray-700'>
        Hurry, Before It’s Too Late!
      </p>
      <div className='flex gap-4 mt-4'>
        {Object.entries(timeLeft).map(([unit, value], index) => (
          <div key={index}>
            <div className='flex flex-col items-center bg-white rounded-xl shadow-lg w-16 h-20 justify-center text-center'>
              {/* Número */}
              <div className='text-3xl font-bold text-gray-800'>
                {String(value).padStart(2, '0')}
              </div>
            </div>
            {/* Unidad */}
            <div className='text-base text-center font-bold text-gray-500 capitalize mt-1'>
              {unit}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
