import {View, FlatList, TouchableOpacity} from 'react-native';
import React, { useCallback } from 'react';
import CustomBackButton from '../../component/customBackButton';
import {useSelector} from 'react-redux';
import {styles} from './style';
import CustomSearchButton from '../../component/customSearchButton';
import CustomSportSelection from '../../component/customSportSelection';
import CustomButton from '../../component/customButton';
import CustomInActiveButton from '../../component/customInactiveButton';
import { useRoute } from '@react-navigation/native';

export default function SportScreen(props: any) {

  const {callback} = useRoute().params;

  // const {choose, setChoose} = props;
  const {sports} = useSelector((store: any) => store.EditProfileReducer);
  const [selectedSports, setselectedSports] = React.useState([])
  console.log('////sport data is here', sports);

  React.useEffect(()=>{
    callback(selectedSports)
  },[selectedSports])

  const helper =useCallback((item :any)=>{
    const index = selectedSports.findIndex(x => x == item);
   console.log('selectedSports index', index)

   if(index == -1){
    setselectedSports([...selectedSports, item])
   }else{
     selectedSports.splice(index, 1)
     setselectedSports([...selectedSports])
   }
  }, [selectedSports])
  const renderItems = ({item}: any) => {
    // console.log('+++++++++////Item There', item);
    console.log("selectedSports", selectedSports)
    return (
          <CustomSportSelection img={item.sportImg} imgText={item.sportName} helper = {helper}/>
    );
  };

  return (
    <View style={styles.container}>
      <CustomBackButton />
      <CustomSearchButton />
      <FlatList
        data={sports}
        renderItem={renderItems}
        numColumns={3}
        bounces={false}
        showsVerticalScrollIndicator={false}
        // ItemSeparatorComponent={}
      />
     { selectedSports.length>0?<CustomButton label="CONTINUE" />:
      <CustomInActiveButton label = "CONTINUE" disabled={true} />}
    </View>
  );
}
