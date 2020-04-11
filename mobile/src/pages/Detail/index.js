import React from 'react';
import { View, Text, TouchableOpacity, Image, FlatList  } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


import styles from './styles';


import logoImg from '../../assets/logo.png';


export default function Detail () {

    const navigation = useNavigation();

    function navigateBack() {
        navigation.goBack(); 
    }
    return (
        <View style={styles.container}>
             <View style={styles.header}>
                <Image source={logoImg}></Image>
               
               <TouchableOpacity onPress={navigateBack}>
                   <Feather name="arrow-left" size={18} color="#E02041"></Feather>
               </TouchableOpacity>
            </View>

            <FlatList 
                data={[1]}
                style={styles.main}
                keyExtractor={incident => String(incident)}
                showsVerticalScrollIndicator={false}
                renderItem={() => (
                    <View>
                        <View style={styles.incident}>
                            <Text style={[styles.incidentProperty], {marginTop: 0}}>ONG:</Text>
                            <Text style={styles.incidentValue}>APAD</Text>
                            
                            <Text style={styles.incidentProperty}>CASO:</Text>
                            <Text style={styles.incidentValue}>Cadelinha atropelada</Text>

                            <Text style={styles.incidentProperty}>VALOR:</Text>
                            <Text style={styles.incidentValue}>R$ 120,00</Text>
                        </View>
                        <View style={styles.contactBox}>
                            <Text style={styles.heroTitle}>Salve o dia!</Text>
                            <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>
        
                            <Text style={styles.heroDescription}>Entre em contato: </Text>
        
                            <View style={styles.actions}>
                                <TouchableOpacity style={styles.action} onPress={() => {}}>
                                    <Text style={styles.actionText}>WhatsApp</Text>
                                </TouchableOpacity>
        
                                <TouchableOpacity style={styles.action} onPress={() => {}}>
                                    <Text style={styles.actionText}>Email</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                )}
             />
        </View>
    );
}