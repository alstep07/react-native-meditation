import {StyleSheet} from 'react-native';
import theme from '../../common/theme';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.colors.mainBackground,
  },
  userContainer: {
    marginTop: 80,
    flex: 5,
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 2,
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
  },
  username: {
    padding: 8,
    minWidth: 140,
    marginTop: -17,
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '700',
    backgroundColor: theme.colors.mainBackground,
    textAlign: 'center',
    borderRadius: 10,
    shadowColor: theme.colors.shadow,
    shadowRadius: 22,
    elevation: 20,
  },
});

export default styles;
