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

export function saveOnFirestore(
  collection,
  { text, user, observation, knowledge }
) {
  return new Promise((res, rej) => {
    db.collection(collection)
      .doc()
      .set({
        text,
        name: user.name,
        email: user.email,
        date: new Date(),
        observation,
        knowledge
      })
      .then(e => res(e))
      .catch(error => rej(error))
  })
}
