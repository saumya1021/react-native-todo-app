import { StyleSheet, Dimensions } from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    headerWrapper: {
        width: '100%',
        height:70, 
        alignItems:'center', 
        justifyContent:'center', 
        borderBottomWidth:1,
        borderBottomColor:'#D3D3D3'
    },
    headerContent: {
        fontSize:28, 
        fontWeight:'bold'
    },
    addTodoWrapper: {
        position: 'absolute', 
        bottom: 20, 
        alignSelf: 'center'
    },
    addTodo: {
        width: 50, 
        height: 70
      },
    modalCard: {
        width:Dimensions.get('window').width,
        minHeight: 200,
        borderRadius: 5,
        overflow: 'hidden',
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    buttonContainer: {
        backgroundColor: '#00b056',
        minWidth:'25%',
        borderRadius:10,
        padding: 10,
        alignSelf:'center', 
        margin:12
      },
    buttonText: {
        textAlign: 'center',
        color:'#ffffff',
        fontSize:18
    },
    jumpText: {
        fontSize: 18,
        paddingBottom: 1,
        padding: 5,
        color: 'grey',
        fontWeight:'bold'
    },
    addWrapper:{
        flexDirection: 'row', 
        alignSelf: 'center'
    },
    todoListWrapper : {
        width: '90%', 
        borderWidth:1, 
        height:40, 
        alignSelf:'center', 
        borderColor:'#DCDCDC', 
        margin:5,
        flexDirection:'row'
    },
    checkbox:{
        alignSelf: "center",
    },
    todoContainer: { top: 30, width: '100%' },
    todoWrapper:{
            alignItems: 'flex-start',
            width: '70%',
            margin: 5,
          },
    todos: {
        fontSize: 16, 
        alignSelf: 'center',
        marginLeft: 5
    },
    deleteWrapper:{ 
        width: 30, 
        margin:5, 
        right:-10
    },
    deleteIcon:{
        width:30, height:20
    },
    noTodos: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        top: 80,
      }

});

module.exports = styles;
