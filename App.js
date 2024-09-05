import * as React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const MusicApp = () => {
  return(
    <View style = {styles.container}>

      <LinearGradient 
      colors={['#4d0000', 'black',]}
      style={styles.back}
      />
      
      <View style = {styles.top}>
        <Image 
        style = {styles.logo} 
        source = {require('./images/logo.png')}
        />
      </View>


      <View style = {styles.center}>
        <Text style = {styles.pickText}>Pick:</Text>
        <ScrollView style = {styles.scroll} horizontal = {true} showsHorizontalScrollIndicator={false}>
          <View style = {styles.song}>
            <Image
            style = {styles.songImage}
            source = {require('./images/djadjaImage.jpg')}
            />
            <Text style = {styles.songName}>Djadja</Text>
            <Text style = {styles.songArtist}>Maluma</Text>
          </View>
          <View style = {styles.song}>
            <Image 
            style = {styles.songImage} 
            source = {require('./images/blindingLights.png')}
            />
            <Text style = {styles.songName}>Blinding Lights</Text>
            <Text style = {styles.songArtist}>The Weeknd</Text>
          </View>
          <View style = {styles.song}>
          <Image 
          style = {styles.songImage}
          source = {require('./images/butterImage.jpg')}
          />
          <Text style = {styles.songName}>Butter</Text>
          <Text style = {styles.songArtist}>BTS</Text>
          </View>
        </ScrollView>
      </View>


      <View style = {styles.bottom}>
      
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },

  top: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },

  logo: {
    height: 80,
    width: 170,
    resizeMode: 'stretch',
  },

  back: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },

  center: {
    marginTop: 40,
  },

  pickText: {
    color: 'white',
    fontSize: 27,
    fontWeight: 'bold',
    marginLeft: 15,
  },

  scroll: {
    flexDirection: 'row',
  },

  song: {
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    padding: 10,
    justifyContent: 'center',
    textAlign: 'center',
  },

  songImage: {
    height: 170,
    width: 170,
    resizeMode: 'stretch',
    borderRadius: 10,
  },

  songName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },

  songArtist: {
    marginTop: 3,
    fontWeight: 'bold',
    color: 'grey',
  },
});

export default MusicApp;
