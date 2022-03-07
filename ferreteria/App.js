import { ScrollView} from 'react-native';

import PantallaAgregarEditarDireccion from './src/Panallas/agregarEditarDireccion'
import PantallaHistorialCompras from './src/Panallas/historialCompras'
import PantallaHistorialComprasDetalle from './src/Panallas/historialDetalleCompra'
import PantallaMisionyVision from './src/Panallas/misionyvision'
import PantallaPrivacidad from './src/Panallas/privacidad'
import PantallaCondiciones from './src/Panallas/condicionesUso'

export default function App() {
  return (
    <ScrollView style={{flex:1}}>
      <PantallaHistorialComprasDetalle />
    </ScrollView>
  );
}
