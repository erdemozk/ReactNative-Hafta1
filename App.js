import React from 'react';
import { View, Text } from 'react-native';

// tip isim = veri;
//----------------------
//değişken tipleri
//const = sabit, bir kez tanımlanır
//let = değişken
//----------------------
// veri tipleri: string(metin), int(tam sayı), float(küsüratlı sayı), 
//boolean(true-false), array(sıralı veri yapısı), json(birden çok veriyi key:value olarak tutmak)
//string ' ' ile tanımlanır
//----------
// .push değişkenin sonuna veri ekler
// .concat verileri birleştirir, tek başına değişiklik yapmaz
// .sort veriyi sıralar



const d1 = 'erdem'; //string
const x = 9; //int
const f1 = 3.14; //float
const y = true; //boolean
let xyz = 'erdem'

class Erdem extends React.Component {

  render() {

    const boyut = 20;
    const satirlar = [];
    
    for (let i = 0; i <= boyut; i++) {
      satirlar[i] = '';

      for (let j = 0; j <= boyut - i; j++) satirlar[i] += '-';
      for (let j = 0; j <= 2 * i; j++) satirlar[i] += '*';

      satirlar.forEach(s => console.log(s))
    }

    return(
      <View>
        <Text></Text>
        <Text>Selam</Text>
      </View>
    );
  }
}

export default Erdem;