module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js'],
    ollectCoverageFrom: [
        "src/**/*.{js,jsx,ts,tsx}",
        "!src/**/*.d.ts"
      ],
      collectCoverage: true,  // Habilitar la recopilación de cobertura
   
      coverageReporters: ['html', 'text-summary', 'lcov'],  // Tipos de reportes de cobertura

}