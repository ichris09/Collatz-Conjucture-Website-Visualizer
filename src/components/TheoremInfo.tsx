import React from 'react'

const TheoremInfo: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-blue-400">Collatz Conjecture</h2>
      <p className="mb-4">
        The Collatz conjecture is one of the most famous unsolved problems in mathematics. The conjecture asks whether repeating two simple arithmetic operations will eventually transform every positive integer into 1.
      </p>
      <h3 className="text-2xl font-semibold mb-2 text-blue-300">The Process:</h3>
      <ol className="list-decimal list-inside mb-4 space-y-2">
        <li>Start with any positive integer n.</li>
        <li>If n is even, divide it by 2.</li>
        <li>If n is odd, multiply it by 3 and add 1.</li>
        <li>Repeat the process with the resulting number.</li>
      </ol>
      <p className="mb-4">
        The conjecture is that no matter what number you start with, you will always eventually reach 1.
      </p>
      <p className="text-sm text-gray-400">
        Despite its simple appearance, the Collatz conjecture remains unproven after many years of mathematical investigation.
      </p>
    </div>
  )
}

export default TheoremInfo