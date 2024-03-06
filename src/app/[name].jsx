import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router'
import exercises from '../../assets/data/exercises.json'
import { useState } from 'react'

export default function ExerciseDetail() {
    const [isInstructionExpanded, setIsInstructionExpanded] = useState(false)
    const params = useLocalSearchParams()

    const exercise = exercises.find((item) => item.name === params.name)
    if(!exercise) {
        return <Text>Exercise not found</Text>
    }
    return(
        <ScrollView contentContainerStyle={styles.container}>
            <Stack.Screen options={{ title: exercise.name }}/>
            <View style={styles.panel}>
                <Text style={styles.exerciseName}>{exercise.name}</Text>
                <Text style={styles.exerciseSubtitle}>
                    {exercise.muscle} | {exercise.equipment}
                </Text>
            </View>
            <View style={styles.panel}>
                <Text style={styles.instructions} numberOfLines={isInstructionExpanded ? 0: 3}>{exercise.instructions}</Text>
                <Text onPress={() => setIsInstructionExpanded(!isInstructionExpanded)} style={styles.seeMore}>{isInstructionExpanded ? 'See Less' : 'See More'}</Text>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    exerciseContainer: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        gap: 5,
        marginHorizontal: 2,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    panel: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
    },
    exerciseName: {
        fontSize: 20,
        fontWeight: '500',
    },
    exerciseSubtitle: {
        color: 'dimgray',
        textTransform: 'capitalize',
    },
    instructions: {
        fontSize: 16,
        lineHeight: 22,
    },
    seeMore: {
        alignSelf: 'center',
        padding: 10,
        fontWeight: 600,
        color: 'gray',
    }
})