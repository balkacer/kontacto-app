import { StyleSheet } from 'react-native';
import Theme from '../theme/theme';

const Styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: Theme.colorBackground
  },
  formPartView: {
    flex: 1,
    alignItems: 'center',
    bottom: 0,
    height: 522
  },
  input: {
    fontFamily: 'Louis George Cafe Bold',
    color: Theme.colorBlack,
    borderRadius: 15,
    backgroundColor: Theme.colorWhite,
    marginBottom: 20,
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontSize: 16,
    width: '100%'
  },
  image: {
    width: 150, 
    height: 150,
    borderRadius: 150,
    margin: 15,
    backgroundColor: Theme.colorWhite,
    borderWidth: 2,
    borderColor: Theme.colorPrimary
  },
  btn: {
    borderRadius: 15,
    backgroundColor: Theme.colorDefaultComponentBackground,
    marginBottom: 20,
    padding: 20,
    width: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  btnText: {
    fontSize: 16,
    color: Theme.colorDefaultComponentText,
    fontFamily: 'Louis George Cafe Bold',
    marginHorizontal: 'auto'
  },
  btnPrimary: {
    backgroundColor: Theme.colorPrimary
  },
  btnSecondary: {
    backgroundColor: Theme.colorSecondary
  },
  btnTextPrimary: {
    color: Theme.colorBlack
  },
  btnDisabled: {
    backgroundColor: Theme.colorDisabled
  },
  btnDisabledText: {
    color: Theme.colorDisabledText
  },
  btnContainer: {
    position: 'absolute',
    zIndex: 2,
    bottom: 0,
    flexDirection: 'row',
  },
  ml_10: {
    marginLeft: 10
  },
  mr_10: {
    marginRight: 10
  },
  row: {
    width: '100%',
    maxWidth: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  column_50: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column'
  },
  column_100: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  column_25: {
    width: '25%',
    display: 'flex',
    flexDirection: 'column'
  },
  column_75: {
    width: '75%',
    display: 'flex',
    flexDirection: 'column'
  }
});

export default Styles;
