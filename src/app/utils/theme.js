export const theme = {
  colors: {
    primary: '#2A3D66',    // Azul Acero
    secondary: '#4F4F4F',  // Gris Grafito
    white: '#FFFFFF',      // Blanco Puro
    accent: '#D5C4A1',     // Beige Arena
    textDark: '#2A3D66',   // Color texto oscuro
    textLight: '#4F4F4F',  // Color texto claro
  },
  spacing: {
    headerHeight: '80px',
    sectionPadding: '80px',
    mobilePadding: '20px',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  transitions: {
    fast: '0.2s ease',
    medium: '0.3s ease',
    slow: '0.5s ease',
    bounce: '0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
  shadows: {
    sm: '0 1px 3px rgba(42,61,102,0.12)',
    md: '0 4px 6px rgba(42,61,102,0.1)',
    lg: '0 10px 15px rgba(42,61,102,0.1)',
    xl: '0 20px 25px rgba(42,61,102,0.1)',
  },
  gradients: {
    primary: 'linear-gradient(135deg, #2A3D66 0%, #4F4F4F 100%)',
    light: 'linear-gradient(135deg, #FFFFFF 0%, #F7FAFC 100%)',
    dark: 'linear-gradient(135deg, #2A3D66 0%, #1A202C 100%)',
  },
  animation: {
    spring: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'cubic-bezier(0.87, -0.41, 0.19, 1.44)',
  }
};