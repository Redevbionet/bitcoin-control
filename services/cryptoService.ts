
/**
 * Generates a cryptographically secure 32-byte (256-bit) random value
 * and returns it as a hexadecimal string. This is suitable for creating
 * a new Bitcoin private key for educational purposes.
 * 
 * @returns {string} A 64-character hexadecimal string representing the private key.
 */
export const generatePrivateKey = (): string => {
  // Create a 32-byte array to hold the random data.
  const buffer = new Uint8Array(32);
  
  // Use the browser's built-in cryptographic random number generator.
  window.crypto.getRandomValues(buffer);
  
  // Convert the byte array to a hexadecimal string.
  const privateKey = Array.from(buffer)
    .map(byte => byte.toString(16).padStart(2, '0'))
    .join('');
    
  return privateKey;
};
