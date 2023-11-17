import { registerRootComponent } from 'expo'; // Importe registerRootComponent da Expo
import App from './src/App';
import { name as Calculadora } from './app.json';

registerRootComponent(App, { initialProps: Calculadora }); // Registre o componente raiz usando registerRootComponent
