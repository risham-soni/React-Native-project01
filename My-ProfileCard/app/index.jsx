import {Text, View,Image, TouchableOpacity,Linking,Button} from 'react-native';
import { Pressable } from 'react-native';

export default function Index() {
  return (
    <View>
      <View style={{height:"100%",width:"100%",backgroundColor:"rgba(4, 5, 6, 0.34)",display:"flex",justifyContent:"center",alignItems:"center", padding:30}}>
        <View style={{height:400,width:350,backgroundColor:"#849084", borderRadius:20,display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Image source={require('../assets/images/my-pic.jpg')} style={{height:150,width:150,borderRadius:7}}></Image>
          <Text style={{color:"black",fontSize:36,fontStyle:"italic",fontWeight:"bold", textDecorationLine: 'underline',textAlign:'center'}}>Risham Soni</Text>
           <Text style={{color:"#00008b",fontSize:25,fontWeight: 'bold',textAlign:'center'}}>~ Software Engineer</Text>
           <View style={{height:60,width:180,display:"flex"}}></View>
           <View style={{ flexDirection: "row", marginTop: 20, display:"flex",justifyContent:"space-between"}}> 

            <Pressable onPress={() => Linking.openURL("https://www.linkedin.com/in/risham-soni-2ab5b8277/")}>
              <Image source={{uri:"https://pngimg.com/uploads/linkedIn/linkedIn_PNG29.png"}} style={{ width: 30, height:30, margin:6}}/>
              </Pressable>

            <Pressable onPress={() => Linking.openURL("https://github.com/risham-soni")} >
              <Image source={{uri:"https://pngimg.com/uploads/github/github_PNG80.png"}} style={{ width: 30, height:30,margin:6}}/>
            </Pressable>

            <Pressable onPress={() => Linking.openURL("https://leetcode.com/u/risham_soni/")}>
              <Image source={{uri:"https://creazilla-store.fra1.digitaloceanspaces.com/icons/3270180/leetcode-icon-md.png"}} style={{ width: 30, height:30,margin:6}}></Image>
            </Pressable>
            </View>
       </View>
    </View>
  </View>
 
  );
}


//background-color:"" ise kabab casing padhte hai
//backgroundColor:""ise caml casing kehte hai