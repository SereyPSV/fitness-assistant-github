import { onValue, ref, remove, set, update } from '@firebase/database'
import { useState } from 'react'
import { Database } from '../enums'
import { firebaseDB } from '../../app/firebase'
import { IUser } from '../../entities/User/interfaces'

export const useFirebaseDB = () => {
  const dbRef = ref(firebaseDB, Database.users)
  const [loading, setLoading] = useState<boolean>(false)

  const addUser = async ({ id, name, email }: IUser) => {
    setLoading(true)
    try {
      await set(ref(firebaseDB, `${Database.users}/` + id), {
        id: id,
        name: name,
        email: email,
      })
      console.log('New User added to FirebaseDB')
    } catch (error) {
      console.error('addUser: Something in database went wrong...', error)
    } finally {
      setLoading(false)
    }
  }

  const deleteUser = async (userId: IUser['id'], { name }: IUser) => {
    try {
      await remove(ref(firebaseDB, `${Database.users}/` + userId))
      console.log(`User: ${name} deleted`)
    } catch (error) {
      console.error(
        `deleteUser: ${name} Something in database went wrong...`,
        error
      )
    }
  }

  const updateUserName = async (user: IUser) => {
    const updates: { [key: string]: string } = {}
    updates[`/${Database.users}/${user.id}/name`] = user.name
    try {
      await update(ref(firebaseDB), updates)
      console.log(`User: ${user.name} was updated`)
      await updateUserDate(user.id)
    } catch (error) {
      console.error(
        'updateUserName: Something in database went wrong...',
        error
      )
    }
  }

  const updateUserDate = async (userId: string) => {
    const updates: { [key: string]: number } = {}
    updates[`/${Database.users}/${userId}/updatedDate`] = new Date().getTime()
    try {
      await update(ref(firebaseDB), updates)
      console.log('User props updatedDate was updated')
    } catch (error) {
      console.error(
        'updateUserDate: Something in database went wrong...',
        error
      )
    }
  }

  const fetchUsers = () => {
    setLoading(true)
    onValue(
      dbRef,
      (snapshot) => {
        const data = snapshot.val()
        if (data) {
          const users: IUser[] = Object.values(data)
          const sortedUsers: IUser[] = users.sort(
            (a, b) => b.updatedDate - a.updatedDate
          )
          console.log('!!!!!sortedUsers!!!!', sortedUsers)
          // dispatch(setUsersFromServer(sortedUsers)) 
        }
        setLoading(false)
      },
      (error) => {
        console.error('fetchUsers: Something in database went wrong...', error)
        setLoading(false)
      }
    )
  }

  return {
    addUser,
    deleteUser,
    updateUserName,
    updateUserDate,
    fetchUsers,
    loading,
  }
}
