export interface IUser {
  id: string
  name: string
  email: string
  createdDate: number
  updatedDate: number
  phone?: string
  age?: number
  weight?: number // Вес в килограммах
  height?: number // Рост в сантиметрах
  waistCircumference?: number // Обхват талии в сантиметрах
  chestCircumference?: number // Обхват груди в сантиметрах
  hipCircumference?: number // Обхват бедер в сантиметрах
  armCircumference?: number // Обхват руки в сантиметрах
  legCircumference?: number // Обхват ноги в сантиметрах
  goal?: string // Цель и ожидаемый результат
  contraindications?: string // Противопоказания, заболевания и ограничения
  trainingExperience?: string // Опыт тренировок
  currentDiet?: string // Текущий рацион питания
  fullBodyPhotos?: {
    front: string // URL или путь к фотографии спереди
    side: string // URL или путь к фотографии сбоку
    back: string // URL или путь к фотографии со спины
  }
}
