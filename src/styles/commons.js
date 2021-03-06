import colors from './colors';

export default {
  pageTitle: {
    fontSize: 24,
    color: colors.white,
    fontWeight: 'bold',
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 30,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'left',
    alignItems: 'center',
  },
  error: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '500',
    marginLeft: 10,
    top: -15,
  },
  errorWhite: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: '500',
    marginLeft: 10,
    top: -15,
  },
  body: {
    flex: 1,
    backgroundColor: colors.backgroung,
    flexDirection: 'column',
  },
  container: {
    margin: 10,
    borderRadius: 10,
    backgroundColor: colors.backgroung,
  },
};
