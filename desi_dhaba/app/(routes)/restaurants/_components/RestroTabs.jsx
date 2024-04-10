import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MenuSection from './MenuSection'


<<<<<<< HEAD
const   RestroTabs = ({restaurant}) => {
  return (
    <Tabs defaultValue="category" className="w-full mt-10">
  <TabsList>
    <TabsTrigger value="category">Category</TabsTrigger>
    <TabsTrigger value="about">About</TabsTrigger>
    <TabsTrigger value="reviews">Reviews</TabsTrigger>
  </TabsList>
  <TabsContent value="category">
    <MenuSection restaurant={restaurant}/>
  </TabsContent>
  <TabsContent value="about">About</TabsContent>
  <TabsContent value="reviews">Reviews</TabsContent>
</Tabs>

  )
}

export default RestroTabs
=======
const RestroTabs = ({ restaurant }) => {
    return (
        <Tabs defaultValue="category" className="w-full mt-10">
            <TabsList>
                <TabsTrigger value="category">Category</TabsTrigger>
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="category">
                <MenuSection restaurant={restaurant} />
            </TabsContent>
            <TabsContent value="about">About</TabsContent>
            <TabsContent value="reviews">Reviews</TabsContent>
        </Tabs>

    )
}

export default RestroTabs
>>>>>>> be0aaf183b40ec329ea35f9d8df38fb66e438ec1
