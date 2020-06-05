import React, { Component } from 'react';
import { View, Image, Text, TextInput, FlatList, CheckBox } from 'react-native';
import { ADD_TODO, DELETE } from '../../config/images';
import styles from './style';
import AnimatedButton from '../../Components/AnimatedButton';
import ModalContainer from '../../Components/Modal';
import { Card } from 'native-base';

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      todo: '',
      id: 0,
      todoArray: [],
    };
  }

  handleChange = (e, name) => {
    this.setState({ [name]: e });
  };

  handleAddTodo = () => {
    const { todo, id } = this.state;
    let obj = {
      id: id + 1,
      todo: todo,
      isCompleted: false,
    };
    this.setState({
      todoArray: this.state.todoArray.concat(obj),
      isModalOpen: false,
      todo: '',
      id: id + 1,
    });
  };

  addTodo = () => {
    return (
      <Card style={styles.modalCard}>
        <View style={{ alignSelf: 'center', marginBottom: 20 }}>
          <Text style={styles.jumpText}>{`Add Todos`}</Text>
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            style={[styles.titleInput, { borderWidth: 0.5 }]}
            onChangeText={e => this.handleChange(e, 'todo')}
            keyboardType={'default'}
            //   value={title}
            placeholder={'Add Todo'}
            numberOfLines={5}
          />
        </View>
        <View style={styles.addWrapper}>
          <AnimatedButton
            style={styles.buttonContainer}
            onPress={() => this.handleAddTodo()}>
            <Text style={styles.buttonText}>Add</Text>
          </AnimatedButton>
          <AnimatedButton
            style={styles.buttonContainer}
            onPress={() => this.setState({ isModalOpen: false })}>
            <Text style={styles.buttonText}>Cancel</Text>
          </AnimatedButton>
        </View>
      </Card>
    );
  };

  renderHeader = () => {
    return (
      <View style={styles.headerWrapper}>
        <Text style={styles.headerContent}> Todo App</Text>
      </View>
    );
  };

  renderAddTodo = () => {
    return (
      <View style={styles.addTodoWrapper}>
        <AnimatedButton onPress={() => this.setState({ isModalOpen: true })}>
          <Image
            source={ADD_TODO}
            style={styles.addTodo}
            resizeMode={'contain'}
          />
        </AnimatedButton>
      </View>
    );
  };

  handleCompleted = id => {
    const elementsIndex = this.state.todoArray.findIndex(
      element => element.id == id,
    );
    if (elementsIndex > -1) {
      let newArray = [...this.state.todoArray];
      newArray[elementsIndex] = {
        ...newArray[elementsIndex],
        isCompleted: !newArray[elementsIndex].isCompleted,
      };
      this.setState({
        todoArray: newArray,
      });
    }
  };

  handleDeleteTodo = id => {
    const { todoArray } = this.state;
    const filteredItems = todoArray.filter(item => item.id !== id);
    this.setState({ todoArray: filteredItems });
  };

  renderTodoList = () => {
    const { todoArray } = this.state;
    return (
      <View style={styles.todoContainer}>
        {Array.isArray(todoArray) && todoArray.length > 0 ? (
          <FlatList
            data={todoArray}
            keyboardShouldPersistTaps={'handled'}
            renderItem={({ item }) => {
              return (
                <View style={styles.todoListWrapper}>
                  <View style={{ width: 50 }}>
                    <CheckBox
                      value={item.isCompleted}
                      onValueChange={() => this.handleCompleted(item.id)}
                      style={styles.checkbox}
                    />
                  </View>
                  <View style={styles.todoWrapper}>
                    <Text
                      style={
                        item.isCompleted
                          ? [
                              styles.todos,
                              { textDecorationLine: 'line-through' },
                            ]
                          : styles.todos
                      }
                      numberOfLines={2}>
                      {item.todo}
                    </Text>
                  </View>
                  <AnimatedButton
                    style={styles.deleteWrapper}
                    onPress={() => this.handleDeleteTodo(item.id)}>
                    <Image
                      source={DELETE}
                      style={styles.deleteIcon}
                      resizeMode={'contain'}
                    />
                  </AnimatedButton>
                </View>
              );
            }}
            keyExtractor={item => item.id}
          />
        ) : (
          <Text style={styles.noTodos}>Add New Todos</Text>
        )}
      </View>
    );
  };

  render() {
    const { isModalOpen } = this.state;
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        {this.renderAddTodo()}
        {this.renderTodoList()}
        <ModalContainer modalVisible={isModalOpen}>
          {this.addTodo()}
        </ModalContainer>
      </View>
    );
  }
}

export default Todos;
