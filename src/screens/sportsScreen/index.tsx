import {View, FlatList, Text} from 'react-native';
import React, {useCallback} from 'react';
import CustomBackButton from '../../component/customBackButton';
import {useSelector} from 'react-redux';
import {styles} from './style';
import CustomSearchButton from '../../component/customSearchButton';
import CustomSportSelection from '../../component/customSportSelection';
import CustomButton from '../../component/customButton';
import CustomInActiveButton from '../../component/customInactiveButton';
import {useNavigation, useRoute} from '@react-navigation/native';
import { STRINGS } from '../../utils/strings';

interface userdefined {
  navigation?: any;
  isSelected?: any;
}

function SportScreen(props: userdefined) {
  const {callback, selectedsports}: any = useRoute().params;
  const navigation = useNavigation();
  const {sports} = useSelector((store: any) => store.EditProfileReducer);
  const [selectedSports, setselectedSports] = React.useState(selectedsports);
  const [selectedItem, setSelectedItem] = React.useState(sports);

  React.useEffect(() => {
    console.log('select sport useeffect', selectedSports);
    callback(selectedSports);
  }, [selectedSports]);

  const helper = useCallback(
    (item: any) => {
      const index = selectedSports.findIndex((x:any) => x == item);
      console.log('selectedSports index', item);
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
    // console.log('selectedSports', selectedSports);
    return (
      <CustomSportSelection
        _id={item._id}
        sportImg={item.sportImg}
        sportName={item.sportName}
        helper={helper}
        selectedSports={selectedSports}
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
      <Text style={styles.sportTextHeader}>
          {STRINGS.LABEL.WHICH_SPORTS_PLAY}
      </Text>
      <CustomSearchButton onchangeText={onchangeItem} placeholder={STRINGS.LABEL.SEARCH_SPORTS} text={undefined}/>
      <FlatList
        data={selectedItem}
        renderItem={renderItems}
        numColumns={3}
        bounces={false}
        showsVerticalScrollIndicator={false}
      />
      {selectedSports ? (
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

export default React.memo(SportScreen);
