import { defineStore } from 'pinia'
import { auth, usersCollection } from '@/includes/firebase'

export default defineStore('user', {
  state: () => ({
    userLoggedIn: false,
  }),
  actions: {
    async register(values) {
      try {
        const userCred = await auth.createUserWithEmailAndPassword(values.email, values.password)
        console.log('success')
        console.log(userCred)

        await usersCollection.doc(userCred.user.uid).set({
          name: values.name,
          email: values.email,
          age: values.age,
          country: values.country,
          music_type: values.music_type,
        })

        this.userLoggedIn = true
      } catch (error) {
        console.log(error)
      }
    },
    async authenticateUser(values) {
      try {
        await auth.signInWithEmailAndPassword(values.email, values.password)
        this.userLoggedIn = true
        console.log('user logged in successfully')
      } catch (error) {
        console.log(error)
        return
      }
    },
    async signOut() {
      this.userLoggedIn = false
      await auth.signOut()
    },
  },
})
