import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  modalView: {
    position: 'absolute',
    backgroundColor: '#000000af',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalSubContainer: {
    width: '55%',
    borderTopLeftRadius: 10,
    backgroundColor: '#fff',
    // alignItems: 'center',
    position: 'absolute',
    right: 0,
    bottom: 0,
    top: 70,
  },
  modalSubContainerDateRange: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
  }
});

module.exports = styles;
