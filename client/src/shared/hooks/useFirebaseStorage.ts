import {
  deleteObject,
  getBlob,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from '@firebase/storage'
import { firebaseStorage } from '../../app/firebase'
import { useState } from 'react'
import { saveBlob } from '../helpers'
import { getStorage } from 'firebase/storage'

export const useFirebaseStorage = () => {
  const storage = getStorage()

  const [isUploading, setIsUploading] = useState(false)
  const [isDownloading, setIsDownloading] = useState(false)

  const uploadFile = (clientId: string, file: File): Promise<string> => {
    if (!file) return Promise.reject('No file provided')
    setIsUploading(true)
    const storageRef = ref(storage, `/${clientId}/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file)

    return new Promise<string>((resolve, reject) => {
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          console.log(
            `Upload is ${
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            }% done`
          )
        },
        (error) => {
          console.error('Error during upload:', error)
          setIsUploading(false)
          reject(error)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((url) => {
              console.log('File available at', url)
              resolve(url)
              setIsUploading(false)
            })
            .catch((error) => {
              console.error('Error getting download URL:', error)
              setIsUploading(false)
              reject(error)
            })
        }
      )
    })
  }

  const downloadFile = (clientId: string, imageName: string): void => {
    const imageRef = ref(firebaseStorage, `${clientId}/${imageName}`)
    setIsDownloading(true)
    getBlob(imageRef)
      .then((blob) => {
        saveBlob(blob, imageName)
        console.log('File downloaded successfully')
      })
      .catch((error) => {
        console.error('Error downloading file:', error)
      })
      .finally(() => {
        setIsDownloading(false)
      })
  }

  const deleteFile = (clientId: string, imageName: string): void => {
    const imageRef = ref(firebaseStorage, `${clientId}/${imageName}`)
    deleteObject(imageRef)
      .then(() => {
        console.log('File deleted successfully')
      })
      .catch((error) => {
        console.error('Error deleting file:', error)
      })
  }

  return {
    uploadFile,
    isUploading,
    downloadFile,
    isDownloading,
    deleteFile,
  }
}
