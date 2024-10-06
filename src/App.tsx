import React, { useState, Suspense } from 'react'
import { Canvas } from 'react-three-fiber'
import Plot from 'react-plotly.js'
import { Menu, X, ChevronRight, Info, History, LineChart } from 'lucide-react'
import CollatzModel from './components/CollatzModel'
import TheoremInfo from './components/TheoremInfo'
import HistoryInfo from './components/HistoryInfo'
import { generateCollatzSequence } from './utils/collatz'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeView, setActiveView] = useState('3d')
  const [startNumber, setStartNumber] = useState(27)
  const [sequence, setSequence] = useState(generateCollatzSequence(27))

  const toggleMenu = () => setMenuOpen(!menuOpen)

  const handleStartNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newStartNumber = parseInt(e.target.value, 10)
    if (newStartNumber > 0) {
      setStartNumber(newStartNumber)
      setSequence(generateCollatzSequence(newStartNumber))
    }
  }

  const renderContent = () => {
    switch (activeView) {
      case '3d':
        return (
          <div className="w-full h-full">
            <div className="absolute top-4 right-4 z-10">
              <label htmlFor="startNumber" className="mr-2">
                Start Number:
              </label>
              <input
                id="startNumber"
                type="number"
                min="1"
                value={startNumber}
                onChange={handleStartNumberChange}
                className="bg-gray-700 text-white px-2 py-1 rounded"
              />
            </div>
            <Canvas className="w-full h-full">
              <Suspense fallback={null}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <CollatzModel sequence={sequence} />
              </Suspense>
            </Canvas>
          </div>
        )
      case 'plot':
        return (
          <Plot
            data={[
              {
                x: sequence.map((_, index) => index),
                y: sequence,
                type: 'scatter',
                mode: 'lines+markers',
                marker: { color: 'rgb(100, 200, 255)' },
              },
            ]}
            layout={{
              title: `Collatz Conjecture Plot (Start: ${startNumber})`,
              xaxis: { title: 'Step' },
              yaxis: { title: 'Value' },
              plot_bgcolor: 'rgb(26, 32, 44)',
              paper_bgcolor: 'rgb(26, 32, 44)',
              font: { color: 'rgb(255, 255, 255)' },
            }}
            className="w-full h-full"
          />
        )
      case 'theorem':
        return <TheoremInfo />
      case 'history':
        return <HistoryInfo />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } w-64 bg-gray-800 p-6 transition-transform duration-300 ease-in-out z-20`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-white"
        >
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold mb-6">Collatz Explorer</h2>
        <nav>
          <ul className="space-y-4">
            <li>
              <button
                onClick={() => setActiveView('3d')}
                className="flex items-center text-lg hover:text-blue-400"
              >
                <ChevronRight size={20} className="mr-2" />
                3D Model
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveView('plot')}
                className="flex items-center text-lg hover:text-blue-400"
              >
                <LineChart size={20} className="mr-2" />
                Plot
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveView('theorem')}
                className="flex items-center text-lg hover:text-blue-400"
              >
                <Info size={20} className="mr-2" />
                Theorem
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveView('history')}
                className="flex items-center text-lg hover:text-blue-400"
              >
                <History size={20} className="mr-2" />
                History
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1">
        <button
          onClick={toggleMenu}
          className="fixed top-4 left-4 z-30 bg-gray-800 p-2 rounded-md"
        >
          <Menu size={24} />
        </button>
        <main className="p-4 h-screen">{renderContent()}</main>
      </div>
    </div>
  )
}

export default App