import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import { Movements } from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [
  {
    id: 1,
    label: 'Boleto conta de luz',
    value: '300.00',
    date: '10/05/2023',
    type: 0,
  },
  {
    id: 2,
    label: 'Pix Pato Donald',
    value: '100.00',
    date: '03/04/2023',
    type: 1,
  },
  {
    id: 3,
    label: 'Salário',
    value: '15.000.00',
    date: '05/04/2023',
    type: 1,
  }
]

export default function Home() {
  return (
    <View style={styles.container}>
      
      <Header name="Senhor Pato"/>

      <Balance saldo="100.00" gastos="-10.000.00"/>

      <Actions /> 

      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={ (item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={ ({item}) => <Movements data={item}/>}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DADADA',
  },

  title:{
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },

  list: {
    marginStart: 14,
    marginEnd: 14,
  }
});
