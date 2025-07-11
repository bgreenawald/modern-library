import { logger } from './logger';

/**
 * Simple test to verify logger configuration
 * This can be run manually to test logging functionality
 */
export function testLogger() {
  console.log('Testing Winston logger configuration...');
  
  logger.debug('This is a debug message - should only appear in development');
  logger.info('This is an info message - should appear in both dev and production');
  logger.warn('This is a warning message - should appear in both dev and production');
  logger.error('This is an error message - should appear in both dev and production');
  
  console.log('Logger test complete. Check logs/ directory for output files.');
}

// Uncomment to run test
// testLogger(); 