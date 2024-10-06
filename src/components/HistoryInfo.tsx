import React from 'react'

const HistoryInfo: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-blue-400">History of the Collatz Conjecture</h2>
      <ul className="space-y-4">
        <li>
          <strong className="text-blue-300">1937:</strong> The problem was first proposed by Lothar Collatz, a German mathematician.
        </li>
        <li>
          <strong className="text-blue-300">1950s:</strong> The conjecture gained popularity among mathematicians.
        </li>
        <li>
          <strong className="text-blue-300">1970s:</strong> Computer scientists began using computers to test the conjecture for large numbers.
        </li>
        <li>
          <strong className="text-blue-300">1980s:</strong> Jeffrey Lagarias compiled an annotated bibliography of 180 different papers on the conjecture.
        </li>
        <li>
          <strong className="text-blue-300">2011:</strong> The conjecture was verified for all numbers up to 5 × 10^18 by Tomás Oliveira e Silva.
        </li>
        <li>
          <strong className="text-blue-300">Present day:</strong> The Collatz conjecture remains unsolved and continues to fascinate mathematicians and computer scientists alike.
        </li>
      </ul>
      <p className="mt-4 text-sm text-gray-400">
        Despite its apparent simplicity, the Collatz conjecture has resisted all attempts at a proof for over 80 years, earning it the nickname "the simplest math problem no one can solve."
      </p>
    </div>
  )
}

export default HistoryInfo