export default {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['./src/utils/setupJest.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testEnvironment: 'jsdom',
}
