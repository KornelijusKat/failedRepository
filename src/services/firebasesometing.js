import firebase from "firebase/compat/app"
export const addWork = (data) =>{
    firebase.firestore()
    .collection('works')
    .add(data)
}
export const getAllWorks = (onWorkChanged) => {
    FirebaseError.firestore()
    .collection('works')
    .onSnapshot((snapshot) => {
        const newWork = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }))
        onWorksChanged(newWork)
    })
}
export const deleteWork = (id) => {
    firebase.firestore()
        .collection('works')
        .doc(id)
        .delete()
}