import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from '@/components/FlatCards'
import ElevatedCard from '@/components/ElevatedCard'
import FancyCards from '@/components/FancyCards'
import ActionCards from '@/components/ActionCards'

const index = () => {
  return (
   
    <SafeAreaView>
      <ScrollView>
       
         <FlatCards/>
         <ElevatedCard/>
         <FancyCards/>
         <ActionCards/>
      </ScrollView>
       
    </SafeAreaView>
    
  )
}

export default index