import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import shirtImg from '../assets/tshirt.png';
import trousersImg from '../assets/trousers.png';
import shoesImg from '../assets/running-shoe.png';

const Home = () => {
  return (
    <View className='h-full w-full items-center'>
      <View>
        <Text className='text-4xl font-semibold mt-8'>Application</Text>
      </View>
      <View className='my-4'>
        <Text className='text-lg'>0/3</Text>
      </View>
      <View className='h-3/5 justify-evenly'>
        <TouchableOpacity>
          <Image className='w-24 h-24' source={shirtImg} alt='shirt image' />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image className='w-24 h-24' source={trousersImg} alt='shirt image' />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image className='w-24 h-24' source={shoesImg} alt='shirt image' />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Home