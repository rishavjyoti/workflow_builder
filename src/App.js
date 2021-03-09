import Main from './components/Main'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Quicksand',
    ].join(','),
  },});

function App() {
  return(   
    <div>
    <ThemeProvider theme={theme}>
      <Main/>
    </ThemeProvider>
    </div>
  )
}

export default App;

