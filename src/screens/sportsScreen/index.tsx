import {View, FlatList} from 'react-native';
import React, {useCallback} from 'react';
import CustomBackButton from '../../component/customBackButton';
import {useSelector} from 'react-redux';
import {styles} from './style';
import CustomSearchButton from '../../component/customSearchButton';
import CustomSportSelection from '../../component/customSportSelection';
import CustomButton from '../../component/customButton';
import CustomInActiveButton from '../../component/customInactiveButton';
import {useNavigation, useRoute} from '@react-navigation/native';
import NavigationScreen from '../../routes';
import {Item} from 'react-native-paper/lib/typescript/components/Drawer/Drawer';

export default function SportScreen(props: any) {
  const {callback}: any = useRoute().params;
  const navigation = useNavigation<any>();
  const {sports} = useSelector((store: any) => store.EditProfileReducer);
  const [selectedSports, setselectedSports] = React.useState([]);
  const [selectedItem, setSelectedItem] = React.useState(sports);
  console.log('////sport data is here', sports);

  React.useEffect(() => {
    callback(selectedSports);
  }, [selectedSports]);

  const helper = useCallback(
    (item: any) => {
      const index = selectedSports.findIndex(x => x == item);
      console.log('selectedSports index', index);
      if (index == -1) {
        setselectedSports([...selectedSports, item]);
      } else {
        selectedSports.splice(index, 1);
        setselectedSports([...selectedSports]);
      }
    },
    [selectedSports],
  );
  const renderItems = ({item}: any) => {
    // console.log('+++++++++////Item There', item);
    console.log('selectedSports', selectedSports);
    return (
      <CustomSportSelection
        img={item.sportImg}
        imgText={item.sportName}
        helper={helper}
      />
    );
  };
  const onchangeItem = (text: any) => {
    setSelectedItem(
      sports.filter((item: any) =>
        item?.sportName.toLowerCase().includes(text.toLowerCase()),
      ),
    );
  };

  return (
    <View style={styles.container}>
      <CustomBackButton />
      <CustomSearchButton onchangeText={onchangeItem} />
      <FlatList
        data={selectedItem}
        renderItem={renderItems}
        numColumns={3}
        bounces={false}
        showsVerticalScrollIndicator={false}
      />
      {selectedSports.length > 0 ? (
        <CustomButton
          label="CONTINUE"
          onPress={() => {
            navigation.goBack('SportScreen', {
              callback: (par: any) => {
                setSelectedSports(par);
              },
            });
          }}
        />
      ) : (
        <CustomInActiveButton label="CONTINUE" disabled={true} />
      )}
    </View>
  );
}
