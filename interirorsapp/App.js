import * as React from 'react';
import { Text, View, SafeAreaView,ScrollView,Card, FlatList, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



function HomeScreen() {
  return (
    <ScrollView style={{backgroundColor:'#C5E1A5'}}>
      <View style={{width:'100%', height:125, justifyContent:'center', alignItems:'center'}}>
        <Image source={{uri:'https://static.wixstatic.com/media/2280db_5b76c48f525c4a30b62f14b9ef75da5e~mv2.png/v1/fill/w_360,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2280db_5b76c48f525c4a30b62f14b9ef75da5e~mv2.png'}}
        style={{width:200, height:200, padding:15}}
        />
      </View>
    <View style={{width:'100%', height:55, justifyContent:'center', alignItems:'center', backgroundColor:'#7CB342'}}>
      <Text style={{fontSize:35, fontWeight:'bold', color:'yellow'}}>Hakkımızda</Text>
    </View>
    <View style={{width:'100%', height:55, justifyContent:'center', alignItems:'center', paddingStart:7}}>
    <Text style={{fontSize:30, fontWeight:'bold'}}>Rekabet İçin Yaratıldık !</Text>
    </View>
    <View style={{width:'100%', height:300, justifyContent:'center', alignItems:'center', paddingStart:7}}>
    <Text style={{fontSize:20, fontWeight:'bold'}}>Kimse şampiyon bir sporcu olarak doğmaz. Şampiyon olmak için seçilmeniz, antrenman yapmanız, belli bir seviyeye ulaşmanız ve gerekli sınavları vermeniz gerekir. ALTINOK SPOR KULÜBÜ olarak kurulduğumuz 1959 yılından beri Bursa'nın en köklü kulüplerinden  birisiyiz. Kaliteli teknik ekibimiz, ham yetenekleri sıkı antrenmanlar ve spor aşkıyla olgunlaştırıyor. ALTINOK SPOR KULÜBÜ olarak takım çalışması, özveri ve sportmenlik temelinde çığır açıyoruz.</Text>
    </View>
    </ScrollView>
  );
}

function SettingsScreen() {
  return (
    <View></View>
  );
}

function DetailsScreen() {
  return (
    <ScrollView>
        <View style={{width:'100%', height:450, justifyContent:'center', alignItems:'center', backgroundColor:'#C5E1A5'}}>
          <Text style={{fontSize:60, fontWeigh:'bold', color:'green'}}>YENİ HABER!</Text>
        <Image source={{uri:'https://static.wixstatic.com/media/2280db_6d797b649a9c499d8d1e3787e0762c55~mv2.jpg/v1/fill/w_416,h_416,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2280db_6d797b649a9c499d8d1e3787e0762c55~mv2.jpg'}}
        style={{width:300, height:200, padding:15}}
        />
        <Text style={{fontSize:20, fontWeight:'bold' ,paddingBottom:7}}>Altınokspor ' umuz için yeni gelen altyapı sorumlusu Ekrem VATANSEVER ile imza atmış bulunmaktayız, kendisine Altınokspor kariyerinde başarılar dileriz.</Text>
        </View>
        <View style={{width:'100%', height:55, justifyContent:'center', alignItems:'center', backgroundColor:'#7CB342'}}>
      <Text style={{fontSize:35, fontWeight:'bold', color:'yellow'}}>FİKSTÜRLER</Text>
    </View>
    <View style={{width:'100%', height:35, justifyContent:'center', alignItems:'center', backgroundColor:'yellow'}}>
      <Text style={{fontSize:15, fontWeight:'bold', color:'green'}}>ALTINOKSPOR 0 - 0 ATINŞEHİR</Text>
      </View>
      <View style={{width:'100%', height:35, justifyContent:'center', alignItems:'center', backgroundColor:'green'}}>
      <Text style={{fontSize:15, fontWeight:'bold', color:'yellow'}}>ORHANGAZİ FK 1 - 0 ALTINOKSPOR</Text>
      </View>
      <View style={{width:'100%', height:35, justifyContent:'center', alignItems:'center', backgroundColor:'yellow'}}>
      <Text style={{fontSize:15, fontWeight:'bold', color:'green'}}>ALTINOKSPOR 3 - 0 NİLÜFER 1987</Text>
      </View>
      <View style={{width:'100%', height:35, justifyContent:'center', alignItems:'center', backgroundColor:'green'}}>
      <Text style={{fontSize:15, fontWeight:'bold', color:'yellow'}}>DİKKALDIRIMSPOR 4 - 2 ALTINOKSPOR</Text>
      </View>
      <View style={{width:'100%', height:85, justifyContent:'center', alignItems:'center', backgroundColor:'#7CB342'}}>
      <Text style={{fontSize:35, fontWeight:'bold', color:'yellow'}}>SON OYNANAN MAÇTA!!</Text>
    </View>
    <View style={{width:'100%', height:350, justifyContent:'center', alignItems:'center', backgroundColor:'#C5E1A5'}}>
      <Text style={{fontSize:18, fontWeight:'bold', paddingBottom:7}}>Rüzgarlı bir pazar gününde Dikkaldırım sahasında maça çıkan takımımıza destekdeydik fena başlamadığımız maça hava şartları ve kaleci hatası yüzünden ilk golü yedik toparlanmaya çalışan takımımıza attığı güzel golle Furkan Çetin destek verdi ve Moral sonrasında defansta ve kalede yapılan hatalar bize 2 ve 3. golleri yedirdi ilk yarıyı 3-1 geride kapadık ikinci yarıda devam eden moral bozukluğuyla beraber bir gol kalemizde bir gol rakip kalede ağlar sallandı ve maç 4-2 DİKKALDIRIMSPOR'un galibiyetiyle sonlandı takımımıza diğer maçlarında başarılar diliyoruz.</Text>
    </View>
    <View style={{width:'100%', height:45, justifyContent:'center', alignItems:'center', backgroundColor:'#7CB342'}}>
      <Text style={{fontSize:35, fontWeight:'bold', color:'yellow'}}>SON PUAN DURUMU</Text>
    </View>
    <View style={{width:'100%', height:35, justifyContent:'center', alignItems:'center', backgroundColor:'yellow'}}>
      <Text style={{fontSize:15, fontWeight:'bold', color:'green'}}>1 - NİLÜFER KIZILCIKLISPOR</Text>
      </View>
      <View style={{width:'100%', height:35, justifyContent:'center', alignItems:'center', backgroundColor:'green'}}>
      <Text style={{fontSize:15, fontWeight:'bold', color:'yellow'}}>2 - ORHANGAZİ GENÇLERBİRLİĞİ</Text>
      </View>
      <View style={{width:'100%', height:35, justifyContent:'center', alignItems:'center', backgroundColor:'yellow'}}>
      <Text style={{fontSize:15, fontWeight:'bold', color:'green'}}>3 - DİKKALDIRIMSPOR</Text>
      </View>
      <View style={{width:'100%', height:35, justifyContent:'center', alignItems:'center', backgroundColor:'green'}}>
      <Text style={{fontSize:15, fontWeight:'bold', color:'yellow'}}>4 - ORHANGAZİ F.K</Text>
      </View>
      <View style={{width:'100%', height:35, justifyContent:'center', alignItems:'center', backgroundColor:'yellow'}}>
      <Text style={{fontSize:15, fontWeight:'bold', color:'green'}}>5 - NİLÜFER ALTINŞEHİR</Text>
      </View>
      <View style={{width:'100%', height:35, justifyContent:'center', alignItems:'center', backgroundColor:'green'}}>
      <Text style={{fontSize:17, fontWeight:'bold', color:'yellow'}}>6 - ALTINOKSPOR</Text>
      </View>
      <View style={{width:'100%', height:35, justifyContent:'center', alignItems:'center', backgroundColor:'yellow'}}>
      <Text style={{fontSize:15, fontWeight:'bold', color:'green'}}>7 - NİLÜFER 1987</Text>
      </View>
      <View style={{width:'100%', height:35, justifyContent:'center', alignItems:'center', backgroundColor:'green'}}>
      <Text style={{fontSize:15, fontWeight:'bold', color:'yellow'}}>8 - MİLLET MAH SPOR</Text>
      </View>
      <View style={{width:'100%', height:35, justifyContent:'center', alignItems:'center', backgroundColor:'yellow'}}>
      <Text style={{fontSize:15, fontWeight:'bold', color:'green'}}>9 - Y.AYYILDIZ SPOR</Text>
      </View>

    
    
    </ScrollView>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Anasayfa" component={HomeScreen}/>
        <Tab.Screen name="Haberler" component={DetailsScreen}/>
        <Tab.Screen name="İletişim" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}