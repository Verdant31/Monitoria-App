import { View, Text } from "react-native"
import { styles } from './styles';

interface LabelInfoProps {
  value: string;
  label: string;
}

const LabelInfo = ({value, label}: LabelInfoProps) => {
  return (
    <View style={{marginBottom: 15}}>
      <Text style={styles.label}>{label}</Text>
      <Text>{value}</Text>
    </View>
  )
}

export default LabelInfo;