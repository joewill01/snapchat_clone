import { Text } from 'react-native'

export default function MyAppText(props) {
  return (
    <Text style={[{fontFamily: "Avenir Next"}, props.style]}>{props.children}</Text>

  );
};
