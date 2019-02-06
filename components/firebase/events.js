import { firestore as db } from './firestore'

export function subscribe(collection, onDataReceive) {
  db.collection(collection).onSnapshot(docs => {
    const data = []
    docs.forEach(doc => {
      data.push(
        Object.assign(
          {
            id: doc.id
          },
          doc.data()
        )
      )
    })

    onDataReceive(data)
  })
}

export function deleteOffer(id, collection) {
  db.collection(collection)
    .doc(id)
    .delete()
    .then(() => console.log('Document successfully deleted!'))
    .catch(error => console.error(`Error removing document: ${error}`))
}

export function saveOnFirestore(
  collection,
  { text, user, observation, knowledge, category }
) {
  return new Promise((res, rej) => {
    db.collection(collection)
      .doc()
      .set({
        text,
        name: user.name,
        email: user.email,
        date: `${new Date()}`,
        observation,
        category,
        knowledge
      })
      .then(e => res(e))
      .catch(error => rej(error))
  })
}
