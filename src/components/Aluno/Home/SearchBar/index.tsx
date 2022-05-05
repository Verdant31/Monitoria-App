import { View, Text } from "react-native";
import { styles } from './styles'
import { Searchbar } from 'react-native-paper';

const SearchBar = () => {
  return (
    <View>
      <Searchbar 
        placeholder="Procure por uma matéria..."
        style={styles.searchBar}
      />
    </View>
  )
}
export default SearchBar;