import React, { useEffect, useState } from 'react';
import { View, 
         Image, 
         Text, 
         TouchableOpacity,
         StatusBar,
         FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Feather'
Icon.loadFont()
import styles from './styles';
import logoImg from '../../assets/logo.png'
import { index } from '../../services/incident.service'

export default function Incidents() {
  const [incidents, setIncidents] = useState([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  const loadIncidents = async () => {
    if(loading) {
      return
    }
    if(total > 0 && incidents.length === total) {
      return
    }

    setLoading(true)

    await index(page)
          .then(res => {
                setIncidents([...incidents, ...res.data])
                setTotal(res.headers['x-total-count'])
                setPage(page + 1)
                setLoading(false)
              })
  }

  useEffect(() => {
    loadIncidents()
  },[])

  const navigation = useNavigation()

  const navigateToDetails = (incident) => {
    navigation.navigate('Details', { incident })
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#E02041"/>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={logoImg}/>
          <Text style={styles.headerText}>
            Total de <Text style={styles.bold}>{total} casos</Text>
          </Text>
        </View>
        <Text style={styles.title}>
          Bem vindo!
        </Text>
        <Text style={styles.description}>
          Escolha um dos casos e salve o dia
        </Text>
        <FlatList
          style={styles.list} 
          data={incidents}
          showsVerticalScrollIndicator={false}
          onEndReached={loadIncidents}
          onEndReachedThreshold={0.2}
          keyExtractor={incident => String(incident.id)}
          renderItem={({ item }) => (
            <View style={styles.incident}>
              <Text style={styles.incidentProperty}>
                ONG:
              </Text>
              <Text style={styles.incidentValue}>
                {item.name}
              </Text>
              <Text style={styles.incidentProperty}>
                CASO:
              </Text>
              <Text style={styles.incidentValue}>
                {item.title}
              </Text>
              <Text style={styles.incidentProperty}>
                VALOR:
              </Text>
              <Text style={styles.incidentValue}>
                {Intl.NumberFormat('pt-BR', { 
                  style: 'currency', 
                  currency: 'BRL' 
                }).format(item.value)}
              </Text>
              <TouchableOpacity 
                style={styles.detailsButton}
                onPress={() => navigateToDetails(item)}
              >
                <Text style={styles.buttonText}>
                  Ver mais detalhes
                </Text>
                <Icon 
                  name="arrow-right"
                  color="#E02041"
                  size={16}
                />
              </TouchableOpacity>
            </View>
          )} />
         
      </View>
    </>
  );
}
