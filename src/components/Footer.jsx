import React from 'react';




function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Toluwani Oluwole
          </div>
          
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Computer Engineering Student passionate about building the future through code.
          </p>
          
          <div className="flex items-center justify-center space-x-2 text-gray-500">
            <span>Built </span>
            
            <span>using React, TypeScript, and Tailwind CSS</span>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-800">
            <p className="text-gray-400 text-sm">
              © 2025 Toluwani Oluwole. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer