import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20
  },

  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  headerText: {
    color: '#737380',
    fontSize: 15
  },

  headerTextBold: {
    fontWeight: 'bold'
  },

  title: {
    color: '#13131A',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 16,
    marginTop: 48
  },

  description: {
    color: '#737380',
    fontSize: 16,
    lineHeight: 24
  },

  incidentList: {
    marginTop: 32
  },

  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    marginBottom: 16
  },

  incidentProperty: {
    fontSize: 14,
    color: '#41414D',
    fontWeight: 'bold'
  },

  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: '#737380'
  },

  detailsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  detailsButtonText: {
    color: '#E02041',
    fontSize: 15,
    fontWeight: 'bold'
  }
});

export default styles;
