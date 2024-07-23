export function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  
  export function validateField(value) {
    return value.trim() !== '';
  }
  