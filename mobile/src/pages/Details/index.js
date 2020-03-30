import React from 'react';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'
// import * as MailCompose from 'react-native-mail-compose'
import logoImg from '../../assets/logo.png'
import Icon from 'react-native-vector-icons/Feather'
import styles from './styles';

export default function Details() {
  const navigation = useNavigation()
  const route = useRoute()
  const incident = route.params.incident

  const message = `Ola ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}`

  const navigateToCases = () => {
    navigation.goBack()
  }

  // ({
  //   subject: `Heroi do dia: Um primeiro caso`,
  //   recipients: [`edu27.cassimiro@gmail.com`],
  //   body: message,
  // })
  // const sendMail = () => {
    
  // }

  const sendWhatsapp = () => {
    Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <Image source={logoImg}/>
          <TouchableOpacity onPress={navigateToCases}>
            <Icon
              name="arrow-left"
              size={28}
              color="#E02041"
            />
          </TouchableOpacity>
      </View>
      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, { marginTop: 0 }]}>
          ONG:
        </Text>
        <Text style={styles.incidentValue}>
          {incident.name} de {incident.city}/{incident.uf}
        </Text>
        <Text style={styles.incidentProperty}>
          CASO:
        </Text>
        <Text style={styles.incidentValue}>
          {incident.description}
        </Text>
        <Text style={styles.incidentProperty}>
          VALOR:
        </Text>
        <Text style={styles.incidentValue}>
          {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}
        </Text>
      </View>
      <View style={styles.contactBox}>
        <Text style={styles.title}>
          Salve o dia!
        </Text>
        <Text style={styles.title}>
          Seja o heroi deste caso
        </Text>
        <Text style={styles.text}>
          Entre em contato
        </Text>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity 
              style={styles.button}
              onPress={sendWhatsapp}
            >
            <Text style={styles.buttonText}>
              Whatsapp
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
              style={styles.button}
              onPress={() => {}}
              >
            <Text style={styles.buttonText}>
              Email
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
