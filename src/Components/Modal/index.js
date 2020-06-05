import React from 'react';
import { View, Modal, TouchableOpacity } from 'react-native';
import styles from './styles';

type Props = {};

const MODAL_CONTAINER = (props: Props) => {
  const {
    modalVisible,
    modalClose,
    children,
    onOuterPress,
    openModalName
  } = props;
  let OuterCompo = onOuterPress ? TouchableOpacity : View;
  return (
    <Modal
      animationType="none"
      transparent
      visible={modalVisible}
      onRequestClose={e => modalClose(e, openModalName)}
      animationType="fade"
    >
      <OuterCompo
        style={styles.modalView}
        onPress={() => onOuterPress(openModalName)}
        activeOpacity={1}
      >
        <View
          style={styles.modalSubContainerDateRange}
        >
          {children}
        </View>
      </OuterCompo>
    </Modal>
  );
};

export default MODAL_CONTAINER;
