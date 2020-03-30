import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container: {
        flex:1,
        paddingHorizontal: 24,
        paddingTop: 20
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
        marginTop: 45,
    },
    incidentProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
        marginTop: 24
    },
    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        color: '#737380'
    },
    contactBox: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#13131A',
        lineHeight: 30,
    },
    text: {
        fontSize:15,
        color: '#737380',
        marginTop: 16,
    },
    buttonWrapper: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        backgroundColor: '#E02041',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold'
    }
})